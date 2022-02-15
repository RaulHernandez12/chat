import React, { useState}  from "react";
import Loginfunction from "./LoginFunction";
import InsertFunction from "./InsertFunction";

export default function PadreFunction(){    
      
   const [id,setId] = useState(0)   
        return(
            <div>
                <Loginfunction onChange={(e) => setId(e)}/>
                <InsertFunction cambiarId = {id} />
            </div>
        )   
}