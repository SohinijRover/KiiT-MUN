import 'package:flutter/material.dart';
import 'package:hexcolor/hexcolor.dart';

import '../../../../utils/constants.dart';
import '../../../../utils/themes.dart';

class ScheduleTab extends StatefulWidget {
  final String day;
  const ScheduleTab({
    Key? key,
    required this.day,
  }) : super(key: key);
  @override
  _ScheduleTabState createState() => _ScheduleTabState();
}

class _ScheduleTabState extends State<ScheduleTab> {
  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.day == "Friday")
      return Column(
        // crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.only(left: 15.0, top: 15),
            child: Text(
              "Day 1 : Inception",
              style: TextStyle(
                fontSize: 25,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Expanded(
            child: eventList(fridayEventName, fridayEventLocation,
                fridayEventStartTime, fridayEventEndTime),
          ),
        ],
      );

    if (widget.day == "Saturday")
      return Column(
        children: [
          Padding(
            padding: const EdgeInsets.only(left: 15.0, top: 15),
            child: Text(
              "Day 2 : Discourse",
              style: TextStyle(
                fontSize: 25,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Expanded(
            child: eventList(saturdayEventName, saturdayEventLocation,
                saturdayEventStartTime, saturdayEventEndTime),
          ),
        ],
      );
    else {
      return Column(
        // crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.only(left: 15.0, top: 15),
            child: Text(
              "Day 3 : Epilogue",
              style: TextStyle(
                fontSize: 25,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Expanded(
            child: eventList(sundayEventName, sundayEventLocation,
                sundayEventStartTime, sundayEventEndTime),
          ),
        ],
      );
    }
  }

  Widget eventList(List event, List location, List start, List end) {
    return ListView.builder(
      physics: BouncingScrollPhysics(),
      padding: EdgeInsets.all(10.0),
      itemCount: event.length,
      itemBuilder: (context, index) {
        return Card(
          color: HexColor('111111'),
          shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(10),
              side: BorderSide(
                color: accentColor,
              )),
          child: Column(
            children: <Widget>[
              ListTile(
                leading: Icon(
                  Icons.event,
                  color: iconColor,
                ),
                title: Text(
                  'Event',
                  style: TextStyle(
                    fontSize: 12.0,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                subtitle: Text(
                  event[index],
                  style: TextStyle(
                    fontSize: 13.0,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              ListTile(
                leading: Icon(
                  Icons.location_on,
                  color: iconColor,
                ),
                title: Text(
                  'Location',
                  style: TextStyle(
                    fontSize: 12.0,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                subtitle: Text(
                  location[index],
                  style: TextStyle(
                    fontSize: 13.0,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              ListTile(
                leading: Icon(
                  Icons.timer,
                  color: iconColor,
                ),
                title: Text(
                  'Time',
                  style: TextStyle(
                    fontSize: 12.0,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                subtitle: Text(
                  '${start[index]} - ${end[index]}',
                  style: TextStyle(
                    fontSize: 13.0,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
