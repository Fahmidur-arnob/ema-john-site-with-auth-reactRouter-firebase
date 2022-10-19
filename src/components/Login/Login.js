import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

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
                <p>New to ema-john? go to <Link to="/sign ">SignUp</Link> </p>
            </form>
        </div>
    );
};

export default Login;