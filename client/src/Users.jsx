import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { deleteUser } from "./redux/UserSlice";
const app_url = import.meta.env.VITE_API_URL;

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    axios
      .delete(`${app_url}/deleteuser/${id}`)

      .then((res) => {
        dispatch(deleteUser({ id }));
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-4">
      <Link to="/create" className="btn btn-success">
        Add +
      </Link>

      <div className="d-flex justify-content-center mt-4   ">
        {" "}
        {/* Center the table */}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-danger mx-2 "
                  >
                    Delete
                  </button>
                  <Link to={`/edit/${user.id}`} className="btn btn-warning">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
