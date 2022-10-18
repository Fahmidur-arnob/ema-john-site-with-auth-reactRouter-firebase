import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login Now!</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;