import { useState, useEffect } from "react";
import { getUsers } from "./helper.js";
import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";
import styled from "styled-components";

import Navigation from "../../components/navbar";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, [setUsers]);

  return (
    <>
      <Navigation />
      <div>
        <Table variant="dark" size="sm">
          <thead>
            <tr>
              <th key="Name">Name</th>
              <th key="User">User</th>
              <th key="Email"> Email</th>
              <th key="Feedback">Feedbacks</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => (
              <tr key={idx}>
                <td>{user.name}</td>
                <td>{user.user}</td>
                <td>{user.email}</td>
                <td>
                  {
                    <Link to={{ pathname: `/users/feedbacks/${user.id}` }}>
                      Go To Feedbacks
                    </Link>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default Users;
