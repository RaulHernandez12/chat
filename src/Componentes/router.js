import { BrowserRouter, Routes, Route  } from "react-router-dom";
import InsertFunction from "./InsertFunction";
import LoginFunction from "./LoginFunction";
import Registro from "./Registro";

export default function Enrutar() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<LoginFunction />} > */}
          <Route index element={<LoginFunction />}  />
          <Route path="/insert" element={<InsertFunction />} />
          <Route path="/registro" element={<Registro />} />
        {/* </Route>  */}
      </Routes>
    </BrowserRouter>
  );
}