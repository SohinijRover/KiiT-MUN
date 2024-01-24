import 'dart:async';

import 'package:connectivity/connectivity.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/material.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:mun/controller/controller.dart';
import 'package:mun/ui/widgets/connectInternet.dart';
import 'package:mun/ui/pages/dashboard/contacts_page.dart';
import 'package:mun/ui/pages/dashboard/schedule.dart';
import 'package:mun/ui/widgets/app_drawer.dart';
import 'package:mun/ui/pages/dashboard/home_page.dart';
import 'package:mun/utils/constants.dart';
import 'package:mun/utils/themes.dart';
import 'package:url_launcher/url_launcher.dart';

class DashBoard extends StatefulWidget {
  @override
  _DashBoardState createState() => _DashBoardState();
}

class _DashBoardState extends State<DashBoard> {
  late Connectivity connectivity;
  bool isOffline = false;
  late StreamSubscription<ConnectivityResult> _connectivitySubscription;

  //Edit here
  String starInstagramPost =
      "https://www.instagram.com/p/Cxp7WddR5JS/?igshid=MzRlODBiNWFlZA==";
  String starImage = "assets/irfan.png";
  String starPerformanceDate = "7th October";

  static List<Widget> _widgetOptions = <Widget>[
    HomePage(),
    Schedule(),
    ContactsPage(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      Controller.selectedIndex = index;
    });
  }

  generateNotifications(RemoteMessage message) async {
    const AndroidNotificationChannel channel = AndroidNotificationChannel(
      'high_importance_channel', // id
      'High Importance Notifications', // title
      description:
          'This channel is used for important notifications.', // description
      importance: Importance.high,
      playSound: true,
      enableVibration: true,
    );

    final FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
        FlutterLocalNotificationsPlugin();

    var initializationSettingsAndroid =
        AndroidInitializationSettings('@drawable/splash');
    var initializationSettings =
        InitializationSettings(android: initializationSettingsAndroid);
    flutterLocalNotificationsPlugin.initialize(initializationSettings);

    flutterLocalNotificationsPlugin.initialize(initializationSettings);

    await flutterLocalNotificationsPlugin
        .resolvePlatformSpecificImplementation<
            AndroidFlutterLocalNotificationsPlugin>()
        ?.createNotificationChannel(channel);

    RemoteNotification? notification = message.notification;
    AndroidNotification? android = message.notification?.android;

    if (notification != null && android != null) {
      flutterLocalNotificationsPlugin.show(
        notification.hashCode,
        notification.title,
        notification.body,
        NotificationDetails(
          android: AndroidNotificationDetails(
            channel.id,
            channel.name,
            channelDescription: channel.description,
            icon: '@drawable/splash',
            enableVibration: true,
            playSound: true,
            enableLights: true,
            ongoing: false,
            importance: Importance.high,
            priority: Priority.high,
            visibility: NotificationVisibility.public,
            channelShowBadge: true,
            showWhen: true,
            // other properties...
          ),
        ),
      );
    }
  }

  Future<void> showPopup(RemoteMessage message, BuildContext context) {
    RemoteNotification? notification = message.notification;
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(notification!.title!),
          content: Text(notification.body!),
          actions: [
            TextButton(
              child: Text("Ok"),
              onPressed: () {
                Navigator.of(context).pop();
              },
            )
          ],
        );
      },
    );
  }

  initFirebaseMessaging(BuildContext context) {
    FirebaseMessaging.instance.getToken();
    FirebaseMessaging.onMessage.listen((RemoteMessage message) {
      showPopup(message, context);
      generateNotifications(message);
    });
  }

  Future<void> _showDialog() async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext context) {
        return AlertDialog(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(10.0),
          ),
          title: Text(
            'Star Performance',
            style: TextStyle(
              fontWeight: FontWeight.bold,
              color: Colors.brown,
            ),
          ),
          content: Container(
            height: size.height * 0.3,
            child: Column(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(10.0),
                  // child: CachedNetworkImage(
                  //   imageUrl:
                  //       'https://splash.org/dev/assets/img/carousel/carousel8.jpg',
                  //   placeholder: (context, url) => Shimmer.fromColors(
                  //     child: Container(
                  //       height: size.height * 0.24,
                  //       width: size.width,
                  //       decoration: BoxDecoration(
                  //         color: Colors.grey,
                  //         borderRadius: BorderRadius.circular(10.0),
                  //       ),
                  //     ),
                  //     baseColor: Colors.grey,
                  //     highlightColor: Theme.of(context).scaffoldBackgroundColor,
                  //   ),
                  // ),
                  child: InkWell(
                    onTap: () => {
                      launchUrl(Uri.parse(starInstagramPost)),
                    },
                    child: SizedBox(
                      height: MediaQuery.sizeOf(context).height * 0.25,
                      width: MediaQuery.sizeOf(context).width,
                      child: Image.asset(
                        starImage,
                        fit: BoxFit.fitWidth,
                      ),
                    ),
                  ),
                ),
                Spacer(),
                Text(
                  '$starPerformanceDate. Mark your calenders!',
                  style: TextStyle(
                    fontSize: size.width * 0.035,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
          ),
          actions: <Widget>[
            TextButton(
              child: const Text('Close'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  @override
  void initState() {
    connectivity = new Connectivity();
    _connectivitySubscription =
        connectivity.onConnectivityChanged.listen((ConnectivityResult result) {
      if (result == ConnectivityResult.wifi ||
          result == ConnectivityResult.mobile) {
        isOffline = false;
        setState(() {});
      } else {
        isOffline = true;
        setState(() {});
      }
    });
    initFirebaseMessaging(context);
    super.initState();
    Future(_showDialog);
  }

  @override
  void dispose() {
    _connectivitySubscription.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    size = MediaQuery.of(context).size;
    darkMode = MediaQuery.of(context).platformBrightness == Brightness.dark;
    return isOffline
        ? SafeArea(
            child: Scaffold(
              body: Connect(size: size),
            ),
          )
        : SafeArea(
            child: Scaffold(
              endDrawer: AppDrawer(),
              appBar: PreferredSize(
                preferredSize: Size(size.width, size.height * 0.1),
                child: Stack(
                  children: [
                    Container(
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                          colors: [
                            HexColor("1A4D54").withOpacity(0.8),
                            HexColor("1A4D54").withOpacity(0.6),
                            HexColor("1A4D54").withOpacity(0.3),
                            HexColor("1A4D54").withOpacity(0),
                          ],
                        ),
                      ),
                    ),
                    AppBar(
                      // systemOverlayStyle: SystemUiOverlayStyle(
                      //   // Status bar color
                      //   statusBarColor: Colors.red,

                      //   // Status bar brightness (optional)
                      //   statusBarIconBrightness:
                      //       Brightness.dark, // For Android (dark icons)
                      //   statusBarBrightness:
                      //       Brightness.dark, // For iOS (dark icons)
                      // ),
                      backgroundColor: Colors.transparent,
                      leading: Padding(
                        padding: const EdgeInsets.all(10.0),
                        child: Image.asset("assets/kiitMUN.png"),
                      ),
                      // scrolledUnderElevation: 0,

                      centerTitle: true,
                      title: Text(
                        'KIIT MUN 2023',
                        style: TextStyle(
                          fontSize: size.width * 0.045,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              body: Center(
                child: _widgetOptions.elementAt(Controller.selectedIndex),
              ),
              bottomNavigationBar: BottomNavigationBar(
                showSelectedLabels: false,
                showUnselectedLabels: false,
                items: <BottomNavigationBarItem>[
                  BottomNavigationBarItem(
                    icon: Icon(Icons.home),
                    // label: 'Home',
                    label: '',
                  ),
                  BottomNavigationBarItem(
                    icon: Icon(Icons.schedule),
                    // label: 'Schedule',
                    label: '',
                  ),
                  BottomNavigationBarItem(
                    icon: Icon(Icons.call),
                    // label: 'Contacts',
                    label: '',
                  ),
                ],
                currentIndex: Controller.selectedIndex,
                selectedItemColor: secondaryAccentColor,
                onTap: _onItemTapped,
              ),
            ),
          );
  }
}
