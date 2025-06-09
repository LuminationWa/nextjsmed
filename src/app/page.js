import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Info from "../components/Info";
import HeaderBar from "../components/HeaderBar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Nav lang="en" />
      <main className="home-main">
        <Hero />
        <HeaderBar />
        <Info />
        <FAQ />
      </main>
      <Footer lang="en" />
    </>
  );
};

export default Home;
