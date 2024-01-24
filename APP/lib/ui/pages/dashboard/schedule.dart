import 'package:flutter/material.dart';
import 'package:mun/ui/pages/dashboard/schedule/tab.dart';
import 'package:mun/utils/themes.dart';

class Schedule extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        // backgroundColor: HexColor('111111'),
        appBar: TabBar(
          labelColor: secondaryAccentColor,
          // indicator: Divider(),
          indicatorColor: secondaryAccentColor,
          tabs: [
            Tab(text: 'Friday'),
            Tab(text: 'Saturday'),
            Tab(text: 'Sunday'),
          ],
        ),
        body: TabBarView(
          children: <Widget>[
            ScheduleTab(day: "Friday"),
            ScheduleTab(day: "Saturday"),
            ScheduleTab(day: "Sunday"),
          ],
        ),
      ),
    );
  }

  Widget body(Map event) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        appBar: TabBar(
          labelColor: secondaryAccentColor,
          // indicator: Divider(),
          tabs: [
            Tab(text: 'Friday'),
            Tab(text: 'Saturday'),
            Tab(text: 'Sunday'),
          ],
        ),
        body: TabBarView(
          children: <Widget>[
            ScheduleTab(day: "Friday"),
            ScheduleTab(day: "Saturday"),
            ScheduleTab(day: "Sunday"),
          ],
        ),
      ),
    );
  }
}
