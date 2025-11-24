"use client";

import { useState } from "react";
import Original1 from "./componentes/original1";
import Original2 from "./componentes/original2";
import Original3 from "./componentes/original3";

export default function Home() {
  const [tab, setTab] = useState<"mood" | "time" | "silencio">("mood");

  const renderTab = () => {
    switch (tab) {
      case "mood":
        return <Original1 />;
      case "time":
        return <Original2 />;
      case "silencio":
        return <Original3 />;
    }
  };

  return (
    <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-4xl mx-auto mt-10 fade">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 drop-shadow">
        Mi App con 3 Pestañas
      </h1>

      {/* NAV TABS */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setTab("mood")}
          className={`px-5 py-2 rounded-lg font-semibold transition-all shadow-sm
            ${
              tab === "mood"
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
        >
          MoodCook
        </button>

        <button
          onClick={() => setTab("time")}
          className={`px-5 py-2 rounded-lg font-semibold transition-all shadow-sm
            ${
              tab === "time"
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
        >
          TimeSwap
        </button>

        <button
          onClick={() => setTab("silencio")}
          className={`px-5 py-2 rounded-lg font-semibold transition-all shadow-sm
            ${
              tab === "silencio"
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
        >
          Silencio Urbano
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-6 border rounded-2xl bg-gray-50 shadow-inner fade">
        {renderTab()}
      </div>
    </div>
  );
}
