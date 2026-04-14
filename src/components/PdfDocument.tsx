"use client";

import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

type PdfDocumentProps = {
  file: string;
  pageNumber: number;
  isFullscreen: boolean;
  onLoadSuccess: (info: { numPages: number }) => void;
};

export default function PdfDocument({ file, pageNumber, isFullscreen, onLoadSuccess }: PdfDocumentProps) {
  return (
    <Document
      file={file}
      onLoadSuccess={onLoadSuccess}
      loading={
        <div className="flex h-full items-center justify-center text-dsr-gold animate-pulse font-serif text-xl">
          Loading highly detailed blueprint...
        </div>
      }
      error={
        <div className="text-red-500 font-medium p-10 text-center">
          Failed to load the Official Brochure. Make sure "dsr-brochure.pdf" is securely placed in the public folder.
        </div>
      }
    >
      <Page 
        pageNumber={pageNumber} 
        renderTextLayer={false} 
        renderAnnotationLayer={false}
        scale={isFullscreen ? 1.5 : 1.2}
        className="max-w-full luxury-shadow"
      />
    </Document>
  );
}
