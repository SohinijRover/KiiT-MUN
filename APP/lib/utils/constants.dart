import 'dart:ui';

import 'package:flutter/foundation.dart';
import 'package:mun/models/about.dart';
import 'package:mun/models/commitee.dart';

import '../models/lead.dart';

DateTime now = new DateTime.now();
DateTime eventEndDate = DateTime.parse('2023-10-08 10:00:00.00');
int? days, hours, minutes, seconds;
bool done = false;
bool darkMode = false;
Size size = new Size(0, 0);

String hashTag = "#EngageToEmpower";
ValueNotifier valueNotifier = ValueNotifier(false);

String uncharterPDF =
    "https://drive.google.com/file/d/1ti-qM692kNtXlQU26HB8njEzz0WK-p-N/view";
String humanRightsImage = "https://i.ibb.co/CJPzJrS/Humanrights.png";
String venueMap = "assets/kiimap.png";
String havingAnIssueUrl = "https://www.kiitmun.org/register?modal=open";
String downloadsUrl = "https://www.kiitmun.org/downloads";

List<Lead> leads = [
  Lead(
    contact: "8210542443",
    testimonial:
        "Shouldering the responsibility of heading the Secretariat of KIIT MUN 2023 as the Secretary-General is a matter of great pride for me. Being a student involved with MUN since the very first year of my graduation, I have seen the conference and the passion among participants grow with every subsequent edition. KIIT International MUN being the result collaborative teamwork has helped me develop organizational skills that I am sure to take away with me into the real world. I hope this offline edition following two editions chaired online will be able to make its mark, living up to the legacy of KIIT International MUN.",
    name: "Kshitij Singh",
    photo: "https://i.ibb.co/ZJkDh89/kshitij.png",
    position: "Secretary General",
  ),
  Lead(
    contact: "7735127138",
    testimonial:
        "Being the DSG of the gathering this year has been a staggering inclination if you were  to ask me, I can guarantee that this will be a groundbreaking encounter for everybody out there considering the way that KIIT MUN will be quite possibly one of the most monstrous and phenomenal procedure this year as in 3 years this is the first occasion that KIIT MUN will be held offline.",
    name: "Satyajeet Das",
    photo: "https://i.ibb.co/2NntPXv/satyajeet.png",
    position: "Deputy Secretary General",
  ),
  Lead(
    contact: "7427822139",
    testimonial:
        "MUN has been one of my favorite activities since my school days. Right when I enrolled in KIIT, KIITMUN was something that got me excited and energized. It has been a long journey  from delegating in KIITMUN to organizing it. I genuinely hope each and every participant  this year will have an incredible and enriching learning experience. ",
    name: "Ayush Kumar Srivastav",
    photo: "https://i.ibb.co/WGZv02W/ayush1.png",
    position: "Director General",
  ),
  Lead(
    contact: "7738413355",
    testimonial:
        "There are a couple of things in life that are an essential piece of me. KIITMUN is one of those things. Right from my freshman year until my senior year, KIITMUN has assisted me with developing personally and made me a superior version of myself. ",
    name: "Shubhadittya Roy",
    photo: "https://i.ibb.co/fGSMzgQ/shubh1.png",
    position: "Deputy Director General",
  ),
  Lead(
    contact: "7008051628",
    testimonial:
        "KIITMUN is one of the largest MUN conferences in Asia. It began in the year 2013 and has been developing from that point onward. This conference has exclusively propelled endless energetic and youthful personalities and I truly wish that in this edition we will be able to reach out to more youngsters and make the experience a far more significant one. ",
    name: "Shivram Krishna",
    photo: "https://i.ibb.co/276qsdt/shivram1.png",
    position: "Chargé D'affaires",
  ),
];

