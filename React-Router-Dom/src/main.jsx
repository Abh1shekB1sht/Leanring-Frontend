import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

// different types of router's
import { BrowserRouter, HashRouter, unstable_HistoryRouter, StaticRouter, MemoryRouter } from "react-router-dom";

/*
! * Browser Router -> 
* it is the core component in react-router 
* it enables client-side routing in react apps using the HTML5 history api instead of full page reloads.
* it is generally used to wrap your entire react app so that the routes component can render different route.

! * Hash Router -> 
* similar to browserrouter (as to works inside the browser) but 
* instead of being normal url it stores the url inside the #
* we are storing everything related to the url inside the hash

! * unstable_HistoryRouter -> 
* how it works is it allows us to take control of the entire history of the react-router.
* history element just determines how your browser render's out the history of the pages you have visited.
* it allows to have direct access to the browser history.

! * MemoryRouter ->
* is different from any other router as it stores the information about where you have visited in history inside the mmeory.
* it doesn't rely on the url part of the browser.
* helpful in testing the router code that don't actually connect to the browser.

! * StaticRouter -> 
* It is specifically for working on the server's.
* it is different from the other router as it doesn't allow to change pages.
* It specifies a single url, and we do it by specificying the 
? location parameter 
* inside the staticrouter component.
*/


import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
)