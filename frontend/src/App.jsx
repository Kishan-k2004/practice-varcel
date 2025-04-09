import React from 'react';
import Register from './component/Register';
import View from './component/View';
import Delete from './component/Delete';
import Update from './component/Update';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        User Registration System
      </h1>

      {/* Top Row: Register, Update, Delete */}
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center mb-10">
        <Register />
        <Update />
        <Delete />
      </div>

      {/* Bottom Section: View */}
      <div className="max-w-5xl mx-auto">
        <View />
      </div>
    </div>
  );
};

export default App;
