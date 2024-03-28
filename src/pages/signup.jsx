import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const validateName = (name) => /^[A-Za-z\s]+$/.test(name.trim());
    const validateEmail = (email) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const validatePassword = (password) => {
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLongEnough = password.length >= 8;
        return hasNumber && hasSpecialChar && isLongEnough;
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("ev",event)
        if (!validateName(name)) {
            setError('Name should only contain alphabets');
            return;
        }
        if (!validateEmail(email)) {
            setError('Invalid email address');
            return;
        }
        if (!validatePassword(password)) {
            setError('Password must contain at least 8 characters, including a number and a special character');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setError('');
        const data = {
            name: name,
            email: email,
            password: password,
        }
        fetch('http://payemnt-env.eba-z2yqwtde.us-east-1.elasticbeanstalk.com/sign-up', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log("dd",data)
                if (data?.success === true) {
                    alert(data?.message);
                    if (data?.message === 'User registration is successful') {
                        navigate('/login');
                    }
                } else {
                    alert(data?.message);
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                }
            })
            .catch(err => {
                console.log('err', err);
            })
    }

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="md:w-1/2 bg-blue-500 text-white flex items-center justify-center p-8">
                <img src={`${process.env.PUBLIC_URL}/images/img.png`} alt="Sport Hub"/>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
            <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign Up for Sport Hub
                        </h2>
                    </div>
                    {error && <div className="text-red-500 text-center">{error}</div>}
                    <form className="space-y-6" onSubmit={submitHandler}>
                        <input type="text" placeholder="Full Name" className="border border-gray-300 rounded w-full p-3" value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type="email" placeholder="Email address" className="border border-gray-300 rounded w-full p-3" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" placeholder="Password" className="border border-gray-300 rounded w-full p-3" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <input type="password" placeholder="Repeat Password" className="border border-gray-300 rounded w-full p-3" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                style={{ backgroundColor: '#4f46e5', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                            >
                                Sign Up
                            </button>

                        </div>
                        <div className="text-sm">
                            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Already have an account? Sign in
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
