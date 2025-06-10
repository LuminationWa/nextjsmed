import { Inter } from "next/font/google";
import "../styles/styles.css";

export const metadata = {
  title: "Medina Marcas - Agentes propiedad industrial",
  description:
    "Registro de Marcas y Patentes, Defensas y Vigilancias. De Uruguay a todo el mundo.",
  logo: "/pictures/logo.png"
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
