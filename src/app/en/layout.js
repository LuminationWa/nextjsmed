import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Nav lang="en" />
      {children}
      <Footer lang="en" />
    </>
  );
}
