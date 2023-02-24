import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Global, css } from "@emotion/react";

import App from "./App";
import Demo from "./components2/Demo/Demo";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}
    />
    <Demo />
  </>
);
