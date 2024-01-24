import 'dart:async';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:mun/utils/constants.dart';
import '../../widgets/connectInternet.dart';
import 'package:connectivity/connectivity.dart';

var loading;
var isOffline = false;

class Partners extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Collaborators',
          style: TextStyle(
            fontSize: size.width * 0.04,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      body: LoadPartners(),
    );
  }
}

class LoadPartners extends StatefulWidget {
  @override
  _LoadPartnersState createState() => _LoadPartnersState();
}

class _LoadPartnersState extends State<LoadPartners> {
  late Connectivity connectivity;
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
    return isOffline
        ? Connect(size: size)
        : SingleChildScrollView(child: partnerList());
    // StreamBuilder(
    //     stream:
    //         FirebaseFirestore.instance.collection("partners").snapshots(),
    //     builder: (context, AsyncSnapshot snapshot) {
    //       if (snapshot.connectionState == ConnectionState.waiting) {
    //         return Loader();
    //       } else if (snapshot.hasData) {
    //         Map partners = snapshot.data.docs[0].data();
    //         return partners['isUpdated']
    //             ?
    //             : Updated();
    //       } else {
    //         return Center(
    //           child: Text('Error fetching details'),
    //         );
    //       }
    //     },
    //   );
  }

  Widget partnerList() {
    double height = MediaQuery.of(context).size.height;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.all(15.0),
          child: Text("International MUNs", style: TextStyle(fontSize: 20)),
        ),
        SizedBox(
          height: (size.height * 0.271) * collaborateInternationalMUN.length,
          child: ListView.builder(
            physics: NeverScrollableScrollPhysics(),
            // shrinkWrap: true,
            itemCount: collaborateInternationalMUN.length,
            itemBuilder: (BuildContext context, int index) {
              return Container(
                height: height * 0.27,
                child: CachedNetworkImage(
                  imageUrl: collaborateInternationalMUN[index],
                ),
              );
            },
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(30.0),
          child: Text(
            "National NGOs",
            style: TextStyle(
              fontSize: 20,
              color: Colors.white,
            ),
          ),
        ),
        SizedBox(
          height: (size.height * 0.271) * collaborateNationalMUN.length,
          child: ListView.builder(
            physics: NeverScrollableScrollPhysics(),
            // shrinkWrap: true,
            itemCount: collaborateNationalMUN.length,
            itemBuilder: (BuildContext context, int index) {
              return Container(
                // padding: EdgeInsets.only(top: 10),
                height: height * 0.27,
                width: MediaQuery.of(context).size.width,
                child: CachedNetworkImage(
                  imageUrl: collaborateNationalMUN[index],
                ),
              );
            },
          ),
        ),
      ],
    );
  }
}
