import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save profile data to local storage
    const profileData = { name, email, password };
    localStorage.setItem("userProfile", JSON.stringify(profileData));

    alert("Profile created successfully!");
    navigate("/"); // Redirect to the home page or dashboard
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Create Your Profile</h1>
      <form onSubmit={handleSubmit} className="w-64">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
}

export default CreateProfile;