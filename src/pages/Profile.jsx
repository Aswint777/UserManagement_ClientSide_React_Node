import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, profilePhoto, UserLogin } from "../redux/actions/UsersAction";
import ProfileEditComponent from "../components/ProfileEditComponent";

const Profile = () => {
  const [userProfileEdit, setUserProfileEdit] = useState(null);
  const [userEditProfileModalOpen, setUserEditProfileModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.user);
  useEffect(()=> {
    console.log("inside useEffect");
    dispatch(getUser())
  },[userEditProfileModalOpen,selectedFile])
  


  const openEditProfileModal = (user) => {
    setUserEditProfileModalOpen(true);
    setUserProfileEdit(user);
  };

  const closeEditProfileModal = () => {
    setUserEditProfileModalOpen(false);
    setUserProfileEdit(null);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const editProfilePhoto = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("profilePhoto", selectedFile);
      formData.append("_id", user._id); // Assuming user object contains _id
      dispatch(profilePhoto(formData));
      dispatch(getUser())
    }
  };

  return (
    <>
      <div>
        <div className="container mx-auto mt-28">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-4">
              <div className="bg-white rounded-lg shadow-md p-6 text-center border-2 m-2">
                <input type="file" onChange={handleFileChange} />
                <img
                  src={user?.profilePhoto ? `http://localhost:3000/${user.profilePhoto}` : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                  alt="avatar"
                  className="rounded-full w-36 h-36 mx-auto mb-4"
                />
                <p className="text-gray-700 mb-1">{user?.userName}</p>
              </div>
              <button
                className="border-2 flex justify-center ml-32 p-2 bg-red-600 rounded-md m-2"
                onClick={editProfilePhoto}
              >
                Edit Profile Photo
              </button>
            </div>

            <div className="w-full lg:w-2/3 px-4 mb-4">
              <div className="bg-white rounded-lg shadow-md p-4 border-2 m-2">
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold mb-2">
                      Profile Information
                    </h3>
                    <button
                      className="border-2 border-gray-600 rounded-md p-2"
                      onClick={() => openEditProfileModal(user)}
                    >
                      Edit Profile
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1">
                      <p className="text-gray-700">Full Name</p>
                      <p className="text-gray-500">{user?.userName}</p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-gray-700">Email</p>
                      <p className="text-gray-500">{user?.email}</p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-gray-700">Phone</p>
                      <p className="text-gray-500">1234567890</p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-gray-700">Profile Created</p>
                      <p className="text-gray-500">{user?.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {userEditProfileModalOpen && (
        <ProfileEditComponent
          userProfileEdit={userProfileEdit}
          closeModal={closeEditProfileModal}
        />
      )}
    </>
  );
};

export default Profile;
