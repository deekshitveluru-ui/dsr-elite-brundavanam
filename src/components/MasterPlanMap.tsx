"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Maximize, Map, Navigation, Compass } from "lucide-react";

const PdfDocument = dynamic(() => import("./PdfDocument"), { ssr: false });

export default function MasterPlanMap() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(7); // Default to core layout
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFullscreen]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  // Pre-configured official map pages per client brochure specification
  const mapViews = [
    { label: "Location & Commute", page: 16, icon: Navigation },
    { label: "Master Layout", page: 7, icon: Map },
    { label: "The Neighbourhood", page: 15, icon: Compass },
  ];

  return (
    <section className="py-24 bg-dsr-base relative z-0 overflow-hidden" id="master-plan">
      <div className={`${isFullscreen ? 'fixed inset-0 z-[9999] bg-dsr-dark flex flex-col pt-20' : 'max-w-7xl mx-auto px-4 relative z-10'}`}>

        {!isFullscreen && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-dsr-dark mb-4">Official Project Maps</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
              Explore the officially curated brochure maps for precise charting, zoning, and orientation across DSR Elite Brundavanam.
            </p>
          </div>
        )}

        <div className={`relative flex flex-col items-center bg-white luxury-shadow border border-gray-200 rounded-sm overflow-hidden ${isFullscreen ? 'flex-1 p-8' : 'p-4'}`}>

          {/* Controls Header */}
          <div className="w-full flex justify-between items-center bg-dsr-stone px-6 py-4 border-b border-gray-200 rounded-t-sm mb-4">

            <div className="flex flex-wrap gap-3 items-center">
              {mapViews.map((view) => {
                const Icon = view.icon;
                const isActive = pageNumber === view.page;
                return (
                  <button
                    key={view.page}
                    onClick={() => setPageNumber(view.page)}
                    className={`flex items-center gap-2 px-4 py-2 border rounded-sm transition text-sm font-medium ${isActive
                      ? "bg-dsr-dark text-dsr-base border-dsr-dark"
                      : "border-gray-300 text-dsr-charcoal hover:bg-white hover:border-dsr-gold"
                      }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-dsr-gold' : 'text-dsr-emerald'}`} />
                    {view.label}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="flex items-center gap-2 text-dsr-emerald hover:text-dsr-dark transition-colors font-medium text-sm border-b border-transparent hover:border-dsr-dark ml-4 shrink-0"
            >
              <Maximize className="w-4 h-4" />
              {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            </button>
          </div>

          {/* PDF Renderer */}
          <div className={`overflow-auto flex justify-center w-full ${isFullscreen ? 'h-full items-center' : 'h-[600px] border border-gray-100'}`}>
            <PdfDocument
              file="/dsr-brochure.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              pageNumber={pageNumber}
              isFullscreen={isFullscreen}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
