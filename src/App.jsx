// App.jsx
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Include this for toggling!

import AppRoutes from "./routes/routes";


const App = () =>{
  return (
    <>
   <div style={{ background: "#2AA7FF", textAlign: "center", marginTop: "0", padding: "0" }}>
  <p style={{ margin: "0", padding: "8px", color: "white" }}>
    The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
  </p>
</div>

     < AppRoutes/>
    </>
  )
} ;

export default App;