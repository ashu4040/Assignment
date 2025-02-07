import React from "react";
import Hero from "./Component/Hero";
import Services from "./Component/Services";
import WhyChooseUs from "./Component/WhyChooseUs";
import HowItWorks from "./Component/HowItWorks";

const App = () => {
  return (
    <div>
      <Hero />
      <Services />
      <HowItWorks />

      <WhyChooseUs />
    </div>
  );
};

export default App;
