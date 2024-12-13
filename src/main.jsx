import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Router";
//import { AuthProvider } from "./context/AuthContext";
import SuspenseContent from "./components/SuspenseContent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<SuspenseContent />}>
    
    <RouterProvider router={router} />
    
    </Suspense>
  </React.StrictMode>
);