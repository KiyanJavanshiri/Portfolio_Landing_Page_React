// https://www.figma.com/design/kIdnykZ0nAyR8X85mU04xA/Wedding-Website---Landing-Page--Community-?node-id=0-1&t=E6WkfEd5S128SZHS-1
import React from "react";
import Header from "./compositions/Header.tsx";
import Preview from "./sections/Preview.tsx";
import Locations from "./sections/Locations.tsx";
import Featured from "./sections/Featured/Featured.tsx";
import Services from "./sections/Services.tsx";
import Portfolio from "./sections/Portfolio.tsx";
import Testimonials from "./sections/Testimonials.tsx";
import ContactUs from "./sections/ContactUs.tsx";
import Footer from "./compositions/Footer.tsx";
import "./styles.css";

function App() {
  return (
    <>
      <div className="relative">
        <Header />
        <main>
          <Preview />
          <Locations />
          <Featured />
          <Services />
          <Portfolio />
          <Testimonials />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
