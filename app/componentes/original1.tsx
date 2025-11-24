"use client";
import { useState } from "react";

export default function MoodCook() {
  const [estado, setEstado] = useState("");
  const [resultado, setResultado] = useState("");

  const sugerencias: any = {
    feliz: "🍰 Prueba algo dulce como un cheesecake.",
    triste: "🍲 Una sopa caliente podría reconfortarte.",
    cansado: "☕ Un café con pan sería perfecto.",
  };

  const buscar = () => {
    const clave = estado.toLowerCase();
    setResultado(sugerencias[clave] || "🤔 No tengo una sugerencia para ese estado.");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">MoodCook</h2>

      <p className="text-gray-600">
        Escribe tu estado de ánimo y recibirás una sugerencia personalizada.
      </p>

      <div className="flex space-x-2">
        <input
          type="text"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          placeholder="Feliz, triste, cansado..."
          className="flex-1 px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        <button
          onClick={buscar}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Buscar
        </button>
      </div>

      {resultado && (
        <p className="mt-4 text-lg font-medium text-gray-800 bg-blue-50 p-4 rounded-lg border border-blue-200">
          {resultado}
        </p>
      )}
    </div>
  );
}
