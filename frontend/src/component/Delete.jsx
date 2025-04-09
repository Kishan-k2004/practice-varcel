import React from 'react';
import axios from 'axios';

const Delete = () => {
  const handleDelete = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    await axios.delete(`http://localhost:9000/users/${id}`);
    alert('User deleted successfully');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-semibold text-center text-red-600 mb-6">Delete User</h1>
      <form onSubmit={handleDelete} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">User ID:</label>
          <input
            type="text"
            name="id"
            placeholder="Enter User ID"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default Delete;
