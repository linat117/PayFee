import  { IconContext } from 'react-icons'
import {FaList} from 'react-icons/fa'
import {IoReceiptOutline} from 'react-icons/io5'
import {BsPersonCircle} from 'react-icons/bs'
import {MdOutlinePayments} from 'react-icons/md'
import {TbFileReport} from 'react-icons/tb'
import { Link } from 'react-router-dom'

const ReceiptsPage = () => {

    
    return (
        <div>

            <div className="flex">
                <div>
                <div className="w-28 h-screen bg bg-slate-800">
 <IconContext.Provider value={{ className: 'react-icons' }}></IconContext.Provider>
<p className='text-white text-5xl p px-8 pt-12'> <BsPersonCircle/> </p>
<p className="text-white text-lg px-3 py-6">UserName</p>
<p className='text-white text-4xl p px-9'> <FaList/> </p>
<p className="text-white text-lg px-5 py-2">Students</p>
<Link to="/Receipts">
<p className='text-white text-4xl p px-9'> <IoReceiptOutline/> </p>
<p className="text-white text-lg px-5 py-2">Receipts</p>
</Link>
<Link to="/Report">
<p className='text-white text-4xl p px-9'> <TbFileReport/> </p>
<p className="text-white text-lg px-5 py-2">Report</p>
</Link>
<Link to="/Payment">
<p className='text-white text-4xl p px-9'> <MdOutlinePayments/> </p>
<p className="text-white text-lg px-5 py-2">Payment</p>
  </Link>
  
  
      <IconContext.Provider/>
        </div>
    
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
              <p className="m mt-3 ml-7">Reference:<input type="text" className="border border-slate-400 m ml-2 w w-52" /></p>
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