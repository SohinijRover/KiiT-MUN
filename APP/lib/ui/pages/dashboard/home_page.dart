import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:mun/controller/controller.dart';
import 'package:mun/ui/pages/dashboard/schedule.dart';
import 'package:mun/ui/widgets/announcewidget.dart';
import 'package:mun/ui/widgets/customFlipPanel.dart';
import 'package:mun/ui/widgets/munwidget.dart';
import 'package:mun/ui/widgets/testimonials.dart';
import 'package:mun/utils/constants.dart';
import 'package:mun/utils/themes.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late Size size;
  late bool darkmode;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    size = MediaQuery.of(context).size;
    darkmode = MediaQuery.of(context).platformBrightness == Brightness.dark;
    return Container(
      alignment: Alignment.bottomCenter,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [
            HexColor('2D7983').withOpacity(0),
            HexColor('000000').withOpacity(.86),
          ],
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20.0),
        child: ListView(
          physics: BouncingScrollPhysics(),
          children: [
            carouselWidget(context, size),
            SizedBox(height: size.height * 0.015),
            Padding(
              padding: const EdgeInsets.symmetric(
                horizontal: 30.0,
              ),
              //child: Divider(thickness: 2.0),
            ),
            !done
                ? Column(
                    children: [
                      timerWidgets(),
                      // Padding(
                      //   padding: const EdgeInsets.symmetric(horizontal: 40.0),
                      //   child: InkWell(
                      //     onTap: () {},
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
                      //                 "Meet us here!",
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
                    ],
                  )
                : AnnounceWidget(),
            Padding(
              padding: EdgeInsets.symmetric(
                //horizontal: size.height * 0.045,
                vertical: size.height * 0.025,
              ),
              //child: Divider(thickness: 2.0),
            ),
            ListTile(
              dense: true,
              title: Text(
                'The KIITMUN Insignia',
                style: GoogleFonts.inter(
                  fontWeight: FontWeight.w600,
                  fontSize: size.width * 0.042,
                ),
              ),
            ),
            Testimonials(),
            Padding(
              padding: const EdgeInsets.only(top: 12.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              ),
            )
          ],
        ),
      ),
    );
  }

  Widget timerWidgets() {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        Text(
          'Event Ends In: ',
          style: TextStyle(
            fontSize: size.width * 0.06,
            color: accentColor,
            fontWeight: FontWeight.bold,
          ),
        ),
        SizedBox(height: 40.0),
        FlipClock(
          onDone: () {
            done = true;
            setState(() {});
          },
          duration: eventEndDate.difference(now),
          spacing: EdgeInsets.symmetric(
            vertical: 5.0,
            horizontal: 2.0,
          ),
          borderRadius: BorderRadius.circular(2.0),
          digitColor: darkmode ? Colors.black : Colors.white,
          backgroundColor: darkmode ? Colors.white : Colors.black,
          digitSize: size.width * 0.05,
        ),
        SizedBox(height: 30.0),
        // Text(
        //   hashTag,
        //   style: TextStyle(
        //     fontSize: size.width * 0.04,
        //     color: accentColor,
        //     fontWeight: FontWeight.bold,
        //   ),
        // )
      ],
    );
  }

  Widget carouselWidget(BuildContext context, Size size) {
    return Stack(
      children: <Widget>[
        // Container(
        //   child: Carousel(),
        // ),
        Center(
          child: Container(
            height: size.width * 0.9,
            child: Container(
              height: size.width * 0.9,
              width: size.width,
              child: MunWidget(),
            ),
          ),
        ),
      ],
    );
  }
}
