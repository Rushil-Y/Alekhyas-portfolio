import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.state]);

  return (
    <>
      <Hero />
    </>
  );
}

export default HomePage;
