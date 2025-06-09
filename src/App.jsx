import React, { useState } from "react";
import UserCard from "./components/userCard";

const App = () => {
  return (
    <div className="mx-auto max-w-4xl p-4 mt-10">
      <h1 className="bg-blue-500 text-3xl text-center uppercase p-4 rounded-xl font-bold mb-10 text-white">
        Github Finder
      </h1>
      {/* Importing and using the Header component */}

      <UserCard />
    </div>
  );
};

export default App;
