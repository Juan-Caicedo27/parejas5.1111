"use client";
import { useState } from "react";

type Spot = {
  place: string;
  noise: number;
};

export default function Original3() {
  const [place, setPlace] = useState("");
  const [noise, setNoise] = useState<number>(30);
  const [spots, setSpots] = useState<Spot[]>([]);

  const addSpot = () => {
    if (!place) return;
    setSpots([...spots, { place, noise }]);
    setPlace("");
    setNoise(30);
  };

  return (
    <div className="fade">
      <h2 className="text-2xl font-bold mb-4">Silencio Urbano</h2>
      <p className="mb-4 text-gray-700">
        Comparte lugares silenciosos de tu ciudad.
      </p>

      <div className="mb-4 flex items-center gap-4">
        <input
          type="text"
          placeholder="Nombre del lugar"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="border p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center gap-2">
          <input
            type="range"
            min={0}
            max={100}
            value={noise}
            onChange={(e) => setNoise(Number(e.target.value))}
          />
          <span>{noise} dB</span>
        </div>

        <button
          onClick={addSpot}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 fade"
        >
          Añadir
        </button>
      </div>

      <ul className="space-y-2">
        {spots.map((s, i) => (
          <li
            key={i}
            className="bg-white p-3 rounded-lg shadow flex justify-between"
          >
            <span>📍 <strong>{s.place}</strong></span>
            <span className="text-gray-600">{s.noise} dB</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
