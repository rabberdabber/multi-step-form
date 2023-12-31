import React, { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import { useMediaQuery } from "@mantine/hooks";
import Card, { CardContent } from "./components/Card";
import SideBarSteps, { SideBar } from "./components/SideBar";
import ButtonProvider from "./contexts/button/provider";
import buttonContext from "./contexts/button/context";

const GlobalStyles = createGlobalStyle`
  #root {
    --primary-marine-blue: hsl(213, 96%, 18%);
    --primary-purplish-blue: hsl(243, 100%, 62%);
    --primary-pastel-blue: hsl(228, 100%, 84%);
    --primary-light-blue: hsl(206, 94%, 87%);
    --primary-strawberry-red: hsl(354, 84%, 57%);
    --neutral-cool-gray: hsl(231, 11%, 63%);
    --neutral-light-gray: hsl(229, 24%, 87%);
    --neutral-magnolia: hsl(217, 100%, 97%);
    --neutral-alabaster: hsl(231, 100%, 99%);
    --red-errors: hsl(354, 84%, 57%);
    --neutral-white: hsl(0, 0%, 100%);
    --app-disabled-button-color: hsl(213, 72%, 31%);
    --app-font-size: 16px;
    --app-font-family: 'Ubuntu';
    --app-font-small: 400;
    --app-font-medium: 500;
    --app-font-large: 700;
    --card-content-width: 450px;
    --card-margin-top: 56px;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  p {
    font-family: var(--app-font-family);
    font-weight: var(--app-font-medium);
  }
  .App {
    /* height: calc(100%-72px); */
    background-color:  var(--neutral-magnolia);
    @media (max-width: 500px) {
      --card-content-width: 295px;
    }
  }

`;

function App() {
  const isMobile = useMediaQuery("(max-width: 500px)");
  const { page } = useContext(buttonContext);

  return (
    <ButtonProvider>
      <GlobalStyles />
      <div className="App">
        {isMobile ? (
          <>
            <SideBar>
              <SideBarSteps page={page} />
            </SideBar>
            <Card>
              <CardContent />
            </Card>
          </>
        ) : (
          <Card>
            <CardContent />
            <SideBar>
              <SideBarSteps page={page} />
            </SideBar>
          </Card>
        )}
      </div>
    </ButtonProvider>
  );
}

export default App;
