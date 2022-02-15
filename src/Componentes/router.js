import { BrowserRouter, Routes, Route  } from "react-router-dom";
import InsertFunction from "./InsertFunction";
import LoginFunction from "./LoginFunction";
import PadreFunction from "./PadreFunction";
import ConexionFunction from "./ConexionFunction";

export default function Enrutar() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LoginFunction />} > */}
          <Route index element={<LoginFunction />}  />
          <Route path="/insert" element={<InsertFunction />} />
        {/* </Route>  */}
      </Routes>
    </BrowserRouter>
  );
}