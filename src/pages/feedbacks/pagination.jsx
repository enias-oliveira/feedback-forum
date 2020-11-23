import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";

const FeedbackPagination = ({
  feedbacksPerPage,
  totalFeedbacks,
  currentPage,
  paginate,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalFeedbacks / feedbacksPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <Pagination>
        {pageNumber.map((number) => (
          <PageItem
            onClick={() => paginate(number)}
            key={number}
            active={number === currentPage}
          >
            {number}
          </PageItem>
        ))}
      </Pagination>
    </nav>
  );
};

export default FeedbackPagination;
