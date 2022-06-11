import Main from "./components/Main";
import Intro from "./components/Intro";
import Information from "./components/Information";
import Project from "./components/Project";

import { flexCenter } from "./styles/theme";
import styled from "styled-components";

const AppContainer = styled.div`
  .wrapper {
    ${flexCenter};
    flex-direction: column;
  }
`;

function App() {
  return (
    <AppContainer>
      <div className="App">
        <div className="wrapper">
          <Main />
          <Intro />
          <Information />
          <Project />
        </div>
      </div>
    </AppContainer>
  );
}

export default App;