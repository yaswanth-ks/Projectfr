import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Create from "./Create.jsx";
import Update from "./Update.jsx";
import Users from "./Users.jsx";

const Apps = () => {
    return (
        <div>
        <Router>
             <Routes>
                <Route exact path="/create"  element={<Create />}/>
                <Route exact path="/update/:id"  element={<Update />   }/>
                <Route exact path="/"  element={< Users />} />
             </Routes>
               
        </Router>
        </div>
    );
};
export default Apps;