import {useState} from "react";
const DropdownExport = () => {
const [open, setOpen] = useState(false);
  return(

    <div className="flex justify-center mt-0">
      <div onMouseLeave={() => setOpen(false)} className="relative"  >
        <button 
        onMouseOver={() => setOpen(true)}
        className="flex items-center p-0 bg-gray-800  rounded-md">
        <span className="mr-4  ml-3">Export</span>
</button>
<ul 
className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${ open ? "block" : "hidden"}`}>

<li className="flex w-full items-center text-center px-2 py-2 text-sm hover:bg-gray-800 bg bg-gray-800 text-white rounded-sm  border-b-2">Export Payment</li>
<li className="flex w-full items-center text-center px-2 py-2 text-sm hover:bg-gray-800 bg bg-gray-800 text-white rounded-sm">Export Students</li>

</ul>
      </div>
    </div>
  );
}
export default DropdownExport;