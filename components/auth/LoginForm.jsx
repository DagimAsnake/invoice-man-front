'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/store/authSlice';

export default function LoginForm() {
  const dispatch = useDispatch();
  const { status, loading, error } = useSelector((state) => state.auth);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errormsg, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credientials = {
      email: username,
      password: password,
    };
    dispatch(login(credientials));
  };

  useEffect(() => {
    if (status === 'error') {
      setError('Failed to login, Try again');
    }
  }, [status]);

  return (
    <div className='flex justify-center items-center h-screen bg-white'>
      <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-md'>
        <h1 className='text-lg font-bold text-center mb-4 text-green-500'>
          Welcome to Invoice Management System
        </h1>
        <h1 className='text-2xl font-bold text-center mb-4 text-green-500'>
          Login
        </h1>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <input
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              type='text'
              placeholder='Email'
              required
              className='w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:border-green-400'
            />
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Password'
              required
              className='w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:border-green-400'
            />
          </div>
          <button
            type='submit'
            disabled={loading}
            className={`w-full px-4 py-2 rounded-md text-white ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {errormsg && (
            <div className='bg-red-500 text-white py-2 px-4 rounded-lg'>
              {errormsg}
            </div>
          )}
        </form>

        <p className='text-sm mt-4 text-center text-gray-400'>
          Don&apos;t have an account?{' '}
          <a href='/Register' className='text-green-600 hover:underline'>
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
