import React, { useState } from "react";
import { UserLogin, profilePhoto } from "../redux/actions/UsersAction";
import { useDispatch, useSelector } from "react-redux";
import ProfileEditComponent from "../components/ProfileEditComponent";

const Profile = () => {
  const [userProfileEdit, setUserProfileEdit] = useState();
  const [userEditProfileModalOpen, setUserEditProfileModalOpen] =useState(false); 
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.user);

  // dispatch(UserLogin({ email, password }))
  console.log(user, "data is here profile page ");

  const openEditProfileModal = (user) => {
    console.log("lllll");
    console.log(user);
    setUserEditProfileModalOpen(true);
    setUserProfileEdit(user);
  };

  const closeEditProfileModal = () => {
    setUserEditProfileModalOpen(false);
    setUserProfileEdit(null);
  };

  const handleFileChange = (event) => {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    
  };
  const editProfilePhoto = async(req,res)=>{
    
    
    console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    console.log(selectedFile,'ppp')
    console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    dispatch(profilePhoto({selectedFile}))
  }


  return (
    <>
      <div>
        <div className="container mx-auto mt-28">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-4">
              <div className="bg-white rounded-lg shadow-md p-6 text-center border-2 m-2">
              <input type="file" className="" onChange={handleFileChange}/>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="avatar"
                  className="rounded-full w-32 mx-auto mb-4"
                />
                <p className="text-gray-700 mb-1">{user?.userName}</p>
                {/* <p className="text-gray-500 mb-4">
                  Bay Area, San Francisco, CA
                </p> */}
                {/* <div className="flex justify-center space-x-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Follow
                  </button>
                  <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
                    Message
                  </button>
                </div> */}
              </div>
              <button className="border-2 flex justify-center ml-32 p-2 bg-red-600 rounded-md m-2"
              onClick={editProfilePhoto}>
                
                Edit Profile photo
              </button>
            </div>

            <div className="w-full lg:w-2/3 px-4 mb-4">
              <div className="bg-white rounded-lg shadow-md p-4 border-2 m-2">
                <div className="mb-4 ">
                  <div className="flex justify-between ">
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
                    <div className="col-span-1">
                      {/* <p className="text-gray-700">Address</p>
                      <p className="text-gray-500">
                        Bay Area, San Francisco, CA
                      </p> */}
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
