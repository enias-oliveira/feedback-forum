import { useState, useEffect } from "react";
import { getFeedbacks } from "./helper.js";
import { useParams, useHistory } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

import Navigation from "../../components/navbar";
import FeedbacksPagination from "./pagination";

import FeedbackPosts from "./feedback-posts";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [feedbacksPerPage] = useState(10);

  const history = useHistory();
  const params = useParams();

  const newFeedback = () => {
    history.push(`/users/feedbacks/${params.id}/new`);
  };

  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks = feedbacks.slice(
    indexOfFirstFeedback,
    indexOfLastFeedback
  );

  const paginate = (PageNumber) => {
    setCurrentPage(PageNumber);
  };

  useEffect(() => getFeedbacks(setFeedbacks, params), [params]);

  return (
    <>
      <Navigation />
      <div>
        <Table variant="dark" striped responsive hover>
          <thead>
            <tr>
              <th key="id">ID</th>
              <th key="Name">Name</th>
              <th key="Comment">Comment</th>
              <th key="Grade">Grade</th>
            </tr>
          </thead>
          <FeedbackPosts feedbacks={currentFeedbacks} />
          <FeedbacksPagination
            paginate={paginate}
            feedbacksPerPage={feedbacksPerPage}
            totalFeedbacks={feedbacks.length}
            currentPage={currentPage}
          />
        </Table>
        <Button onClick={() => newFeedback()}>Publicar um Feedback</Button>
      </div>
    </>
  );
};

export default Feedbacks;
