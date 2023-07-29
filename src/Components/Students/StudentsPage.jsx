import Navbar from "../../Common/Navbar";
import Sidebar from "../../Common/Sidebar";
const StudentsPage = () => {
    return ( 
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="flex ">
            <div>
                <Sidebar/>
            </div>
            <div >
             <h1 className="text-center underline text-2xl text-bold text-emerald-500">   This is the students page!</h1>
            </div>
            </div>
        </div>
     );
}
 
export default StudentsPage;