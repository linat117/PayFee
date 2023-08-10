import {useState} from "react";
const DropdownYear = () => {
const [open, setOpen] = useState(false);
  return(

    <div className="flex justify-center mt-0">
      <div onMouseLeave={() => setOpen(false)} className="relative"  >
        <button 
        onMouseOver={() => setOpen(true)}
        className="flex items-center p-0 bg-gray-800  rounded-md">
        <span className="mr-4  ml-3">Year</span>
</button>
<ul 
className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${ open ? "block" : "hidden"}`}>

<li className="flex w-full items-center text-center px-2 py-2 text-sm hover:bg-gray-800 bg bg-gray-800 text-white rounded-sm  border-b-2">2016</li>
<li className="flex w-full items-center text-center px-2 py-2 text-sm hover:bg-gray-800 bg bg-gray-800 text-white rounded-sm border-b-2">2017</li>

<li className="flex w-full items-center text-center px-2 py-2 text-sm hover:bg-gray-800 bg bg-gray-800 text-white rounded-sm border-b-2">2018</li>

<li className="flex w-full items-center text-center px-2 py-2 text-sm hover:bg-gray-800 bg bg-gray-800 text-white rounded-sm border-b-2">2019</li>

<li className="flex w-full items-center text-center px-2 py-2 text-sm hover:bg-gray-800 bg bg-gray-800 text-white rounded-sm border-b-2">2020</li>

<li className="flex w-full items-center text-center px-2 py-2 text-sm hover:bg-gray-800 bg bg-gray-800 text-white rounded-sm border-b-2">2021</li>

<li className="flex w-full items-center text-center px-2 py-2 text-sm hover:bg-gray-800 bg bg-gray-800 text-white rounded-sm border-b-2">2022</li>

<li className="flex w-full items-center text-center px-2 py-2 text-sm hover:bg-gray-800 bg bg-gray-800 text-white rounded-sm ">2023</li>

</ul>
      </div>
    </div>
  );
}
export default DropdownYear;