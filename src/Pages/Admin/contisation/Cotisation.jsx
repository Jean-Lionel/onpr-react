import { Box } from "@mui/material";
import Admin from "../../Admin";
import * as XLSX from "xlsx";
import { useState } from "react";

const Cotisation = () => {

    const [fileInfo, setFileInfo] = useState("");

    const upploadData = (e) => {
        e.preventDefault();
        alert("uploading data");
    }

    const onChange = (e) => {
        const [file] = e.target.files;
        const reader = new FileReader();
    
        reader.onload = (evt) => {
          const bstr = evt.target.result;
          const wb = XLSX.read(bstr, { type: "binary" });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });

            setFileInfo(data);
          console.log(data);
        };
        reader.readAsBinaryString(file);
      };

    return ( 
        <Admin>
            <Box>
              <h1>Cotisation</h1>

              <form>
                  <input type="file"  accept=".csv, .xlsx"  onChange={onChange}/>
                  <button onClick={upploadData}> data</button>
              </form>

              <div>
                  {fileInfo && (
                      <div>
                          {fileInfo}
                      </div>
                  )}
              </div>
            </Box>  
        </Admin>
     );
}
 
export default Cotisation;