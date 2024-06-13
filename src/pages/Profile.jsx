import React from "react";
import { UserLogin } from "../redux/actions/UsersAction";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.user);

  // dispatch(UserLogin({ email, password }))
  console.log(user, "data is here profile page ");

  return (
    <>
      <div>
        <div className="container mx-auto mt-28">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
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
            </div>

            <div className="w-full lg:w-2/3 px-4 mb-4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Profile Information
                  </h3>
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
    </>
  );
};

export default Profile;
