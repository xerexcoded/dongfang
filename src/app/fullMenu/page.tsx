"use client";
import React, { useState } from "react";

const FullMenu = () => {
  const [pdfSrc, setPdfSrc] = useState("/FullMenu/FullMenu.pdf");

  const showPDF = (pdf: React.SetStateAction<string>) => {
    setPdfSrc(pdf);
  };
  return (
    <div className="flex flex-col items-center  min-h-screen bg-custom-beige">
      <div className="mt-10 px-2 flex space-x-4 mx-auto">
        <button
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={() => showPDF("/FullMenu/FullMenu.pdf")}
        >
          Chinese Menu
        </button>
        <button
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={() => showPDF("/FullMenu/FullMenu.pdf")}
        >
          French Menu
        </button>
        <button
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={() => showPDF("/FullMenu/FullMenu.pdf")}
        >
          English Menu
        </button>
      </div>
      <div className="mt-10 w-4/5 md:h-[70vh] h-[50vh] border-2 border-red-600 shadow-md">
        {pdfSrc && (
          <iframe
            src={pdfSrc}
            width="100%"
            height="100%"
            className="border-none"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default FullMenu;
