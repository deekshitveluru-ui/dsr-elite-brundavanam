"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Map, Navigation, Compass } from "lucide-react";

const PdfDocument = dynamic(() => import("./PdfDocument"), { ssr: false });

export default function MasterPlanMap() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(7); // Default to core layout

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
    <section className="py-24 md:py-32 bg-dsr-base relative z-0 overflow-hidden" id="master-plan">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-dsr-dark mb-4">Official Project Maps</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Explore the officially curated brochure maps for precise charting, zoning, and orientation across DSR Elite Brundavanam.
          </p>
        </div>

        <div className="relative flex flex-col items-center bg-white luxury-shadow border border-gray-200 rounded-sm overflow-hidden p-4">

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
          </div>

          {/* PDF Renderer */}
          <div className="overflow-auto flex justify-center w-full h-[600px] border border-gray-100">
            <PdfDocument
              file="/dsr-brochure.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              pageNumber={pageNumber}
              isFullscreen={false}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
