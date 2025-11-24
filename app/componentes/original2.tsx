"use client";
import { useState } from "react";

type Offer = {
  skill: string;
  minutes: number;
};

export default function Original2() {
  const [skill, setSkill] = useState("");
  const [minutes, setMinutes] = useState<number>(0);
  const [offers, setOffers] = useState<Offer[]>([]);

  const addOffer = () => {
    if (!skill || minutes <= 0) return;

    setOffers([...offers, { skill, minutes }]);
    setSkill("");
    setMinutes(0);
  };

  return (
    <div className="fade">
      <h2 className="text-2xl font-bold mb-4">TimeSwap</h2>
      <p className="mb-4 text-gray-700">
        Intercambia habilidades usando tiempo como moneda.
      </p>

      <div className="flex gap-3 mb-4 items-center">
        <input
          type="text"
          placeholder="Ej: guitarra..."
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          className="border p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Minutos"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="border p-2 rounded-lg shadow-sm w-24 focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={addOffer}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 fade"
        >
          Añadir
        </button>
      </div>

      <ul className="space-y-2">
        {offers.map((o, i) => (
          <li
            key={i}
            className="bg-white p-3 rounded-lg shadow flex justify-between"
          >
            <span>🧩 <strong>{o.skill}</strong></span>
            <span className="text-gray-600">{o.minutes} min</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
