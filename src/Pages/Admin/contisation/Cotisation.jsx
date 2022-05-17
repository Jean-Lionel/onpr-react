import { Box } from "@mui/material";
import useReadExcel from "../../../utility/useReadExcel";
import Admin from "../../Admin";
import {useState} from "react"
import axios from "axios";

const Cotisation = () => {
     const [name, setName] = useState("");

     const {data, columns, dataTable, handleFileUpload}  = useReadExcel();

     const submitData = (e) => {
          e.preventDefault();
          // console.log(data);
          const postData = new FormData()
          postData.append('data', JSON.stringify(data));
          postData.append('name', name);  // name of the file

          axios.post("cotisations", postData)
                .then(res => {
                     console.log(res);
                }).catch(err => {
                      console.log(err);
                  })
          
     }
    return ( 
        <Admin>
            <Box>
              <h1>Cotisation</h1>
              <form>
                <input type="name" name="name" placeholder="name" onChange={(e) => setName(e.target.value)} />
                <input type="file"  accept=".csv,.xlsx,.xls"  onChange={handleFileUpload}/>

                <button onClick={submitData}>Enregistrer</button>
              </form>
              <div>
                 { dataTable()}
              </div>
            </Box>  
        </Admin>
     );
}
 
export default Cotisation;