import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:mun/utils/constants.dart';
import 'package:mun/utils/themes.dart';
import 'package:url_launcher/url_launcher.dart';

class AnnounceWidget extends StatefulWidget {
  const AnnounceWidget({Key? key}) : super(key: key);

  @override
  State<AnnounceWidget> createState() => _AnnounceWidgetState();
}

class _AnnounceWidgetState extends State<AnnounceWidget> {
  _launchURL(String url) async {
    await launchUrl(Uri.parse(url));
  }

  @override
  Widget build(BuildContext context) {
    // NotificationService notification = NotificationService();
    return Card(
      //elevation: 8.0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(15.0),
      ),
      color: HexColor('1B1B1B'),
      child: Padding(
        padding: EdgeInsets.symmetric(
          vertical: size.width * 0.09,
          horizontal: size.width * 0.07,
        ),
        child: Column(
          children: [
            RichText(
              textAlign: TextAlign.center,
              text: TextSpan(
                text: "Event is completed",
                style: TextStyle(
                  fontSize: size.width * 0.045,
                  color: Colors.white,
                  fontWeight: FontWeight.w800,
                ),
                children: <TextSpan>[
                  TextSpan(
                    text: "\nThank you for your participation",
                    style: TextStyle(
                      fontSize: size.width * 0.045,
                      color: HexColor('BF8665'),
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                ],
              ),
            ),

            // Padding(
            //   padding: const EdgeInsets.symmetric(horizontal: 40.0),
            //   child: InkWell(
            //     onTap: () {
            //       _launchURL("https://kiitmun.org/registration.php");
            //     },
            //     child: Container(
            //       height: size.height * 0.06,
            //       // width: size.width,
            //       decoration: BoxDecoration(
            //         color: secondaryAccentColor,
            //         // border: Border.all(),
            //         borderRadius: BorderRadius.circular(10),
            //       ),
            //       child: Row(
            //         mainAxisAlignment: MainAxisAlignment.center,
            //         children: [
            //           Padding(
            //             padding: EdgeInsets.only(left: 8.0),
            //             child: Center(
            //               child: Text(
            //                 "Register Now!",
            //                 style: GoogleFonts.inter(
            //                   color: Colors.white,
            //                   fontSize: size.width * 0.042,
            //                   fontWeight: FontWeight.w600,
            //                 ),
            //               ),
            //             ),
            //           ),
            //         ],
            //       ),
            //     ),
            //   ),
            // )
            // Row(
            //   mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            //   children: [
            //     MediaButtons(
            //       icon: FontAwesomeIcons.facebookF,
            //       url: 'https://www.facebook.com/kiitmun',
            //     ),
            //     MediaButtons(
            //       icon: FontAwesomeIcons.instagram,
            //       url: 'https://www.instagram.com/instakiitmun/',
            //     ),
            //     MediaButtons(
            //       icon: FontAwesomeIcons.twitter,
            //       url: 'https://twitter.com/kiitmun?s=08',
            //     ),
            //     MediaButtons(
            //       icon: FontAwesomeIcons.linkedinIn,
            //       url: 'https://www.linkedin.com/in/kiitmun',
            //     ),
            //     MediaButtons(
            //       icon: FontAwesomeIcons.globe,
            //       url: 'https://kiitmun.org/',
            //     ),
            //   ],
            // )
          ],
        ),
      ),
    );
  }
}
