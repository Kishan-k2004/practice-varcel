import React, { useState, useEffect } from 'react';
import axios from 'axios';

const View = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    viewdata();
  }, []);

  const viewdata = async () => {
    const res = await axios.get('https://user-registration-system-vxdr.onrender.com/users');
    console.log(res);
    setUsers(res.data);
  };

  return (
    <div className="mt-10 bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">Registered Users List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-green-400 text-white">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-green-100 transition">
                <td className="px-4 py-2 border text-center">{user.id}</td>
                <td className="px-4 py-2 border text-center">{user.name}</td>
                <td className="px-4 py-2 border text-center">{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;
