import 'dart:async';

import 'package:connectivity/connectivity.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';
import 'package:mun/ui/pages/drawer/pdf_viewer/view_pdf.dart';
import 'package:mun/ui/widgets/connectInternet.dart';
import 'package:mun/utils/constants.dart';
import 'package:mun/utils/themes.dart';
import 'package:url_launcher/url_launcher.dart';

class StudyGuide extends StatefulWidget {
  @override
  _StudyGuideState createState() => _StudyGuideState();
}

class _StudyGuideState extends State<StudyGuide> {
  late Connectivity connectivity;
  bool isOffline = false;
  late StreamSubscription<ConnectivityResult> _connectivitySubscription;

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
    super.initState();
  }

  @override
  void dispose() {
    _connectivitySubscription.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
              onPressed: () => Navigator.of(context).pop(),
              icon: Icon(
                Icons.arrow_back_ios_rounded,
                color: accentColor,
              )),
          title: Text(
            'Study Guide',
            style: TextStyle(
              fontSize: size.width * 0.04,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        body: isOffline ? Connect(size: size) : commiteeList(size)
        // StreamBuilder(
        //     stream: FirebaseFirestore.instance
        //         .collection("study_guide")
        //         .snapshots(),
        //     builder: (context, AsyncSnapshot snapshot) {
        //       if (snapshot.connectionState == ConnectionState.waiting)
        //         return Loader();
        //       else if (snapshot.hasData) {
        //         Map doc = snapshot.data.docs[0].data()['guides'];
        //         return commiteeList(doc, size);
        //       } else
        //         return Center(child: Text('Error Fetching Data'));
        //     },
        //   ),
        );
  }

  Widget commiteeList(Size size) {
    return ListView.builder(
      physics: BouncingScrollPhysics(),
      controller: ScrollController(),
      padding: EdgeInsets.all(10.0),
      itemCount: commites.length,
      itemBuilder: (context, index) {
        NumberFormat formatter = new NumberFormat("00");
        String formattedNumber = formatter.format(index + 1);
        return Card(
          color: Colors.black,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(10.0),
          ),
          child: ListTile(
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(10.0),
                side: BorderSide(
                  color: secondaryAccentColor,
                )),
            onTap: () async {
              if (commites[index].studyGuide != "") {
                if (await canLaunchUrl(Uri.parse(commites[index].studyGuide)) ==
                    true) {
                  launchUrl(Uri.parse(commites[index].studyGuide));
                }
              } else {}
            },
            contentPadding: EdgeInsets.symmetric(
              horizontal: 30.0,
              vertical: 10.0,
            ),
            leading: Text(
              formattedNumber,
              style: GoogleFonts.inter(
                fontSize: 20,
                color: secondaryAccentColor,
              ),
            ),
            title: Text(
              commites[index].name,
              style: TextStyle(
                fontWeight: FontWeight.bold,
              ),
            ),
            subtitle: Padding(
              padding: const EdgeInsets.only(top: 15.0),
              child: Text(
                commites[index].fullForm,
                style: TextStyle(fontSize: size.width * 0.03),
              ),
            ),
          ),
        );
      },
    );
  }
}
