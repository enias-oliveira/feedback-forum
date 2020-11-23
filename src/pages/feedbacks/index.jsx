import { useState, useEffect } from "react";
import { getFeedbacks } from "./helper.js";
import { useParams, useHistory } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

import Navigation from "../../components/navbar";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const history = useHistory();
  const params = useParams();

  const newFeedback = () => {
    history.push(`/users/feedbacks/${params.id}/new`);
  };

  useEffect(() => getFeedbacks(setFeedbacks, params), [params]);

  return (
    <>
      <Navigation />
      <div>
        <Table variant="dark" size="sm">
          <thead>
            <tr>
              <th key="id">ID</th>
              <th key="Name">Name</th>
              <th key="Comment">Comment</th>
              <th key="Grade">Grade</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks?.map(({ id, name, comment, grade }, idx) => (
              <tr key={idx}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{comment}</td>
                <td>{grade}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={() => newFeedback()}>Publicar um Feedback</Button>
      </div>
    </>
  );
};

export default Feedbacks;
