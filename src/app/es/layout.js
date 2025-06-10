import Nav from "../../components/OldNav";
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
