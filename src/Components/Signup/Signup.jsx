import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
   
 
    const [values, setValues] = useState({
        firstname :'',
        lastname: '',
        username: '',
        password:'',
        confirmpassword :''
    })
    const navigate = useNavigate();
        const handleInput = (event) => {
            setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
        }
        const handleSubmit = async (event) => {
            event.preventDefault();
            axios.post('http://localhost:3000/schoolpay', values)
            .then(res => 
                {
                    console.log(res);
                })
            .catch(err => console.log(err));
        }
    

    
    return ( 
        <div className=" bw w-screen h h-screen bg bg-slate-200 m mt-0 p pt-32 pl-96 ">
           
           <div className="bg bg-gray-700 text-white w w-7/12 h h-full rounded-2xl m -mt-12 "> 
            <div>
                <h2 className="text-3xl text-center p p-6 pb-8">Sign up</h2>
            </div>
           <form onSubmit={handleSubmit}>
               <p className="text-lg m ml-8 p pb-3">first Name:<input type="alphanumeric" name="firstname" onChange={handleInput} className="rounded-lg m ml-20 mb-2 text-slate-800 text-md"/></p>
               <p className="text-lg m ml-8 p pb-3">last Name:<input type="alphanumeric" name="lastname" onChange={handleInput} className="rounded-lg m ml-20 mb-2 text-slate-800 text-md"/></p>
               <p className="text-lg m ml-8 p pb-3">User Name:<input type="alphanumeric" name="username" onChange={handleInput} className="rounded-lg m ml-20 mb-2 text-slate-800 text-md"/></p>
                <p className="text-lg m ml-8 p pb-3">Password:<input type="password" name="password" onChange={handleInput} className="rounded-lg m ml-24 mb-2 text-slate-800"/></p>
                <p className="text-lg m ml-8 p pb-3">confirm password:<input type="password" name="confirmpassword" onChange={handleInput}  className="rounded-lg m ml-20 mb-2 text-slate-800 text-md"/></p>
     <Link to="/Students"><button  type="submit"  className="text-lg border border-slate-400 rounded-lg w w-44 m mt-12 ml-36 bg bg-zinc-800 text-slate-200 ">Sign in</button></Link> 
           
            </form>
            </div>
        </div>
     );
}
 
export default Signup;