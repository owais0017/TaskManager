import './login.css';

export default function Login({handleClick,handleFormSubmit,setEmail,setPassword}) {
    return (
        <div>
            <div className='sign-up' >
                <button onClick={()=>{handleClick('signup')}}>
                    sign up
                </button>
            </div>
            <div className='main-frame'>
                <div className='login-box'>
                    <h2>Login Page</h2>
                    <form onSubmit={(e)=>{handleFormSubmit(e)}}>

                        <input 
                        type='text' 
                        placeholder='Email' 
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />

                        <input type='password' 
                        placeholder='Password' 
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />

                        <button type='submit' >Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
