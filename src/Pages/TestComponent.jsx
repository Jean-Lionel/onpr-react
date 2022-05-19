import AutoCompleteTest from "../components/test/AutoCompleteTest";
import SearchBarTest from "../components/test/SearchBarTest";
import Admin from "./Admin";


const TestComponent = () => {
    return ( <Admin>
          <SearchBarTest/>
          <AutoCompleteTest/>
    </Admin> );
}
 
export default TestComponent;