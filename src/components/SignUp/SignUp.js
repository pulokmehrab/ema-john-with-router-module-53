import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import'./SignUp.css'
const SignUp = () => {
    const [error, setError]=useState(null);
    const {createUser}=useContext(AuthContext);
    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target
        const email =form.email.value;
        const password =form.password.value;
        const confirm =form.confirm.value;
        console.log(email,password,confirm);

        if (password.length <6){
            setError('youtr pass should be 6 character long')
            return;
        }
        if(password !== confirm){
            setError('your pass did not match');
            return;

        }
        createUser(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user);
            
            form.reset();


        })
        .catch(error=> console.error(error))
    
    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign In!!</h2>
        <form onSubmit={handleSubmit} >
            <div className='form-control'>
                
                <label htmlFor='email'>
                Email
                </label>
                <input type="email" name="email" required/>
                <label htmlFor='password'>
               Password
                </label>
                <input type="password" name="password" required/>
                <label htmlFor='password'>
               Confirm Password
                </label>
                <input type="password" name="confirm" required/>
                <p>{error}</p>
                

            </div>
               <input className='button-submit' type="submit" value="Sign In"/>
        </form>
        <input className='button-submit' type="submit" value="Sign in With Google"/>
        <p>Already have an account? <Link to='/login'>Log In</Link></p>
        

        
    </div>
    );
};

export default SignUp;