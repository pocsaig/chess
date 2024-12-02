import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { DartListPage } from "./DartListPage.jsx";
import { DartSinglePage } from "./DartSinglePage.jsx";
import { DartCreatePage } from "./DartCreatePage.jsx";
import { DartModPage } from "./DartModPage.jsx";
import { DartDelPage } from "./DartDelPage.jsx";

import './App.css';


export const App =()=> {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
              <span className="nav-link">Dartsozók</span>
            </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/uj-darts'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Új Dartsozó</span>
              </NavLink>
              </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<DartListPage />} />
        <Route path="/darts/:dartsId" exact element={<DartSinglePage />} />
        <Route path="/uj-darts" exact element={<DartCreatePage />} />
        <Route path="/mod-darts/:dartsId" exact element={<DartModPage />} />
        <Route path="/del-darts/:dartsId" exact element={<DartDelPage />} />
      </Routes>
    </Router>
  );
};