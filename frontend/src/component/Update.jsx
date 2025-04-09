import React from 'react';
import axios from 'axios';

const Update = () => {
  const handleupdate = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const name = e.target.name.value;
    const age = e.target.age.value;
    const data = { name, age };
    await axios.put(`https://user-registration-system-vxdr.onrender.com/users/${id}`, data);
    alert("Success");
  };

  return (
    <div className="mt-10 bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold text-center text-blue-700 mb-6">Update User</h1>
      <form onSubmit={handleupdate} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">ID:</label>
          <input
            type="text"
            name="id"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter user ID"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Age:</label>
          <input
            type="text"
            name="age"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter age"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
