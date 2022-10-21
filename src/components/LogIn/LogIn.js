import React from 'react';
import './LogIn.css'
const LogIn = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Log In!!</h2>
            <form >
                <div className='form-control'>
                    <label htmlFor='email'>
                    email
                    </label>
                    <input type="email" name="email" id=""/>

                </div>

            </form>
            
        </div>
    );
};

export default LogIn;