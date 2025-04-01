import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

interface LoginProps {
  setIsLoggedIn: (status: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      alert('Login successful!');
      setIsLoggedIn(true);
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
      <h1 className="text-2xl font-bold mb-4">Log In</h1>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full bg-red-500 text-white py-2 rounded">
          Log In
        </button>
      </form>
      <p className="mt-4">
        Don't have an account? <a href="/signup" className="text-red-500">Sign Up</a>
      </p>
      <Footer />
    </div>
  );
};

export default Login;