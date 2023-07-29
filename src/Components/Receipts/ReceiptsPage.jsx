import Navbar from "../../Common/Navbar";
import Sidebar from "../../Common/Sidebar";

const ReceiptsPage = () => {
    
    return (
        <div>

            <div className="flex">
                <div>
                    <Sidebar/>
                </div>
                <div className="w w-screen  bg-gray-100">
                <h1 className="text-3xl text font-semibold m mt-7 m ml-96 mr-0">    RECEIPT VOUCHER</h1>
                <div className="w w-11/12 m m-7 h h-96">
                <p className="text-right m ml-80 mr-12 p-2 pr-6  ">Date<input type="date" className="text-right border border-slate-400 rounded-sm "/></p>
                <p className="text-right m ml-80 mr-12 p-0 pr-6 ">Serial no<input type="serial" className="text-right border border-slate-400 rounded-sm"/></p>
                 <p className="p p-3">
                    <hr></hr></p>
                 <div className="w w-113/12">
                 <p className="text-left m ml-7">From:<input type="text"  className="w w-11/12 m mr-2 mt-4 border border-slate-400"/></p>
              <div className="flex w w-11/12">
                <p className="m mt-4 ml-7 mr-0 flex flex-grow">Sum of <br></br>
                birr : <input type="text" className="w w-10/12 h h-12 m ml-2 border border-slate-400"/></p>
              <p className="text-right m ml-6 mr-0 mt-4">Birr :<input type="number" className=" h h-12 border border-slate-400 w w-72 m ml-4"/></p>
              </div>
              <p className="m ml-7 mt-3">For:<input type="text" className="w w-11/12 m ml-3 border border-slate-400"/></p>
              <p className="m mt-3 ml-7">Monthly Payment:</p>
              <p className="m mt-3 ml-7">Tutorial Payment:</p>
              <p className="m mt-3 ml-7">Grade:<input type="alpanumeric" className="w w-11/12 m ml-1 border border-slate-400"/></p>
              <div className="flex">
              <p className="m mt-3 ml-7">Reference:<input type="text" className="border border-slate-400 m ml-2" /></p>
              <p className="m ml-36 mt-3">Remaining<input type="Radio" className="m ml-1 mt-2"/></p>
              <p className="m ml-16 mt-3">Extra<input type="Radio" className="m ml-1 mt-2"/></p>
              <p className="m ml-16 mt-3">Paid off remaining<input type="Radio" className="m ml-1 mt-2"/></p>
              <p className="m ml-16 mt-3">Paid off extra<input type="Radio" className="m ml-1 mt-2"/></p>
              </div>
             <button className="text-xl bg-gray-950 text-white m mt-7 ml-7 w w-20 p p-2 rounded-lg hover  hover:bg-gray-600">Submit</button>
             </div>
              </div>
                </div>
            </div>
        </div>
      );
}
 
export default ReceiptsPage;