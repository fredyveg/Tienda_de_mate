// Next
import type {Metadata} from "next";

// Fuentes
import {Oswald} from "next/font/google";

// CSS Global
import "./globals.css";

// Componentes
import CustomNavbar from "./components/Navbar";
import CustomFooter from "./components/Footer";

// La fuente que se utiliza en la pagina original de tienda de cafe
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Tienda de Mate",
  description:
    "Remake de la Tienda de Cafe, realizado para la materia FrontEnd en el IFTS 16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${oswald.variable}`}>
      <body className="antialiased">
        <CustomNavbar />
        {children}
        <CustomFooter />
      </body>
    </html>
  );
}
