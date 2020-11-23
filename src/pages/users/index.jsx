import { useState, useEffect } from "react";
import { getUsers } from "./helper.js";
import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import Navigation from "../../components/navbar";
import { Content } from "./styles.js";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, [setUsers]);

  return (
    <>
      <Navigation />
      <Content>
        <Container>
          <Table variant="dark" size="sm" hover responsive>
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
                  <td style={{ width: "30%" }}>{user.name}</td>
                  <td style={{ width: "30%" }}>{user.user}</td>
                  <td style={{ width: "30%" }}>{user.email}</td>
                  <td style={{ width: "10%" }}>
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
        </Container>
      </Content>
    </>
  );
};
export default Users;
