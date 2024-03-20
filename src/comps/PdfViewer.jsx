import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfViewer = (pdfUrl) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
  }

  return (
    <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={1} />
    </Document>
  );
};

export { PdfViewer };
