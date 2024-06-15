import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../redux/actions/UsersAction";

const ProfileEditComponent = (userProfileEdit, closeModal) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch()

  console.log("entered the profile edit modal");
  console.log(userProfileEdit.userProfileEdit);
  console.log(userProfileEdit.userProfileEdit.userName, "llll");
   const _id = userProfileEdit.userProfileEdit._id
   
   const handleSubmit = async (e)=>{
     e.preventDefault();
     console.log('haaaaaaaai');
     console.log(_id);

    console.log(_id,userName,email,password,confirmPassword);
    dispatch(updateProfile({_id,userName,email,password,confirmPassword}))
  }
  useEffect(() => {
    if (userProfileEdit) {
      setUserName(userProfileEdit.userProfileEdit.userName);
      setEmail(userProfileEdit.userProfileEdit.email);
    }
  }, [userProfileEdit]);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    <div className="bg-white p-8 rounded-lg z-10 mt-20">
      <h2 className="text-2xl font-bold mb-4">Edit User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">User Name:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border px-4 py-2 mb-4 mr-3"
        />
        <label className="block mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 mb-4 mr-3"
        />
        <label className="block mb-2">Reset Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 mb-4 mr-3"
        />
        <label className="block mb-2">Confirm Password:</label>
        <input
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border px-4 py-2 mb-4 mr-3"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Save
        </button>
        <button
          type="button"
          className="ml-2 px-4 py-2 bg-gray-400 text-white rounded-lg"
          onClick={closeModal}
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
  );
};

export default ProfileEditComponent;
