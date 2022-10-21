import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const About = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <h2>welcome {user.email}</h2>
        </div>
    );
};

export default About;