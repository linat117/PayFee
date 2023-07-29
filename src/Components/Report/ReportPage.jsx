
import Navbar from "../../Common/Navbar";
import Sidebar from "../../Common/Sidebar";

const ReportPage = () => {
       
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
<div className="">
    <button className="w w-24 bg-white border border-slate-400 m my-2 mx-2 mr-0 border-x-3 h h-8 rounded-l-lg">All Receipts</button>
    
    <button className="w w-32 bg-white border border-slate-400 m mt-0 h h-8 border-x-3">Student Receipts</button>
    
    <button className="w w-28 bg-white border border-slate-400 m my-2 h h-8 rounded-r-lg border-x-3 ">Other Receipts</button>



    <input type="alphanumeric" placeholder="Search" className="rounded-lg bg bg-white border border-slate-400 w w-48 h h-8 m mx-64 " />


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
            </table>
        
                  </div>
                  <div className=" w w-13/12  bg bg-gray-100 rounded-lg m-0 h h-96 ">

                  </div>
                  </>
            </div>
            </div>
            </div>
            </div>
    );
}
 
export default ReportPage;