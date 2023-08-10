import { IoPersonCircle } from "react-icons/io5";
import Navbar from "../../Common/Navbar";
import Sidebar from "../../Common/Sidebar";

const PaymentPage = () => {

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="flex">
                <div>
                    <Sidebar/>
                </div>
                <div className="w w-11/12 bg bg-gray-200">
                   <div className="flex m mt-32 ml-9 w w-11/12 ">
                    <p className="text-5xl m mr-3"><IoPersonCircle/></p>
                  <div className="m mr-5">
                    <h3>FULL NAME</h3>
                    <p className=" text-gray-800">Payer</p>
                  </div>
                  <div className="m mr-5">
                    
                  <h3>GRADE</h3>
                    <p  className=" text-gray-800">Grade</p>
                  </div>
                  <div className="m mr-5">
                    
                    <h3>REMAINING</h3>
                      <p className=" text-gray-800">Remaining</p>
                    </div>
                    <div className="m mr-5">
                    
                    <h3>TOTAL PAID</h3>
                      <p className=" text-gray-800">Amount</p>
                    </div>
                    <div className="text-right">
                    <p className="font-bold m ml-96 mt-5">PAYMENT HISTORY</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                    </div>
                   </div>
                   <div className=" w w-11/12 bg bg-gray-800 h h-10 m mt-6 ml-9 rounded-lg">
                  
            <table >
                <tr className="text-white">
                    <th className="w w-16 text-left p-2">ID</th>
                    <th className="w w-52 text-left">Payer</th>
                    <th className="w w-14 text-left">Grade</th>
                    <th className="w w-10 text-left">Sec.</th>
                    <th className="w w-24 text-left">Remaining</th>
                    <th className="w w-20 text-left">Date</th>
                    <th className="w w-24 text-left">Serial</th>
                    <th  className="w w-24 text-left">Amount</th>
                    <th className="w w-24 text-left">Reason</th>
                    <th className=" w w-52 text-left">Reference</th>
                </tr>
                <tr className="w w-11/12 bg bg-gray-100 rounded-lg m mt-0 ml-9 h h-10">
<td>0000</td>
<td></td>
<td></td>
<td>A</td>
<td>
  </td>
<td>07-07-2020</td>
<td>0000000</td>
<td> </td>
<td>Monthly,workbook</td>
<td>*******</td>

                </tr>
            </table>
        
                  </div>
                  

                  
                    </div>
            </div>
        </div>
      );
}
 
export default PaymentPage;