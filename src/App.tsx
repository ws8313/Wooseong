import { useEffect, useState } from "react";
import Main from "./components/Main";
import Intro from "./components/Intro";
import Information from "./components/Information";
import Project from "./components/Project";
import Slider from "./components/Slider";

import { flexCenter } from "./styles/theme";
import styled from "styled-components";

const AppContainer = styled.div`
  .wrapper {
    ${flexCenter};
    flex-direction: column;
  }
`;

function App() {
  const [slider, setSlider] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlider(false);
    }, 2500);
  }, []);

  return (
    <AppContainer>
      <div className="App">
        <div className="wrapper">
          {slider ? (
            <Slider />
          ) : (
            <>
              <Main />
              <Intro />
              <Information />
              <Project />
            </>
          )}
        </div>
      </div>
    </AppContainer>
  );
}

export default App;