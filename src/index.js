import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/reset.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Competition from "./pages/Competition";
import PersonalMessage from "./pages/PersonalMessage";
import Team from "./pages/Team";
import Time from "./pages/Time";
import PersonalMessage1 from "./pages/PersonalMessage1";
import PersonalMessage2 from "./pages/PersonalMessage2";
import PersonalMessage3 from "./pages/PersonalMessage3";
import PersonalMessage4 from "./pages/PersonalMessage4";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Competition/>}></Route>
            <Route path="/person" element={<PersonalMessage/>}></Route>
            <Route path="/person1" element={<PersonalMessage1/>}></Route>
            <Route path="/person2" element={<PersonalMessage2/>}></Route>
            <Route path="/person3" element={<PersonalMessage3/>}></Route>
            <Route path="/person4" element={<PersonalMessage4/>}></Route>
            <Route path="/team" element={<Team/>}></Route>
            <Route path="/time" element={<Time/>}></Route>
        </Routes>
    </BrowserRouter>
);
