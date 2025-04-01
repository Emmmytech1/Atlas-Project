import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaApple, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [step, setStep] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handlePhoneContinue = () => {
    if (phoneNumber.length !== 11) {
      alert("Phone number must be exactly 11 digits.");
      return;
    }
    setStep("email");
  };
  const handleEmailContinue = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setStep("register");
  };

  const handleRegister = () => {
    const userDetails = {
      email,
      password,
    };

    // Save user details to localStorage
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    alert("Registration successful! You can now log in.");
    navigate("/login");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-gray-100">
        <div className="w-full max-w-md bg- p-6 rounded-2xl shadow-lg md:max-w-lg lg:max-w-xl">
          {step === "phone" && (
            <div>
              <div className="flex justify-center mb-6">
                <h2 className="text-3xl text-black font-semibold mb-4">Welcome to Airbnb</h2>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Country/Region</label>
                <select className="w-full mt-1 p-2 border rounded-lg bg-gray-50">
                  <option>United Kingdom (+44)</option>
                  <option>United States (+1)</option>
                  <option>Canada (+1)</option>
                  <option>Australia (+61)</option>
                  <option>India (+91)</option>
                  <option>Germany (+49)</option>
                  <option>France (+33)</option>
                  <option>Italy (+39)</option>
                  <option>Spain (+34)</option>
                  <option>China (+86)</option>
                  <option>Japan (+81)</option>
                  <option>South Korea (+82)</option>
                  <option>Brazil (+55)</option>
                  <option>South Africa (+27)</option>
                  <option>United Arab Emirates (+971)</option>
                  <option>Saudi Arabia (+966)</option>
                  <option>Egypt (+20)</option>
                  <option>Nigeria (+234)</option>
                  <option>Kenya (+254)</option>
                  <option>Ghana (+233)</option>
                  <option>Malaysia (+60)</option>
                  <option>Indonesia (+62)</option>
                  <option>Philippines (+63)</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Phone number</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                  placeholder="Phone number"
                  value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <button
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-lg font-medium mb-4"
                onClick={handlePhoneContinue}
              >
                Continue
              </button>

              {/* Social Media Buttons */}
              <div className="flex flex-col gap-2">
                <button className="w-full flex items-center justify-center border p-2 rounded-lg text-black hover:bg-blue-50">
                  <FaFacebook className="mr-2 text-blue-600" /> Continue with Facebook
                </button>
                <button className="w-full flex items-center justify-center border p-2 rounded-lg text-black hover:bg-red-50">
                  <FaGoogle className="mr-2 text-red-600" /> Continue with Google
                </button>
                <button className="w-full flex items-center justify-center border p-2 rounded-lg text-black hover:bg-gray-100">
                  <FaApple className="mr-2" /> Continue with Apple
                </button>
                <button className="w-full flex items-center justify-center border p-2 rounded-lg text-gray-700 hover:bg-gray-50">
                  <FaEnvelope className="mr-2" /> Continue with Email
                </button>
              </div>
            </div>
          )}

          {/* Step: Email */}
          {step === "email" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-center text-black">Welcome to Airbnb</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                  placeholder="Email"
                  value={email}
                  onChange={ (e) => setEmail(e.target.value) }
                />
              </div>
              <button
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-lg font-medium"
                onClick={handleEmailContinue}
              >
                Continue
              </button>
            </div>
          )}

          {/* Step: Register */}
          {step === "register" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-center text-black">Create an account</h2>
              <div className="flex justify-center mb-6">
                <h1 className="font-bold text-2xl">Finish Signing up</h1>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                  placeholder="First name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Last name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                  placeholder="Last name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Birthdate</label>
                <input
                  type="date"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="text-xs text-gray-500 mb-4">
                By selecting <strong>Agree and continue</strong>, I agree to Airbnb’s{" "}
                <a href="#" className="text-blue-500">Terms of Service</a>,{" "}
                <a href="#" className="text-blue-500">Payments Terms of Service</a> and{" "}
                <a href="#" className="text-blue-500">Nondiscrimination Policy</a> and acknowledge the{" "}
                <a href="#" className="text-blue-500">Privacy Policy</a>.
              </p>
              <button
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-lg font-medium"
                onClick={handleRegister}
              >
                Agree and continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;