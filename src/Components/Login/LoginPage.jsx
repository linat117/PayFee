import { useNavigate } from "react-router-dom";

const loginPage = () => {
    const navigate = useNavigate();
    const navigateToStudents = () => {
        navigate('/Students');
    };
    const navigateToSignup = () => {
        navigate('/Signup')
    }
    return ( 
        <div className="w-screen h-screen bg-gray-300 position-fixed py-32 px-96 ">
   <div className=" h h-80 w w-3/2 bg bg-zinc-700 rounded-2xl p-9 py-8 ">
    <form >
<h1 className="text-bold text-center text-3xl p-3 p-y-5 text-gray-200">Login</h1>
<p className='p-4 font-semibold text-xl px-4  text-gray-200' >User Name : <input type="alphanumeric" className='rounded-lg p p-0 text-black'/></p>
<p className='p-4 font-semibold text-xl p-x-5  text-gray-200'>Password : <input type="password" className='rounded-lg  text-black '/></p>
 <div className="flex flex-1">
 <button onClick={navigateToSignup} className='m mx-22 my-5 w w-52 h h-9 text-xl bg bg-zinc-800 rounded-lg text-white'>Sign up</button>

 <button onClick={navigateToStudents} className='m mx-72 my-5 w w-28 h h-9 text-xl bg bg-zinc-800 rounded-lg text-white'>Login</button>
  </div>
</form>
   </div>
    </div>
     );
}
 
export default loginPage;