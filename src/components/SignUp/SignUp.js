import React from 'react';
import { Link } from 'react-router-dom';
import'./SignUp.css'
const SignUp = () => {
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign In!!</h2>
        <form >
            <div className='form-control'>
                <label htmlFor='email'>
                name
                </label>
                <input type="text" name="name" required/>
                <label htmlFor='email'>
                Email
                </label>
                <input type="email" name="email" required/>
                <label htmlFor='email'>
               Password
                </label>
                <input type="password" name="password" required/>
                

            </div>
               <input className='button-submit' type="submit" value="Sign In"/>
        </form>
        <input className='button-submit' type="submit" value="Sign in With Google"/>
        <p>Already have an account? <Link to='/login'>Log In</Link></p>

        
    </div>
    );
};

export default SignUp;