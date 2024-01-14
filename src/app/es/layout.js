import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Nav lang="es" />
      {children}
      <Footer lang="es" />
    </>
  );
}
