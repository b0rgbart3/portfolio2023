// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();


import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/routes";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Contact from "./pages/Contact";
import Endorsements from "./pages/Endorsements";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

import "./App.scss";
// import { PortfolioProvider } from "./utils/GlobalState";
// import Menu from "./components/MobileMenu"
// import DesktopMenu from "./components/DesktopMenu"
// import Home from "./pages/Home"
// import Projects from "./pages/Projects"
// import Resume from "./pages/Resume"
// import Contact from "./pages/Contact"
// import Endorsements from "./pages/Endorsements"
// import Skills from "./pages/Skills"
// import NoMatch from "./pages/NoMatch";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NoMatch />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/endorsements",
        element: <Endorsements />,
       },
       {
        path: "/resume",
        element: <Resume />,
       },
       {
        path: "/projects",
        element: <Projects />,
       },
       {
        path: "/skills",
        element: <Skills />,
       },
    ]
  }
]);

// Portfolio Provider is our Global State 

// function App() {
//   return (
//     <Router>
//      <div className="App group">
//         <PortfolioProvider> 
//           <DesktopMenu />
//           <Routes>
//             <Route exact path="/" children={Home} />
//             <Route exact path="/projects" children={Projects} />
//             <Route exact path="/resume" children={Resume} />
//             <Route exact path="/endorsements" children={Endorsements} />
//             <Route exact path="/skills" children={Skills} />
//             <Route exact path="/contact" children={Contact} />
//             <Route exact path="/BART_DORITY_resume.pdf" />
//             <Route children={NoMatch} />
//           </Routes>
//           <Menu/>
//         </PortfolioProvider>
//       </div>
//     </Router>
//   );
// }


//export default App;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);