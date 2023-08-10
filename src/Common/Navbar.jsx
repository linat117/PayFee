
import Dropdown from "../Components/Dropdown";
import DropdownYear from "../Components/DropdownYear";
import DropdownExport from "../Components/DropdownExport";
import DropdownPayment from "../Components/DropdownPayment";
import DropdownReceipts from "../Components/DropdownReceipts";
import DropdownReport from "../Components/DropdownReport";
const Navbar = () => {
   return ( 
        <div className="w-screen h-12 bg bg-gray-800">
<div className="text-lg text-white flex px-32 py-2 ">
    
    <p> <Dropdown/> </p>
    <p ><DropdownReceipts/></p>
    <p><DropdownPayment/></p>
    <p><DropdownReport/></p>
    <p><DropdownExport/></p>
    <p><DropdownYear/></p>
</div>


        </div>
     );
}
 
export default Navbar;