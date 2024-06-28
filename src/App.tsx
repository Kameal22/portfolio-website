import React, { useEffect, useState } from "react";
import {
  Navigation,
  StyledContainer,
  StyledDescription,
  StyledHeading,
  StyledMain,
  StyledMenuItem,
  StyledMenuList,
} from "./styles/Main.styled";
import About from "./components/About";
import Home from "./components/Home";
import Experience from "./components/WorkHistory";
import Skillset from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const menu = ["Home", "About", "Work History", "Technologies", "Contact"];

function App() {
  const [section, setSection] = useState("Home");
  const [animate, setAnimate] = useState(false);

  const formatSectionForUrl = (section: string) => {
    return section.replace(/ /g, "-");
  };

  const formatSectionFromUrl = (urlSection: string) => {
    return urlSection.replace(/-/g, " ");
  };

  const handleSectionChange = (section: string) => {
    setAnimate(true);
    setSection(section);
    window.history.pushState(null, "", `#${formatSectionForUrl(section)}`);
  };

  useEffect(() => {
    const currentSection = window.location.hash.replace("#", "");
    const formattedSection = formatSectionFromUrl(currentSection);
    if (menu.includes(formattedSection)) {
      setSection(formattedSection);
    }
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);

  return (
    <StyledMain>
      <StyledContainer>
        <Navigation>
          <div>
            <StyledHeading>Kamil Czyżewski</StyledHeading>
            <StyledDescription>
              Front-End Developer - Web & Mobile
            </StyledDescription>
          </div>

          <StyledMenuList isFlex>
            {menu.map((item) => (
              <StyledMenuItem
                isFun={item === "Fun"}
                key={item}
                style={item === section ? { fontWeight: 500 } : {}}
                onClick={() => handleSectionChange(item)}
              >
                {item}
              </StyledMenuItem>
            ))}
          </StyledMenuList>
        </Navigation>

        {section === "Home" && animate && <Home />}
        {section === "About" && animate && <About />}
        {section === "Work History" && animate && <Experience />}
        {section === "Technologies" && animate && <Skillset />}
        {section === "Contact" && animate && <Contact />}

        <Footer />
      </StyledContainer>
    </StyledMain>
  );
}

export default App;
