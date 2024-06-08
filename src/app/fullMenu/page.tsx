"use client";
import React, { useState } from "react";

const FullMenu = () => {
  const [pdfSrc, setPdfSrc] = useState("/fullmenu/fullmenu.pdf");

  const showPDF = (pdf: React.SetStateAction<string>) => {
    setPdfSrc(pdf);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-custom-beige p-4">
      <div className="mt-10 px-2 flex space-x-4 mx-auto">
        <button
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={() => showPDF("/fullmenu/fullmenu.pdf")}
        >
          Chinese Menu
        </button>
        <button
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={() => showPDF("/fullmenu/fullmenu.pdf")}
        >
          French Menu
        </button>
        <button
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={() => showPDF("/fullmenu/fullmenu.pdf")}
        >
          English Menu
        </button>
      </div>
      <div className="mt-10 w-full flex-grow border-2 border-red-600 shadow-md">
        {pdfSrc && (
          <iframe
            src={pdfSrc}
            className="w-full h-full border-none"
            style={{ height: "calc(100vh - 150px)" }}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default FullMenu;
