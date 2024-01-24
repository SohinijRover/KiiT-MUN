import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:mun/utils/constants.dart';
import 'package:mun/utils/themes.dart';
import 'package:shimmer/shimmer.dart';
import 'package:url_launcher/url_launcher.dart';

// List<String> images = [
//   "https://kiitmun.org/assets/img/members/sagnik-ghosh.png",
//   "https://kiitmun.org/assets/img/members/manas-mishra.png",
//   "https://kiitmun.org/assets/img/members/rhea-sinha.png",
//   "https://kiitmun.org/assets/img/members/surarchi-kumar.png",
//   "https://kiitmun.org/assets/img/members/om-chaitanya.png",
// ];

class ContactsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(
            horizontal: 30.0,
            vertical: 10.0,
          ),
          child: Text(
            'Secretariat',
            style: GoogleFonts.montserrat(
              fontSize: size.width * 0.05,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        Expanded(
          child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10.0),
              child: ListView.builder(
                  physics: BouncingScrollPhysics(),
                  itemCount: 5,
                  itemBuilder: (context, index) {
                    return Container(
                      padding: EdgeInsets.all(5.0),
                      margin: EdgeInsets.all(10.0),
                      child: Row(
                        children: [
                          Container(
                            width: size.width * 0.25,
                            decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                boxShadow: [
                                  // BoxShadow(
                                  //   color: accentColor,
                                  //   blurRadius: 10,
                                  //   spreadRadius: 10,
                                  // ),
                                  // BoxShadow(
                                  //   color: accentColor,
                                  //   blurRadius: 5,
                                  // ),
                                  BoxShadow(
                                    color: accentColor,
                                    blurRadius: 25,
                                  ),
                                ]),
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(10),
                              child: CachedNetworkImage(
                                imageUrl: leads[index].photo,
                                height: size.height * 0.1,
                                width: size.width,
                                fit: BoxFit.fitHeight,
                                placeholder: (context, url) =>
                                    Shimmer.fromColors(
                                  baseColor: Colors.grey,
                                  highlightColor:
                                      Theme.of(context).scaffoldBackgroundColor,
                                  child: Container(
                                    height: size.height * 0.3,
                                    width: size.width,
                                    color: Colors.grey,
                                  ),
                                ),
                              ),
                            ),
                          ),
                          SizedBox(width: 30.0),
                          RichText(
                            text: TextSpan(
                              text: leads[index].name + '\n',
                              style:
                                  DefaultTextStyle.of(context).style.copyWith(
                                        fontSize: size.width * 0.035,
                                      ),
                              children: <TextSpan>[
                                TextSpan(
                                  text: leads[index].position,
                                  style: TextStyle(
                                    fontWeight: FontWeight.bold,
                                    fontSize: size.width * 0.028,
                                    color: secondaryAccentColor,
                                  ),
                                )
                              ],
                            ),
                          ),
                          Spacer(),
                          // SizedBox(width: 30),
                          IconButton(
                            color: iconColor,
                            icon: Icon(
                              Icons.call,
                              size: size.width * 0.06,
                            ),
                            onPressed: () async {
                              String url = 'tel:+91${leads[index].contact}';
                              if (await canLaunchUrl(Uri.parse(url))) {
                                await launchUrl(Uri.parse(url));
                              } else {
                                throw 'Could not launch $url';
                              }
                            },
                          )
                        ],
                      ),
                    );
                  })),
        ),
      ],
    );
  }
}
