import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';

final Color accentColor = HexColor("2598A8").withOpacity(0.7);
final Color secondaryAccentColor = HexColor("BF8665");
final iconColor = HexColor("2598A8");

ThemeData darkTheme = ThemeData.dark().copyWith(
  cardColor: Colors.grey[900],
  visualDensity: VisualDensity.adaptivePlatformDensity,
  canvasColor: Colors.black,
  textTheme: GoogleFonts.interTextTheme(
    ThemeData.dark().textTheme,
  ),
  scaffoldBackgroundColor: Colors.black,
  bottomSheetTheme: BottomSheetThemeData(
    backgroundColor: Colors.grey[900],
  ),
  appBarTheme: AppBarTheme(
    elevation: 0.0,
    color: Colors.black,
    iconTheme: IconThemeData(color: Colors.white),
  ),
  tabBarTheme: TabBarTheme(
    unselectedLabelStyle: fontStyle,
    labelStyle: fontStyle,
    labelColor: accentColor,
    unselectedLabelColor: Colors.white,
    indicator: UnderlineTabIndicator(
      borderSide: BorderSide(
        color: secondaryAccentColor,
        width: 2.0,
      ),
    ),
  ),
  popupMenuTheme: PopupMenuThemeData(color: Colors.black),
  dialogBackgroundColor: Colors.black,
  snackBarTheme: SnackBarThemeData(
    backgroundColor: Colors.grey[900],
    actionTextColor: accentColor,
    contentTextStyle: TextStyle(
      color: Colors.white,
    ),
  ),
  colorScheme: ColorScheme.fromSwatch().copyWith(secondary: accentColor),
);

TextStyle fontStyle = GoogleFonts.inter();

IconThemeData iconTheme = IconThemeData(color: iconColor);
