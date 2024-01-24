import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:mun/utils/constants.dart';
import 'package:mun/utils/themes.dart';
// import 'CachedNe';

class HumanRights extends StatelessWidget {
  const HumanRights({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return InteractiveViewer(
      panEnabled: true,
      maxScale: 4,
      minScale: 0.5,
      child: Container(
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.width,
          child: CachedNetworkImage(
            imageUrl: humanRightsImage,
            progressIndicatorBuilder: (context, url, progress) {
              return SizedBox(
                height: 100,
                width: 100,
                child: Center(
                    child: CircularProgressIndicator(
                  color: accentColor,
                )),
              );
            },
          )),
    );
  }
}
