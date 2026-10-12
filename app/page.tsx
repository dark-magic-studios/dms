import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import HomeLeading from "@/components/HomeLeading";
import HomeTeasers from "@/components/HomeTeasers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <HomeLeading />
        <HomeTeasers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
