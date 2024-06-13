import axios from "axios";
import React, { useState } from "react";

const CreateUser = ({ closeModal }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateUser = async (e) => {
    e.preventDefault();

    try {
      console.log(userName, email, password);
      const res = await axios.post("http://localhost:3000/admin/createUser", {
        userName,
        email,
        password,
      });
      console.log(res.data);
      closeModal();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        <div className="bg-white p-8 rounded-lg z-10">
          <h2 className="text-2xl font-bold mb-4">Create new User </h2>
          <label className="block mb-2">User Name:</label>
          <input
            type="text"
            // value={editValue}
            onChange={(e) => setUserName(e.target.value)}
            className="border px-4 py-2 mb-4 mr-3"
          />
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            // value={editValue}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-4 py-2 mb-4 mr-3"
          />
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            // value={editValue}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-4 py-2 mb-4 mr-3"
          />
          <button
            onClick={handleCreateUser}
            // onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Save
          </button>
          <button
            className="ml-2 px-4 py-2 bg-gray-400 text-white rounded-lg"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
