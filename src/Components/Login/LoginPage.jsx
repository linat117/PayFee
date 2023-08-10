import { useNavigate } from "react-router-dom";
import { useState } from "react";

const loginPage = () => {

const [values, setValues] = useState({
    username: '',
    password:''
})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

const onsubmit = (e) =>{
    e.preventDefault();
    console.log("username & password ::",username,password)
if(!username || !password) {
    alert("please fill correct username and password")
}else {
return("/Students");
}
}
 
    const navigate = useNavigate();

    const navigateToSignup = () => {
        navigate('/Signup')
    }
    return (  
        <div className="w-screen h-screen bg-slate-200 position-fixed py-32 px-96 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 sm:space-x-10 items-center my-2 mx-5 md:mx-0 md:my-0">
   <div className=" h h-80 w w-3/2 bg bg-gray-700 rounded-2xl p-9 py-8 ">
    <form >
<h1 className="text-bold text-center text-3xl p-3 p-y-5 text-gray-200">Login</h1>
<p className='p-4 font-semibold text-lg px-4  text-gray-200' >User Name : <input type="alphanumeric" name="username" onChange={handleInput} className='rounded-lg p p-0 ml-2 text-black'/></p>
<p className='p-4 font-semibold text-lg p-x-5  text-gray-200'>Password : <input type="password" name="password" onChange={handleInput} className='rounded-lg ml-5  text-black '/></p>
 <div className="flex  justify-center pt-1">
 <button onClick={navigateToSignup}  className='   w w-36 h h-9 text-xl bg bg-zinc-800 border border-r-1  rounded-l-lg rounded-r-none  text-white'>Sign up</button>

 <button onClick={onsubmit}  className='  w w-28 h h-9 text-xl bg bg-zinc-800 border border-l-1 rounded-r-lg rounded-l-none text-white'>Login</button>
  </div>
</form>
   </div>
    </div>
     );
}
 
export default loginPage;