
import Navbar from "../../Common/Navbar";
import Sidebar from "../../Common/Sidebar";
import Switch from '@mui/material/Switch';
import SearchIcon from '@mui/icons-material/Search';

const ReportPage = () => {
       
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const label = { inputProps: { 'aria-label': 'Switch demo' } };


    return (  
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="flex">
                <div>
                    <Sidebar/>
                </div>
                <div className="w-screen bg bg-gray-200">
<div className="w w-13/12 h h-12 bg bg-gray-100 rounded-lg m-7">
<div className="flex">
    <button className="w w-24 bg-white border border-slate-400 m my-2 mx-2 mr-0 border-x-3 h h-8 rounded-l-lg">All Receipts</button>
    
    <button className="w w-32 bg-white border border-slate-400 m mt-2 h h-8 border-x-3">Student Receipts</button>
    
    <button className="w w-28 bg-white border border-slate-400 m my-2 h h-8 rounded-r-lg border-x-3 ">Other Receipts</button>

<div className="flex">
    <Switch {...label} defaultChecked color="default" className="m ml-24 mr-0" />
     
    <p className='text-center m -ml-16 mt-6 '>{date}</p>
    </div>

    <input type="alphanumeric" placeholder="Search" className="rounded-lg bg bg-white border border-slate-400 w w-48 h h-8 m ml-72 mt-2 " ></input>
   <p className="m -ml-8 mt-3 text-slate-400"> <SearchIcon/></p>


                  </div>
                  <>
                  <div className="w w-13/12 bg bg-gray-800 h h-10 m-0 mt-6 rounded-lg">
                  
            <table >
                <tr className="text-white">
                    <th className="w w-16 text-left p-2">ID</th>
                    <th className="w w-52 text-left">Payer</th>
                    <th className="w w-14 text-left">Grade</th>
                    <th className="w w-10 text-left">Sec.</th>
                    <th className="w w-28 text-left">Remaining</th>
                    <th className="w w-20 text-left">Date</th>
                    <th className="w w-24 text-left">Serial</th>
                    <th  className="w w-24 text-left">Amount</th>
                    <th className="w w-24 text-left">Reason</th>
                    <th className="text-left">Reference</th>
                </tr>
                <tr className=" w w-13/12  bg bg-gray-100 border border-y-1 m-1  h h-auto ">
<td>0000</td>
<td>hilina</td>
<td>5</td>
<td>A</td>

<td>444.00</td>

<td>02-03-2023</td>

<td>000000</td>

<td>570.00</td>

<td>A</td>

<td>A</td>
                  
</tr>
<tr className="h h-auto bg bg-slate-100">
    <td></td>
    
    <td>aaa</td>
    
    <td></td>
    
    <td>D</td>
    
    <td></td>
    
    <td>02-03-2023</td>
</tr>
            </table>
        
                  </div>
                  
                  </>
            </div>
            </div>
            </div>
            <div>
            </div>
            </div>
    );
}
 
export default ReportPage;