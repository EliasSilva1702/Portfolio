import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import UpdateSoon from "@/components/UpdateSoon/UpdateSoon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pb-40">
      <UpdateSoon />
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