List<Committee> commites = [
  Committee(
    name: "DISEC",
    image: "https://i.ibb.co/ftWmD6Z/DISEC-4x-min.png",
    logo: "https://i.ibb.co/TRNN2sR/DISEC.png",
    fullForm: "Disarmament & International Security Committee",
    level: "Beginner",
    delegateNumber: "Single",
    agenda: "https://i.ibb.co/q7d5f26/DISEC.png",
    eb: 'https://i.ibb.co/Th4KLDk/disec-min.png',
    studyGuide:
        "https://drive.google.com/file/d/1_jdk0WnnpBUssKSdEZoiW6EJ5Oen9PYS/view?usp=drive_link",
    location: "Campus17, Auditorium",
    mapURL: "https://maps.app.goo.gl/sRVH3nCPtCwm6o9r5",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
  Committee(
    name: "UNHRC",
    image: "https://i.ibb.co/5jC3s3v/UNHRC-4x-min.png",
    logo: "https://i.ibb.co/wykQF3b/UNHRC.png",
    fullForm: "United Nations Human Rights Council",
    level: "Beginner",
    delegateNumber: "Double",
    agenda: "https://i.ibb.co/NtJLwGW/UNHRC.png",
    eb: "https://i.ibb.co/ccCPggb/unhrc-min.png",
    studyGuide:
        "https://drive.google.com/file/d/14kc2EOweJtR6P3-UwrUCa0vm4abKUZLE/view?usp=drive_link",
    location: "Conference hall 8, Campus 6",
    mapURL: "https://maps.app.goo.gl/bZGDQpPQyavBZU4Y7",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
  Committee(
    name: "ECOSOC",
    image: "https://i.ibb.co/xY0wv2N/ECOSOC-4x-min.png",
    logo: "https://i.ibb.co/SVZzFw8/ECOSOC.png",
    fullForm: "United Nations Economic and Social Council",
    level: "Beginner",
    delegateNumber: "Double",
    agenda: "https://i.ibb.co/nQM9t8S/ECOSOC.png",
    eb: "https://i.ibb.co/CtswMYg/eco-min.png",
    studyGuide:
        "https://drive.google.com/file/d/1kJTyRJ8uiNCitd4roMCKa7PxIeGhs0__/view?usp=drive_link",
    location: "Campus 3, E-Block Auditorium",
    mapURL: "https://maps.app.goo.gl/GnhVgWQ45RKMDxuC9",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
  Committee(
    name: "IP",
    image: "https://i.ibb.co/0FnDmWj/IP-4x-min.png",
    logo: "https://i.ibb.co/hfMyPfB/IP.png",
    fullForm: "International Press",
    level: "Beginner",
    delegateNumber: "Single",
    agenda: "IP",
    eb: "https://i.ibb.co/xMLhR8h/ip-min.png",
    studyGuide:
        "https://drive.google.com/file/d/1nzm25O2pFawE_3UwG3EJfHRq0TP0HH9Z/view?usp=drive_link",
    location: "Campus 6 Auditorium",
    mapURL: "https://maps.app.goo.gl/bZGDQpPQyavBZU4Y7",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
  Committee(
    name: "WHA",
    image: "https://i.ibb.co/PFFYY8q/WHA-4x-min.png",
    logo: "https://i.ibb.co/6Y8m9fs/WHA.png",
    fullForm: "World Health Assembly",
    level: "Beginner",
    delegateNumber: "Double",
    agenda: "https://i.ibb.co/s9LvG1s/WHA.png",
    eb: "https://i.ibb.co/VqKfzhq/wha-min.png",
    studyGuide:
        "https://drive.google.com/file/d/1j8ygaDuBdZoflYpYn6wcF05MxYFeJNxL/view?usp=drive_link",
    location: "Campus 7, Auditorium",
    mapURL: "https://maps.app.goo.gl/i3cLpxh2iD37yr4A6",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
  Committee(
    name: "UNCSW",
    image: "https://i.ibb.co/dbtpxwM/UNCSW-4x-min.png",
    logo: "https://i.ibb.co/tY7pXkJ/UNSCW.png",
    fullForm: "United Nations Commission on the Status of Women",
    level: "Intermediate",
    delegateNumber: "Single",
    agenda: "https://i.ibb.co/Vj7JTvr/UNCSW.png",
    eb: "https://i.ibb.co/Kz8z7yn/UNCSW-min.png",
    studyGuide:
        "https://drive.google.com/file/d/1wwv1I0Gkk7jNCddzokgbcNyM3u4d41eC/view?usp=drive_link",
    location: "Conference hall, Campus 8",
    mapURL: "https://maps.app.goo.gl/HHkT8H84HDFjVfsq5",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
  Committee(
    name: "COP-28 UNFCCC",
    image: "https://i.ibb.co/P5bDZJH/UNFCCC-4x-min.png",
    logo: "https://i.ibb.co/Sr2gDkG/UNFCCC.png",
    fullForm:
        "Conference of the Parties of United Nations Framework Convention on Climate Change",
    level: "Intermediate",
    delegateNumber: "Double",
    agenda: "https://i.ibb.co/9sQfBQC/UNFCCC.png",
    eb: "https://i.ibb.co/fx67gv7/unfccc-min.png",
    studyGuide:
        "https://drive.google.com/file/d/1ghtqSrT5Vr5lajZIzBjYo7uGhxAtKLEg/view?usp=drive_link",
    location: "Dental Auditorium",
    mapURL: "https://maps.app.goo.gl/zyt5svCZBUhn77Nh7",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
  Committee(
    name: "WB",
    image: "https://i.ibb.co/Mstgnp6/WB-4x-min.png",
    logo: "https://i.ibb.co/28sLB8P/WB.png",
    fullForm: "World Bank",
    level: "Intermediate",
    delegateNumber: "Double",
    agenda: "https://i.ibb.co/FXxStgC/WB.png",
    eb: "https://i.ibb.co/qjhs0kG/wb-min.png",
    studyGuide:
        "https://drive.google.com/file/d/16Mwsjm9MnGsVWXaCm3zsZv398vSqKiV4/view?usp=drive_link",
    location: "Campus 5 Auditorium ",
    mapURL: "https://maps.app.goo.gl/zEC2K3XUzvXyLPBi7",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
  Committee(
    name: "UNESCO",
    image: "https://i.ibb.co/S0HhDmv/UNESCO-4x-min.png",
    logo: "https://i.ibb.co/KXs9qpn/UNESCO.png",
    fullForm:
        "United Nations Educational, Scientific and Cultural Organization",
    level: "Intermediate",
    delegateNumber: "Single",
    agenda: "https://i.ibb.co/ZW0sC4M/UNESCO.png",
    eb: "https://i.ibb.co/Fg6pfNw/unesco-min.png",
    studyGuide:
        "https://drive.google.com/file/d/1EweDlGmm-E-_9RUtkJjn4tDmF8_zcYuo/view?usp=drive_link",
    location: "Campus 12, Auditorium",
    mapURL: "https://maps.app.goo.gl/jQW9VrrRagNeBXjB6",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
  Committee(
    name: "UNCND",
    image: "https://i.ibb.co/fSH7cJT/UNCND-4x-min.png",
    logo: "https://i.ibb.co/Z8tsDvz/UNCAD.png",
    fullForm: "United Nations Commission on Narcotic Drugs",
    level: "Intermediate",
    delegateNumber: "Single", //10
    agenda: "https://i.ibb.co/0Yh1rfW/UNCND.png",
    eb: "https://i.ibb.co/qr2ZxYQ/un-CND-min.png",
    studyGuide:
        "https://drive.google.com/file/d/1ItDZLg7Yu3nmtXahFqbyMoxoZZ33k3S-/view?usp=drive_link",
    location: "Seminar Hall, Campus 8",
    mapURL: "https://maps.app.goo.gl/HHkT8H84HDFjVfsq5",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
  Committee(
    name: "GA6 LEGAL",
    image: "https://i.ibb.co/mz28bYr/GA6-4x-min.png",
    logo: "https://i.ibb.co/BscfpsL/GA6-Legal.png",
    fullForm: "United Nations General Assembly Sixth Committee",
    level: "Intermediate", //11
    delegateNumber: "Single",
    agenda: "https://i.ibb.co/r22VtFf/GA6-legal.png",
    eb: "https://i.ibb.co/mNL0HyW/ga6-min.png",
    studyGuide:
        "https://drive.google.com/file/d/11HIWbvzBrN_yHoPsP8KulIAZ70-WiMM-/view?usp=drive_link",
    location: "Seminar Hall 1, Campus 6",
    mapURL: "https://maps.app.goo.gl/NpZohnhag3K8n4Tq6",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
  Committee(
    name: "UNOOSA",
    image: "https://i.ibb.co/Ld2Rw3y/UNOOSA-4x-min.png",
    logo: "https://i.ibb.co/NYVDJ3w/UNOOSA.png",
    fullForm: "United Nations Office for Outer Space Affairs",
    level: "Intermediate",
    delegateNumber: "Single", //12
    agenda: "https://i.ibb.co/c1yWyB0/UNOOSA.png",
    eb: "",
    studyGuide:
        "https://drive.google.com/file/d/1tMsHaTFYYu7d6ji170s7U7-Yksh7SuI3/view?usp=drive_link",
    location: "Conference Hall, Campus 3",
    mapURL: "https://maps.app.goo.gl/JgX7fS4tx8AwdJo77",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
  Committee(
    name: "UNSC",
    image: "https://i.ibb.co/XYk4WZg/UNSC-4x-min.png",
    logo: "https://i.ibb.co/z2478Jc/UNSC.png",
    fullForm: "United Nations Security Council",
    level: "Advanced",
    delegateNumber: "Single", //13
    agenda: "https://i.ibb.co/ynkTp1V/UNSC.png",
    eb: "https://i.ibb.co/SdFnfk7/SCnew-1-min.png",
    studyGuide: "https://kiitmun.org/study_docs/jcc_merged.pdf",
    location: "Conference Hall 5, Campus 6",
    mapURL: "https://maps.app.goo.gl/NpZohnhag3K8n4Tq6",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
  Committee(
    name: "NATO",
    image: "https://i.ibb.co/Vmf2pyS/NATO-4x-min.png",
    logo: "https://i.ibb.co/gTLtTnB/NATO.png",
    fullForm: "North Atlantic Treaty Organization",
    level: "Advanced",
    delegateNumber: "Single", //14
    agenda: "https://i.ibb.co/8KFzZXB/NATO.png",
    eb: "https://i.ibb.co/k0hC0cC/NATO-min.png",
    studyGuide:
        "https://drive.google.com/file/d/1czO_U4-3_zkhb7gwHffqDPOsuSfIfeBG/view?usp=drive_link",
    location: "Conference Hall 2, Campus 6",
    mapURL: "https://maps.app.goo.gl/NpZohnhag3K8n4Tq6",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
  Committee(
    name: "AD HOC",
    image: "https://i.ibb.co/FV8ZJP1/ADHOC-4x-min.png",
    logo: "https://i.ibb.co/txkscpW/ADHOC.png",
    fullForm: "Secretary General's Ad Hoc Committee",
    level: "Advanced",
    delegateNumber: "Single", //15
    agenda: "https://i.ibb.co/VJH0Y8N/AD-HOC.png",
    eb: "https://i.ibb.co/x7GL55H/adhoc-min.png",
    studyGuide:
        "https://drive.google.com/file/d/1YmEA_ikpnkk7wUFJbgCs5-2Z8UB7hB8l/view?usp=drive_link",
    location: "Conference  Hall 7, Campus 6",
    mapURL: "https://maps.app.goo.gl/NpZohnhag3K8n4Tq6",
    cordinator: "Ketan Chauhan",
    cordinatorNumber: "7992476309",
  ),
];

List<String> fridayEventName = [
  "Delegate Kit Distribution",
  "Conference Declaration",
  "Session 1",
  "Lunch",
  "Session 2",
  "High Tea",
  "Inauguration and Cultural Night"
];
List<String> fridayEventLocation = [
  "Campus 6 Auditorium",
  "Campus 6 Auditorium",
  "Respective Council Room",
  "KIIT and KISS Covention Center",
  "Respective Council Room",
  "Respective Council Room",
  "Campus 6 Auditorium",
];
List<String> fridayEventStartTime = [
  "07:00AM",
  "10:00AM",
  "10:30AM",
  "01:30PM",
  "03:00PM",
  "05:15PM",
  "06:00PM"
];
List<String> fridayEventEndTime = [
  "10:00AM",
  "10:30AM",
  "01:30PM",
  "02:30PM",
  "05:00PM",
  "05:45PM",
  "08:00PM",
];

List<String> saturdayEventName = [
  "Session 3",
  "Tea Break",
  "Session 4",
  "Lunch",
  "Session 5",
  "High Tea",
  "Star Night",
];
List<String> saturdayEventLocation = [
  "Respective Council Room",
  "Respective Council Room",
  "Respective Council Room",
  "KIIT and KISS Covention Center",
  "Respective Council Room",
  "Respective Council Room",
  "Campus 6 Auditorium",
];
List<String> saturdayEventStartTime = [
  "08:00AM",
  "11:00AM",
  "11:15AM",
  "02:00PM",
  "03:00PM",
  "05:30PM",
  "06:00PM",
];
List<String> saturdayEventEndTime = [
  "11:00AM",
  "11:15AM",
  "02:00AM",
  "03:00PM",
  "05:30PM",
  "05:45PM",
  "08:00PM",
];

List<String> sundayEventName = [
  "Session 6",
  "Short Break",
  "Session 7",
  "Lunch",
  "Session 8",
  "High Tea",
  "Closing & Valedictory Ceremony",
];
List<String> sundayEventLocation = [
  "Respective Council Room",
  "Respective Council Room",
  "Respective Council Room",
  "KIIT and KISS Covention Center",
  "Respective Council Room",
  "Respective Council Room",
  "Campus 6 Auditorium",
];
List<String> sundayEventStartTime = [
  "08:00AM",
  "11:00AM",
  "11.15AM",
  "02:00PM",
  "03:00PM",
  "05:30PM",
  "06:00PM",
];
List<String> sundayEventEndTime = [
  "11:00AM",
  "11:15AM",
  "02:00AM",
  "03:00PM",
  "05:30PM",
  "05:45PM",
  "08:00PM",
];

List<String> images = [
  '/assets/img/galleries/68486609_1171700466355347_2764202133791178752_o.jpg',
  '/assets/img/galleries/69169850_1173642672827793_6279335701074935808_o.jpg',
  '/assets/img/galleries/69388625_1171697006355693_1952834682173259776_o.jpg',
  '/assets/img/galleries/70316786_1171571026368291_3552353685151416320_o.jpg',
  '/assets/img/galleries/70398852_1171703746355019_2539602935080288256_o.jpg',
  '/assets/img/galleries/70450172_1172522102939850_1429070601611378688_o.jpg',
  '/assets/img/galleries/70459740_1171330109725716_4823369949831495680_o.jpg',
  '/assets/img/galleries/70476482_1171681123023948_7081319641288540160_o.jpg',
  '/assets/img/galleries/70477008_1171571706368223_9126131121120083968_o.jpg',
  '/assets/img/galleries/70508047_1171319003060160_3026056248194760704_o.jpg',
  '/assets/img/galleries/70598744_1171311306394263_4612954472593752064_o.jpg',
  '/assets/img/galleries/70640297_1171332219725505_4889040850190860288_o.jpg',
  '/assets/img/galleries/70663474_1172575182934542_7998864907871191040_o.jpg',
  '/assets/img/galleries/70701613_1171603379698389_2184779550565597184_o.jpg',
  '/assets/img/galleries/70720931_1171536346371759_352463016517697536_o.jpg',
  '/assets/img/galleries/70725500_1172539126271481_5540165807889186816_o.jpg',
  '/assets/img/galleries/70731207_1171576503034410_5513922539803377664_o.jpg',
  '/assets/img/galleries/70746126_1172529812939079_474252474962673664_o.jpg',
  '/assets/img/galleries/70762646_1171346293057431_642836237752729600_o.jpg',
  '/assets/img/galleries/70831703_1174199259438801_2083087554063630336_o.jpg',
  '/assets/img/galleries/70884794_1173600132832047_4645870582259253248_o.jpg',
  '/assets/img/galleries/70896615_1171559193036141_6783838150394380288_o.jpg',
  '/assets/img/galleries/70947614_1172577749600952_4591012283542405120_o.jpg',
  '/assets/img/galleries/70954830_1171534803038580_5392270546081677312_o.jpg',
  '/assets/img/galleries/71012628_1172589779599749_8606694589476110336_o.jpg',
  '/assets/img/galleries/71015843_1171532759705451_1326261539950297088_o.jpg',
  '/assets/img/galleries/71029007_1172526276272766_2183943436397182976_o.jpg',
  '/assets/img/galleries/71030080_1171334259725301_7994853756309078016_o.jpg',
  '/assets/img/galleries/71088605_1173817099477017_2834290133136572416_o.jpg',
  '/assets/img/galleries/71119181_1172591226266271_2447258664315125760_o.jpg',
  '/assets/img/galleries/71180504_1174165246108869_4234980037532581888_o.jpg',
  '/assets/img/galleries/71189426_1171700973021963_5791812726355394560_o.jpg',
  '/assets/img/galleries/71223095_1171700606355333_1998368512401211392_o.jpg',
  '/assets/img/galleries/71239770_1171311503060910_5500455279004745728_o.jpg',
  '/assets/img/galleries/71259051_1172789009579826_1273763592050573312_o.jpg',
  '/assets/img/galleries/71767894_1171702999688427_7950864001183776768_o.jpg',
];

String munLogo = 'assets/kiitmunlogo.png';

String eMunBlack = 'assets/kiitmunlogo.png';

String eMunWhite = 'assets/emun.jpeg';

String tagLine = '#EngageToEmpower';

List<About> abouts = [
  new About(
    name: 'KIIT',
    description:
        "One of India's top universities, Kalinga Institute of Industrial Technology (KIIT), is famous for the caliber of its teaching and research. It was established as an industrial training institute in Bhubaneswar in 1992–1993, in a leased home with 12 pupils and 2 teachers. In the age of unpopular schooling and much cautious embracing of globalization, Prof. Achyuta Samanta had a vision for a school that would emphasize academic excellence and offer uncountable chances for students to acquire comprehensive knowledge with very little financial support. The dedication, tenacity, and fortitude of our Founder and the contributions of the industrious staff and well-wishers has led KIIT Deemed to be University to announce itself as one of the Premier Education Hubs of India.\n\nWith just three programmes to begin with—Engineering, MBA, and MCA—KIIT's dedication to quality led to the Ministry of HRD, Government of India, awarding it Deemed to be University status under Section 3 of UGC Act, 1956, in 2004. This made KIIT the earliest Institute to achieve the distinction of obtaining University status in less than 6 years, which has been proudly inscribed in the Limca Book of Records. It has been ranked No. 1 among self-financing institutions of the country in the Atal Ranking of Institutions on Innovation Achievements (ARIIA), 2023 of the Ministry of Education, Government of India. It is India's 1st QS 5 Stars Rated University (QS World University Ranking) and is the only University of India to hold the Prestigious ISAS badge (International Associations of University) and the only University of India to win the The Awards Asia for Leadership and Management by Times Higher Education Rankings for its unstinting commitment to its staff and students. Recently, KIIT ranked 8th globally for Reducing Inequalities by the Times Higher Education Impact Rankings 2023 and also ranked 20th by NIRF, Govt. of India.\n30,000 students are educated at KIIT, who come from 65 different nations and all around India. Through its 23 schools, it offers more than 115 academic programmes, and more than 195 international organizations collaborate with it in the workplace. More than 100 multinational corporations and numerous national companies obtain their personnel from KIIT for placement. For its outstanding contribution in the field of sports and games, KIIT has been awarded as the best Sports University of India (Sportstar Aces Award). The University has a long history of holding numerous international and national seminars, congresses, workshops, and even important sporting events in practically every topic of interest. With its expansive 25 Square Kilometer Academic Township, 23 World Class Campuses, 2500+ illustrious Faculty and Researchers, 16 Sports Complexes, largest indoor and outdoor stadiums of any university, 15 Food Courts, and greenest campus in India, KIIT offers a holistic approach to human development that is unmatched in the nation.\n\nIn terms of social and economic empowerment, KIIT University's outreach programme is enormous. Sports have received virtually no support in terms of developing athletes and building sports facilities. The accomplishments of the students and their sense of community on campus and in their workplaces after graduation have motivated us to push even harder to achieve greater levels of excellence. Instead of resting on its past success and rapid expansion, KIIT looks forward to reaching greater heights in academics, research, and global rankings.",
    // 'Established as a modest institute in the idyllic city of Bhubaneswar in June 1992, Kalinga Institute of Industrial Technology is now a profound institute for learning with a vision, to build an imperishable society through education which revolves around boundless learning, research and development. With our motto, “Knowledge is that which liberates”, it is a multidisciplinary varsity with an avant-garde infrastructure, comprising of twenty-three lush green world class campuses with academic wings, amphitheaters, auditoriums, conference rooms and smart class rooms.\n\nHaving been granted the status of Deemed To Be University by the Ministry of HRD, Govt. of India in 2004, KIIT has been accorded the accreditation of the ‘A’ grade, by NAAC of UGC. KIIT offers more than 100 academic programs ranging from engineering to management, law to film studies. With 1800 faculties, 27000 students and 25 sq.km academic township, KIIT lets its students to explore new dimensions, enrich themselves and experience the best.\n\nInculcating global prospective, KIIT stands 8th among the reputed private universities in India, proclaimed as an ‘A’ category, by the Ministry of HRD, Govt. of India, accredited by IET, UK as well as the ‘Tier-1’ accreditation (Washington Accord) for all  engineering  streams by the NBA, and is also a younger member of Association of Commonwealth Universities.',
    imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/kiit-mun-15f26.appspot.com/o/about%2Fkiit.png?alt=media&token=21926ee7-578f-427a-bb64-63cf81bc6c85',
  ),
  new About(
    name: 'KISS',
    description:
        "The Kalinga Institute of Social Sciences (KISS) is a residential institution providing free education, accommodation, medical care, vocational, athletic & artistic training to 70,000 indigenous children. Of these, 30,000 students study at the main campus in Bhubaneswar, 20,000 are alumni and 10,000 study at 10 satellite centers of KISS across Odisha. It has indirectly impacted over a million tribal children and youth. The students come from 62 different tribal groups within the region, of which 13 are Particularly Vulnerable Tribal Groups (PVTGs).\n\nKISS was established in 1992 with the aim of using accessible, free education to empower children from marginalized communities. It has now grown to symbolize a revolution for tribal populations of India to eradicate poverty through education. Over the course of its more than 28-year history, KISS has peacefully intervened through education and empowerment to arrest dropouts, child marriage, gender-based harassment, left-wing extremism, proselytising, illiteracy, and superstition on a huge scale. It has raised awareness of the value of education, the empowerment of girls, upskilling and vocational empowerment, entrepreneurship, and cooperation with tribal groups as guardians of the environment and the natural world.\n\nSince 2015, UN-ECOSOC has granted KISS Special Consultative Status, making it the first unique tribal Deemed to Be University in the world. While making sure that the model prioritizes indigenous ownership of education, to maintain the history, legacy, and customs of India's different tribal tribes, and to fully realize the Sustainable Development Goals 2030, KISS proudly adheres to the 3E approach—Educate, Enable, Empower.",
    // 'Kalinga Institute of Social Sciences, the first tribal Deemed to Be University in India which started with 125 poor tribal children in 1993, in a rented house at Bhubaneswar. A sister concern of Kalinga Institute of Information Technology (KIIT), Kalinga Institute of Social Sciences (KISS) with more than 27,000 children and 62 indigenous tribes of Odisha, has been a home for over 37,000 students. KISS is a free of cost, fully residential educational institute, exclusively for penurious tribal children.\n\nThese children are provided with free holistic education, skill development, career opportunities, food, accommodation, health care, and other basic necessities. With our Founder, Dr. Achyuta Samanta’s vision, KISS works to eradicate poverty, illiteracy and unemployment through quality education. KISS has always nurtured a vision of a world which is free of hunger, poverty and illiteracy. UNESCO, UNICEF, UNFPA, as well as the US Federal Government have associated themselves with KISS for several initiatives and programs that have been undertaken by the institute.\n\nKISS aspires to work more and plans to open branches in all thirty districts of Odisha and also all the states of India. A branch of KISS, KISS-DELHI is successfully operating in NCR with the collaboration of Government Of Delhi.',
    imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/kiit-mun-15f26.appspot.com/o/about%2Fkiss.png?alt=media&token=753f241f-7684-404f-8c0d-c9214e61da28',
  ),
  new About(
    name: 'Founder',
    description:
        "Prof. Achyuta Samanta is an educationist, philanthropist, and social worker. He is the founder of Kalinga Institute of Industrial Technology (KIIT) and Kalinga Institute of Social Sciences (KISS), both educational institutions of global repute and recognition. KIIT is one of the most prominent universities in India and globe for professional education having more than 30,000 students from all over India and 65 other countries. KISS is a home for 60,000 indigenous children all absolutely free.\n\nBesides Education and tribal upliftment, healthcare and rural development, Prof. Samanta has contributed immensely to art, culture, literature, film, media, society and national integration. It is really incredible that the child who lost his father at the age of four, brought up amidst severe poverty and deprivation with seven siblings and a widow mother in a quaint village in Odisha has accomplished this monumental work without any favour or backing in such a short span of time for the society. He has converted the remote village ‘Kalarabanka’, Cuttack into a Smart Village and the entire Manpur Panchayat into a model Panchayat (cluster of villages).\n\nHe has been conferred with more than 50 International and National awards and over 200 state awards besides two highest Civilian Awards from Royal Kingdom of Bahrain and Mongolia. He has been conferred with 49 Honorary Doctorate awards from universities in India and abroad. He is the first Odia to be a member of both UGC and AICTE. He is currently the Member of Parliament (Lok Sabha) from Kandhamal, Odisha and also the President of Volleyball Federation of India. Besides, he is the founder of Parliamentarians for Indigenous People and Designated President ( India) of Democracy without Borders.\n\nAs a social reformer, he has been propagating “Art of Giving” (philosophy of life), a concept aimed at bringing peace and happiness around the globe, Kanyakiran to promote zero tolerance against gender based violence, Education for all for creating awareness on the importance of Education and many more like New Mind, New Dreams, India Against Negativity, Art of Appreciation to name a few. Despite all his achievements, he leads a simple lifestyle in a two room rented apartment as a bachelor, keeps on marching towards the cause of spreading smiles among millions and achieving zero poverty, zero hunger, zero illiteracy.",
    // 'Prof. Achyuta Samanta is an educationist, philanthropist, and social worker. He is the founder of Kalinga Institute of Industrial Technology (KIIT) and Kalinga Institute of Social Sciences (KISS), both educational institutions of global repute and recognition. KIIT is an Institution of Eminence and one of the most prominent universities in India and globe for professional education having more than 30,000 students from all over India and 53 other countries. KISS is a home for 60,000 indigenous children all absolutely free.\n\nBesides Education and tribal upliftment, healthcare and rural development, Shri. Samanta has contributed immensely to art, culture, literature, film, media, society and national integration. It is really incredible that the child who lost his father at the age of four, brought up amidst severe poverty and deprivation with seven siblings and a widow mother in a quaint village in Odisha has accomplished this monumental work without any favour or backing in such a short span of time for the society. He has converted the remote village ‘Kalarabanka’, Cuttack into a Smart Village and the entire Manpur Panchayat into a model Panchayat (cluster of villages).\n\nHe has been conferred with more than 50 International and National awards and over 200 state awards besides two highest Civilian Awards from Royal Kingdom of Bahrain and Mongolia. He has been conferred with 44 Honorary Doctorate awards from universities in India and abroad. He is the first Odia to be a member of both UGC and AICTE. He is currently the Member of Parliament (Lok Sabha) from Kandhamal, Odisha and also the President of Volleyball Federation of India.\n\nAs a social reformer, he has been propagating “Art of Giving” (philosophy of life), a concept aimed at bringing peace and happiness around the globe.\n\nDespite all his achievements, he leads a simple lifestyle, keeps on marching towards the cause of spreading smile among millions and achieving zero poverty, zero hunger, zero illiteracy.',
    imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/kiit-mun-15f26.appspot.com/o/about%2FAchyuta-Samanta-Photo-2.jpg?alt=media&token=83bb3ea8-2527-462a-9b2e-68ca6c985ae6',
  ),
  new About(
    name: 'Art of Giving',
    description:
        "Art of Giving is all about creating an unconditional and sustainable abundance of love, peace and happiness, and contentment for others through gestures of kindness and generosity. It was founded by Shri Achyuta Samanta on 17 May 2013. The key to peace and happiness lies in unlocking the Art of Giving in each individual. It is a not-for-profit initiative for spreading, supporting, and promoting the practice of the art of giving around the world.\n\nVISION: To bring together the sense of peace and happiness among people of all ages, especially children and youth through genuine acts of giving back to society by the practice of empathy and compassion to the distressed without any discrimination.\n\nMISSION: To make people aware and spread the philosophy of the Art of Giving across all sections of human society worldwide through activities of sharing love, care, compassion, wisdom, knowledge, skills, and talents.",
    // 'Art of Giving is all about creating an unconditional and sustainable abundance of love, peace and happiness and contentment for others through gestures of kindness and generosity. It was founded by Shri Achyuta Samanta on 17 May 2013. The key to peace and happiness lies in unlocking the Art of Giving in each individual. It is a not-for-profit initiative for spreading, supporting and promoting the practice of the art of giving around the world.\n\nVISION:To bring together the sense of peace and happiness among people of all ages, especially children and youth through genuine acts of giving back to the society by the practice of empathy and compassion to the distressed without any discrimination.\n\nMISSION:To make people aware and spread the philosophy of the Art of Giving across all sections of human society worldwide through activities of sharing love, care, compassion, wisdom, knowledge, skills and talents.',
    imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/kiit-mun-15f26.appspot.com/o/about%2FAOG-Logo.png?alt=media&token=88f2e793-48d2-4c57-a0f4-c6b384e0ad52',
  ),
  new About(
    name: 'Incredible India',
    description:
        "One of the oldest civilizations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity. Fringed by the Great Himalayas in the north, it stretches southwards and at the Tropic of Cancer, tapers off into the Indian Ocean between the Bay of Bengal on the east and the Arabian Sea on the west. As you travel the expanse of the country, you are greeted by diverse nuances of cuisines, faiths, arts, crafts, music, nature, lands, tribes, history, and adventure sports. India has a mesmeric conflation of the old and the new. As the bustling old bazaars rub shoulders with swanky shopping malls, and majestic monuments accompany luxurious heritage hotels, the quintessential traveler can get the best of both worlds. Head to the mountains, enjoy a beach retreat, or cruise through the golden Thar, India has options galore for all. India is home to the finest architectural heritage, serene ghats, spectacular landscapes, and the largest tiger reserve.",
    // 'One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity.\n\nFringed by the Great Himalayas in the north, it stretches southwards and at the Tropic of Cancer, tapers off into the Indian Ocean between the Bay of Bengal on the east and the Arabian Sea on the west. As you travel the expanse of the country, you are greeted by diverse nuances of cuisines, faiths, arts, crafts, music, nature, lands, tribes, history and adventure sports. India has a mesmeric conflation of the old and the new. As the bustling old bazaars rub shoulders with swanky shopping malls, and majestic monuments accompany luxurious heritage hotels, the quintessential traveller can get the best of both worlds. Head to the mountains, enjoy a beach retreat or cruise through the golden Thar, India has options galore for all.\n\nIndia is a home to the finest architectural heritage, serene ghats, spectacular landscapes and largest tiger reserve.',
    imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/kiit-mun-15f26.appspot.com/o/about%2Fii.png?alt=media&token=63a0af24-c17f-427e-acde-13d9489e017b',
  ),
  new About(
    name: 'Previous Editions',
    description:
        "One of India's top universities, Kalinga Institute of Industrial Technology (KIIT), is famous for the caliber of its teaching and research. It was established as an industrial training institute in Bhubaneswar in 1992–1993, in a leased home with 12 pupils and 2 teachers. In the age of unpopular schooling and much cautious embracing of globalization, Prof. Achyuta Samanta had a vision for a school that would emphasize academic excellence and offer uncountable chances for students to acquire comprehensive knowledge with very little financial support.\n\nWith just three programmes to begin with—Engineering, MBA, and MCA—KIIT's dedication to quality led to the Ministry of HRD, Government of India, awarding it Deemed to be University status under Section 3 of UGC Act, 1956, in 2004. This made KIIT the earliest Institute to achieve the distinction of obtaining University status in less than 6 years, which has been proudly inscribed in the Limca Book of Records. It has been ranked No. 1 among self-financing institutions of the country in the Atal Ranking of Institutions on Innovation Achievements (ARIIA), 2023 of the Ministry of Education, Government of India. It is India's 1st QS 5 Stars Rated University (QS World University Ranking) and is the only University of India to hold the Prestigious ISAS badge (International Associations of University) and the only University of India to win the The Awards Asia for Leadership and Management by Times Higher Education Rankings for its unstinting commitment to its staff and students. Recently, KIIT ranked 8th globally for Reducing Inequalities by the Times Higher Education Impact Rankings 2022 and also ranked 20th by NIRF, Govt. of India.on.\n\n30,000 students are educated at KIIT, who come from 65 different nations and all around India. Through its 23 schools, it offers more than 115 academic programmes, and more than 195 international organizations collaborate with it in the workplace. More than 100 multinational corporations and numerous national companies obtain their personnel from KIIT for placement. For its outstanding contribution in the field of sports and games, KIIT has been awarded as the best Sports University of India (Sportstar Aces Award). The University has a long history of holding numerous international and national seminars, congresses, workshops, and even important sporting events in practically every topic of interest. With its expansive 25 Square Kilometer Academic Township, 23 World Class Campuses, 2500+ illustrious Faculty and Researchers, 16 Sports Complexes, largest indoor and outdoor stadiums of any university, 15 Food Courts, and greenest campus in India, KIIT offers a holistic approach to human development that is unmatched in the nation. Instead of resting on its past success and rapid expansion, KIIT looks forward to reaching greater heights in academics, research, and global rankings.",
    // 'KIIT International MUN has been hosting a chain of successful editions since its inception in 2013. Having established the stronghold in its debut edition, KIIT MUN has been able to uphold the calibre of its diplomats and its commitment to making an impact, and ever since, the event has been setting a benchmark a little higher with every edition. The anticipation keeps escalating with each year and we have come a long way- starting with a meagre number of participants in 2013 to 2,500 in 2016, we kept things consistent and the growth static up till 2019 with the same enthusiasm. The enormous world is divided by its selfish interests and we strive to make it smaller, uniting it in the process through participation from not just the renowned institutions and organisations in our nation, but from countries and nations from every nook and corner of the world.\n\nIn its previous editions, KIIT International MUN, the largest MUN of its kind in South Asia, has been graced by the presence of eminent personalities who are renowned in all walks of life. KIIT International MUN has been a stage for various comedians like Bishwa Kalyan Rath, Kenny Sebastian, Rahul Subramanian, Abish Mathew, and Gaurav Kapur, the platform shared by the likes of Mr Kamal Singh, the Executive Director of UN Global Compact Network India, Allen Gammel OBE, Director of the British Council India, Debanjan Chakrabarti – Director British Council, East India, and by a plethora of foreign diplomats and emissaries like Mr Hector Cueva Jacome, Ambassador of Ecuador in India; Mr Fleming Raul Duarte Ramos, Ambassador of Paraguay to India; Mr Claudio Ansorena Montero, Ambassador of Costa Rica to India and Mrs Barbara Wickham, Director of British Council in India, political personalities like Akhilesh Yadav, and other distinguished speakers and diplomats. Since the very first edition, the significance and popularity of the conference have grown exponentially; hosting esteemed personalities to conduct resourceful workshops, deliberating about global concerns for an entire day with representatives of other nations and celebrating together through music and dance, amidst smiles. Even amidst the global pandemic, KIIT International MUN adapted to the virtual mode of organising the conference in 2021, successfully bringing together around 450 delegates from every nook and corner of the nation. Not letting the circumstances and the non-feasibility of organising the conference physically deter, KIIT International eMUN was made a success. From diplomats and dignitaries who graced the occasion virtually to a stand-up comedy show featuring Mr Gaurav Kapur, the spirit of MUN was upheld triumphantly.\n\nKIIT International Model United Nations has successfully catered to diplomacy and merriment of participants and has played a pivotal role in bringing about a revolution in the MUN circuit that the dilemmas that were dissected into by young delegates, seemed a bit more surmountable. With a beautiful legacy, KIIT International MUN looks forward to be organised with more devout enthusiasm and participation than ever before, taking into account each success, and looking out to ameliorate and uphold the very spirit of a united world.',
    imageUrl: '',
  ),
];

const galleryList = [
  'https://i.ibb.co/f2BLtkp/IMG-5964-min.jpg',
  'https://i.ibb.co/Zx7NrPR/IMG-7933-min.jpg',
  'https://i.ibb.co/jJkp5qF/IMG-8067-min.jpg',
  'https://i.ibb.co/qrJqvBz/IMG-8360-min.jpg',
  'https://i.ibb.co/Mnrtm9n/IMG-9021-min.jpg',
  'https://i.ibb.co/qDkxL4X/VAM-0080-min.jpg',
  'https://i.ibb.co/JK1w2Nn/4-min.jpg',
  'https://i.ibb.co/FJXtPBb/26-min.jpg',
  'https://i.ibb.co/bRzH4wc/ANA-9348-min.jpg',
  'https://i.ibb.co/QjLGhD6/DSC-0129-min.jpg',
  'https://i.ibb.co/HBdRjxK/DSC-00181-min.jpg',
  'https://i.ibb.co/HDrr3gJ/DSC-0197-min.jpg',
  'https://i.ibb.co/WyHP00G/DSC-5465-min.jpg',
  'https://i.ibb.co/KqknnHg/DSC-5559-min.jpg',
  'https://i.ibb.co/3FqXFfB/DSC-5818-min.jpg',
  'https://i.ibb.co/93Lpsmq/DSC-6003-min.jpg',
  'https://i.ibb.co/Jvd5Qsy/DSC-6025-min.jpg',
  'https://i.ibb.co/hHS9gRr/DSC01024-min.jpg',
  'https://i.ibb.co/9ZhPJBk/IMG-3566-min.jpg',
  'https://i.ibb.co/qyM4qjz/IMG-5203-min.jpg',
  'https://i.ibb.co/8zVx1sb/IMG-5267-min.jpg',
];

List<String> collaborateInternationalMUN = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
];

List<String> collaborateNationalMUN = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5XDvOlTefUsHP_eAx337emJkcgUWUfDY4Q&usqp=CAU",
];
