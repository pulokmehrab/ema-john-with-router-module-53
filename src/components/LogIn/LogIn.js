import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css'
const LogIn = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Log In!!</h2>
            <form >
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