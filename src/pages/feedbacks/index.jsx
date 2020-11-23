import { useState, useEffect } from "react";
import { getFeedbacks } from "./helper.js";
import { useParams, useHistory } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Content } from "../users/styles.js";
import Navigation from "../../components/navbar";
import { FeedbacksPagination } from "../../components/pagination";

import FeedbackPosts from "./feedback-posts";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [feedbacksPerPage] = useState(8);

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
      <Container>
        <Content>
          <Table variant="dark" responsive hover>
            <thead>
              <tr>
                <th key="id">ID</th>
                <th key="Name">Name</th>
                <th key="Comment">Comment</th>
                <th key="Grade">Grade</th>
              </tr>
            </thead>
            <FeedbackPosts feedbacks={currentFeedbacks} />
          </Table>
        </Content>
        <FeedbacksPagination
          paginate={paginate}
          feedbacksPerPage={feedbacksPerPage}
          totalFeedbacks={feedbacks.length}
          currentPage={currentPage}
        />
        <Button className="mt-3" onClick={() => newFeedback()}>
          Publicar um Feedback
        </Button>
      </Container>
    </>
  );
};

export default Feedbacks;
