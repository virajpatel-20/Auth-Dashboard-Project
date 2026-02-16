import Login from "./login";
import Register from "./Register";
import Dashboard from "./dashboard";
import ProtectedRoute from "./ProtectedRoute";


import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";

function App(){

 return(

  <BrowserRouter>

   <Routes>

    <Route path="/" element={<Login />} />

    <Route path="/register" element={<Register />} />

    <Route path="/dashboard" element={
                                    <ProtectedRoute>
                                     <Dashboard />
                                    </ProtectedRoute>
     }
/>


   </Routes>

  </BrowserRouter>

 );

}

export default App;
