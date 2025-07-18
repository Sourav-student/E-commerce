import React, { useState } from 'react'

const LogIn = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signup complete:
    Name: ${name}
    Email: ${email}
    Mobile: ${mobile}`);
  };

  return (
    <div className="w-full h-[100vh] bg-gray-100 absolute top-0 z-50 flex items-center justify-center">
      <div className="w-[90vw] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-xl focus:outline-red-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-xl focus:outline-red-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Mobile no.</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-xl focus:outline-red-500"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#f62302] text-white py-2 px-4 rounded-xl hover:bg-[#e30000]"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn
