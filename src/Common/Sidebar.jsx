import  { IconContext } from 'react-icons'
import {FaList} from 'react-icons/fa'
import {IoReceiptOutline} from 'react-icons/io5'
import {BsPersonCircle} from 'react-icons/bs'
import {MdOutlinePayments} from 'react-icons/md'
import {TbFileReport} from 'react-icons/tb'
import { Link} from 'react-router-dom'

const Sidebar = () => {
    return ( 
        <div className="w-32 h-screen bg bg-slate-800">
 <IconContext.Provider value={{ className: 'react-icons' }}></IconContext.Provider>
<p className='text-white text-5xl p px-8 '> <BsPersonCircle/> </p>
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
    
     );
}
 
export default Sidebar;