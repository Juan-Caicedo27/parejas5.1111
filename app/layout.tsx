import "./globals.css";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto py-10 px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Mi App con 3 Pestañas
          </h1>

          {/* Contenedor principal con tarjeta */}
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
