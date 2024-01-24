import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:mun/utils/constants.dart';
import 'package:mun/utils/themes.dart';
import 'package:shimmer/shimmer.dart';

class Testimonials extends StatelessWidget {
  Testimonials({Key? key}) : super(key: key);

  Future<void> _showMyDialog(
    BuildContext context,
    String name,
    String text,
    String desg,
  ) async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          title: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                name,
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: accentColor,
                ),
              ),
              SizedBox(height: 5.0),
              Text(
                desg,
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: size.width * 0.03,
                ),
              ),
            ],
          ),
          content: Text(text),
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

  final ScrollController scrollController =
      ScrollController(initialScrollOffset: 50.0);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: size.height * 0.3,
      child: Scrollbar(
        // thumbVisibility: true,
        trackVisibility: true,
        thumbVisibility: true,
        // trackVisibility: true,
        controller: scrollController,
        child: ListView.builder(
          physics: BouncingScrollPhysics(),
          shrinkWrap: true,
          scrollDirection: Axis.horizontal,
          itemCount: leads.length,
          itemBuilder: (BuildContext context, int index) {
            return Padding(
              padding: const EdgeInsets.only(left: 1.0, top: 20, bottom: 20),
              child: InkWell(
                onTap: () => _showMyDialog(
                  context,
                  leads[index].name,
                  leads[index].testimonial,
                  leads[index].position,
                ),
                child: Column(
                  children: [
                    Container(
                      // height: size.height * 0.05,
                      width: size.width * 0.35,
                      decoration:
                          BoxDecoration(shape: BoxShape.circle, boxShadow: [
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
                        // decoration: BoxDecoration(shape: BoxShape.circle),
                        child: CachedNetworkImage(
                          imageUrl: leads[index].photo,
                          height: size.height * 0.13,
                          width: size.width,
                          fit: BoxFit.fitHeight,
                          placeholder: (context, url) => Shimmer.fromColors(
                            baseColor: Colors.grey,
                            highlightColor:
                                Theme.of(context).scaffoldBackgroundColor,
                            child: Container(
                              height: size.height * 0.1,
                              width: size.width,
                              color: Colors.grey,
                            ),
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: EdgeInsets.only(top: 5),
                      child: Container(
                        width: size.width * 0.28,
                        child: Center(
                          child: Text(
                            leads[index].name,
                            style: GoogleFonts.inter(
                              fontSize: 12,
                              fontWeight: FontWeight.w600,
                            ),
                            textAlign: TextAlign.center,
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: EdgeInsets.only(top: 5),
                      child: Container(
                        width: size.width * 0.28,
                        child: Center(
                          child: Text(
                            leads[index].position,
                            style: GoogleFonts.inter(
                              fontSize: 10,
                              fontWeight: FontWeight.w500,
                              color: secondaryAccentColor,
                            ),
                            textAlign: TextAlign.center,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
