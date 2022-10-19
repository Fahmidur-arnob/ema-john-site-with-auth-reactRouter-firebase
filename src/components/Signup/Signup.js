import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {

    const [error, setError] = useState(null);

    const handleSubmit = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password.length < 6){
            setError(`Password should contain more than 6 characters.`);
            return;//shamne jaba na return kore jaba;
        }
        else if(password !== confirm){
            setError(`Your password didn't match`);
            return;//shamne jaba na return kore jaba;
        }
    }


    return (
        <div className='form-container'>
            <h1 className='form-title'>SignUp Now!</h1>
            <form onSubmit={handleSubmit}>
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

                <p className='alreadyHave'>Already have and account? Go To <Link className='alreadeHaveLink' to="/login">LOGIN</Link> </p>

                <p className='text-error'>{error}</p>
            </form>
        </div>
    );
};

export default Signup;