import './login.css';

export default function Signup({handleClick,handleSignup,setEmail,setPassword}) {
    return (
        <div>
            <div className='main-frame'>
                <div className='login-box'>
                    <h2> welcome!</h2>
                    <h2>SignUp Page</h2>
                    <form onSubmit={handleSignup}>
                        <input
                        type='text' placeholder='Email'
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />

                        <input 
                        type='password' 
                        placeholder='Password' 
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />

                        <button 
                         type='submit' 
                         onClick={handleClick}>
                             Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
