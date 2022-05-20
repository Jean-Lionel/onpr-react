import { CssBaseline } from "@mui/material";
import AutoCompleteTest from "../components/test/AutoCompleteTest";
import SearchBarTest from "../components/test/SearchBarTest";
import RichTextEditor from "../Test/RichTextEditor";
import Admin from "./Admin";


const TestComponent = () => {
    return ( <Admin>
             <RichTextEditor/>
           
           <br />
           <br />
           <br />
           <br />
           <br />

           <CssBaseline/>
           
          <SearchBarTest/>
          <AutoCompleteTest/>
    </Admin> );
}
 
export default TestComponent;