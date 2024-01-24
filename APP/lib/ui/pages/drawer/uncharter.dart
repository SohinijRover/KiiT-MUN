import 'dart:io';

import 'package:flutter/material.dart';
import 'package:open_file/open_file.dart';
import 'package:path_provider/path_provider.dart';
import 'package:syncfusion_flutter_pdfviewer/pdfviewer.dart';

import '../../../utils/constants.dart';
import '../../../utils/themes.dart';

class UNCharter extends StatefulWidget {
  const UNCharter({Key? key}) : super(key: key);

  @override
  State<UNCharter> createState() => _UNCharterState();
}

//  PdfViewerController pdfViewerController;
List<int>? documentBytes;

class _UNCharterState extends State<UNCharter> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
            onPressed: () => Navigator.of(context).pop(),
            icon: Icon(
              Icons.arrow_back_ios_rounded,
              color: accentColor,
            )),
        actions: [
          IconButton(
              onPressed: () async {
                if (documentBytes != null) {
                  final Directory? directory =
                      await getExternalStorageDirectory();

                  final File file = File(directory!.path + '/downloaded.pdf');
                  await file.writeAsBytes(documentBytes!, flush: true);

                  OpenFile.open(directory.path + '/downloaded.pdf');
                }
              },
              icon: const Icon(Icons.download))
        ],
      ),
      body: SfPdfViewer.network(
        uncharterPDF,

        canShowScrollHead: true,
        canShowScrollStatus: true,
        enableTextSelection: false,
        // controller: pdfViewerController,
        interactionMode: PdfInteractionMode.pan,
        onDocumentLoaded: (detials) async {
          documentBytes = await detials.document.save();
        },

        pageLayoutMode: PdfPageLayoutMode.continuous,
        scrollDirection: PdfScrollDirection.vertical,
      ),
    );
  }
}
