import axios from "axios";
import React, { useState } from "react";

const EditUser = ({ editUserData, closeModal }) => {
  const [editValue, setEditValue] = useState(editUserData.userName);

  const handleEditUser = async (e) => {
    e.preventDefault();

    const selectedValue = editValue;
    try {
      const res = await axios.post("http://localhost:3000/admin/editUserData", {
        selectedValue,
        email: editUserData.email,
      });
      console.log(res.data);
      closeModal();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const updatedUserData = { ...editUserData, userName: editValue };
  //     handleEditUser(updatedUserData);
  // };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="bg-white p-8 rounded-lg z-10">
        <h2 className="text-2xl font-bold mb-4">Edit User Name</h2>
        <label className="block mb-2">New Name:</label>
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="border px-4 py-2 mb-4 mr-3"
        />
        <button
          onClick={handleEditUser}
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
  );
};

export default EditUser;
