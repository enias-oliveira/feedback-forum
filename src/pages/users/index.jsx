import { useState, useEffect } from "react";
import { getUsers } from "./helper.js";
import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import Navigation from "../../components/navbar";
import { Content } from "./styles.js";
import { UsersPagination } from "../../components/pagination.jsx";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);

  useEffect(() => {
    getUsers(setUsers);
  }, [setUsers]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (PageNumber) => {
    setCurrentPage(PageNumber);
  };

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
              {currentUsers?.map((user, idx) => (
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
          <UsersPagination
            usersPerPage={usersPerPage}
            paginate={paginate}
            totalUsers={users.length}
            currentPage={currentPage}
          />
        </Container>
      </Content>
    </>
  );
};
export default Users;
