import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { adminDashboard, userStatus } from '../redux/actions/UsersAction'
import axios, { Axios } from "axios";
import { FaRegEdit } from "react-icons/fa";
import EditUser from "../components/EditUser";
import CreateUser from "../components/CreateUser";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  // const [block,setBlock] = useState('')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModelOpen, setIsCreateModelOpen] = useState(false);

  const [editUser, setEditUser] = useState();
  const [editUserData, setEditUserData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/admin/AdminDashboard");
    setUser(res.data);
  };

  const handleChange = async (e) => {
    const selectedValue = e;

    const res = await axios.post("http://localhost:3000/admin/userStatus", {
      selectedValue,
    });
    fetchData();
  };

  //   const handleEditUser = async (updatedUserData) => {
  //     await axios.post('http://localhost:3000/admin/editUserData', updatedUserData);
  //     setIsEditModalOpen(false);
  //     fetchData(); // Refetch data to update the UI
  // };

  //   const editUserState = (user)=>{
  //       console.log(user);
  //       console.log('edit user');
  //       setEditUserData( user)
  //       }

  const openEditModal = (user) => {
    console.log("lllll");
    setIsEditModalOpen(true);
    setEditUserData(user);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditUserData(null);
  };

  const openCreateModal = () => {
    console.log("lllll");
    setIsCreateModelOpen(true);
    // setEditUserData(user);
  };

  const closeCreateModal = () => {
    setIsCreateModelOpen(false);
    // setEditUserData(null);
  };

  return (
    <>
      <div className="container h-screen mt-24">
        <div className="row w-full">
          <div className="col-md-12 w-full">
            <div className="card">
              <div className="card-body w-full">
                <h5 className="card-title text-uppercase mb-0 flex justify-center font-bold text-4xl mb-6">
                  Manage Users
                </h5>
              </div>
              <div className="table-responsive w-full">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-circle btn-lg btn-circle mr-2 border-2 p-1 border-black"
                  onClick={openCreateModal}
                >
                  Create
                </button>
                <table className="table table-striped hover nowrap user-table mb-0 w-full">
                  <thead className="border-2 ml-96 w-full">
                    <tr>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium pl-4"
                      >
                        SI No
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        User Name
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((user, index) => (
                      <tr className="border-2" key={user._id}>
                        <td className="flex justify-center">{index + 1}</td>
                        <td>
                          <h5 className="flex justify-center font-medium mb-0 px-5">
                            {user.userName}
                          </h5>
                        </td>
                        <td>
                          <span className="text-muted flex justify-center">
                            {user.email}
                          </span>
                          <br />
                        </td>
                        <td className="flex justify-center">
                          <span className="text-muted">{user.date}</span>
                          <br />
                        </td>
                        <td>
                          <select
                            className="form-control category-select w-28 text-gray-700 border rounded border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                            onChange={(e) =>
                              handleChange(user._id, e.target.value)
                            }
                          >
                            <option value="Block">Block</option>
                            <option value="Un Block">Un Block</option>
                          </select>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-info btn-circle btn-lg btn-circle mr-2"
                            onClick={() => openEditModal(user)}
                          >
                            <FaRegEdit className="text-2xl" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <EditUser editUserData={editUserData} closeModal={closeEditModal} />
      )}

      {isCreateModelOpen && <CreateUser closeModal={closeCreateModal} />}
    </>
  );
};
export default AdminDashboard;
