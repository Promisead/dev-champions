"use client";

import React, { useState } from "react";
//import "../global.css";

const Forms: React.FC = () => {
  // State to keep track of the selected form
  const [selectedForm, setSelectedForm] = useState("payment");

  // Mapping of form IDs to their respective URLs
  const formUrls: { [key: string]: string } = {
    payment: "https://forms.gle/C2Q6HeL77tKGCpRX6",
  
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 mb-60 overflow-hidden">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-white shadow-md rounded-lg mb-6 custom-tabs">
        {Object.keys(formUrls).map((formKey) => (
          <button
            key={formKey}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 custom-tab 
              ${selectedForm === formKey ? "bg-blue-600 text-black shadow-lg border border-blue-700" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            onClick={() => setSelectedForm(formKey)}
          >
            {formKey}
          </button>
        ))}
      </div>

      {/* Iframe displaying the selected form */}
      <div className="w-full max-w-4xl h-[80vh] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <iframe
          src={formUrls[selectedForm]}
          className="w-full h-full "
          frameBorder="0"
          title="Dynamic Form Viewer"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Forms;
