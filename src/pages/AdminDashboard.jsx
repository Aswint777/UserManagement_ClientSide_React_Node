import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import EditUser from "../components/EditUser";
import CreateUser from "../components/CreateUser";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModelOpen, setIsCreateModelOpen] = useState(false);
  const [editUserData, setEditUserData] = useState(null);
  const [changeStatus,setChangeStatus] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/admin/AdminDashboard");
      setUsers(res.data);
      setFilteredUsers(res.data);
    };
    fetchData();
    
  }, [isCreateModelOpen,editUserData,changeStatus]);

  const handleClickStatus = async(userId)=>{
    const isConfirmed = confirm('Are you sure?');
    if(isConfirmed == true){
      setChangeStatus(userId)
      console.log(changeStatus,'ooops');
      handleChange(userId)

    }
  }


  const handleChange = async (userId) => {
    try {
      const res = await axios.post("http://localhost:3000/admin/userStatus", { userId });
      if (res.data.success) {
        const updatedUsers = users.map(user =>
          user._id === userId ? { ...user, status: res.data.status } : user
        );
        setUsers(updatedUsers);  // Update users state with new status
        setFilteredUsers(updatedUsers);  // Update filteredUsers state as well
        
      }
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  const openEditModal = (user) => {
    setIsEditModalOpen(true);
    setEditUserData(user);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditUserData(null);
  };

  const openCreateModal = () => {
    setIsCreateModelOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModelOpen(false);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query === "") {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((u) =>
        u.userName.toLowerCase().includes(query)
      );
      setFilteredUsers(filtered);
    }
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
                <input
                  type="text"
                  placeholder="Search by username"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="form-control mb-3 w-1/3 mx-auto flex justify-center p-2 border-2 rounded-lg border-green-500"
                />
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
                    {filteredUsers.map((user, index) => (
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
                          {user.status ? (
                            <button
                              className="btn btn-outline-danger p-2 border-2 bg-red-500 justify-center flex rounded-lg"
                              onClick={() => handleClickStatus(user._id)}
                            >
                              Block
                            </button>
                          ) : (
                            <button
                              className="btn btn-outline-success p-2 border-2 bg-green-500 justify-center flex rounded-lg"
                              onClick={() => handleClickStatus(user._id)}
                            >
                              Unblock
                            </button>
                          )}
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
