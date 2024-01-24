import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:mun/utils/constants.dart';


class MunWidget extends StatelessWidget {
  const MunWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: size.width * 0.9,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Container(
            height: size.width * 0.5,
            width: size.width * 0.5,
            child: Image.asset('$munLogo'),
          ),
          Column(
            children: [
              Text(
                "KIIT International MUN 2023",
                style: GoogleFonts.inter(
                    fontSize: size.height * 0.023,
                    fontWeight: FontWeight.w600,
                    color: Colors.white),
              ),
              SizedBox(
                height: size.height * 0.02,
              ),
              Text(
                "A Decade of Diplomacy",
                style: GoogleFonts.inter(
                    fontSize: size.height * 0.019,
                    fontWeight: FontWeight.w500,
                    color: Colors.white),
              ),
              SizedBox(
                height: size.height * 0.01,
              ),
              Text(
                hashTag,
                style: GoogleFonts.inter(
                  fontSize: size.height * 0.018,
                  color: HexColor('BF8665'),
                ),
              ),
              SizedBox(
                height: size.height * 0.015,
              ),
              Text(
                "October 6 - October 8",
                style: GoogleFonts.inter(
                  fontSize: size.height * 0.018,
                  color: Colors.white,
                ),
              ),
              SizedBox(
                height: size.height * 0.02,
              ),
            ],
          ),
        ],
      ),
    );
  }
}
