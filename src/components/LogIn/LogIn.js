import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './LogIn.css'
const LogIn = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const from =location.state?.from?.pathname || '/'
    const handleLogIn= event=>{
      


        event.preventDefault();
        const form = event.target
        const email =form.email.value;
        const password =form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace:true})
        })
        
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Log In!!</h2>
            <form onSubmit={handleLogIn} >
                <div className='form-control'>
                    <label htmlFor='email'>
                    Email
                    </label>
                    <input type="email" name="email" required/>
                    <label htmlFor='email'>
                   Password
                    </label>
                    <input type="password" name="password" required/>
                    

                </div>
                   <input className='button-submit' type="submit" value="Log In"/>
            </form>
            <input className='button-submit' type="submit" value="Sign in With Google"/>
            <p>new to emajhon? <Link to='/signup'>Create New Account</Link></p>

            
        </div>
    );
};

export default LogIn;