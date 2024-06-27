import React, { useEffect, useState } from "react";
import {
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
import TakeABreak from "./components/Fun";

const menu = [
  "Home",
  "About",
  "Work History",
  "Technologies",
  "Contact",
  "Fun",
];

function App() {
  const [section, setSection] = useState("Home");
  const [animate, setAnimate] = useState(false);

  const handleSectionChange = (section: string) => {
    setAnimate(true);
    setSection(section);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);

  return (
    <StyledMain>
      <StyledContainer>
        <StyledHeading>Kamil Czyżewski</StyledHeading>
        <StyledDescription>
          Front-End Developer - Web & Mobile
        </StyledDescription>

        <StyledMenuList>
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

        {section === "Home" && animate && <Home />}
        {section === "About" && animate && <About />}
        {section === "Work History" && animate && <Experience />}
        {section === "Technologies" && animate && <Skillset />}
        {section === "Contact" && animate && <Contact />}
        {section === "Fun" && animate && <TakeABreak />}

        <Footer />
      </StyledContainer>
    </StyledMain>
  );
}

export default App;
