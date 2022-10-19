import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>SignUp Now!</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>

                <input className='btn-submit' type="submit" value="sign up" />
                <p>Already have and account? Go To <Link to="/login">LOGIN</Link> </p>
            </form>
        </div>
    );
};

export default Signup;