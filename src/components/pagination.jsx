import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";

export const FeedbacksPagination = ({
  feedbacksPerPage,
  totalFeedbacks,
  currentPage,
  paginate,
}) => {
  const pageNumber = [];
  const lastPage = Math.ceil(totalFeedbacks / feedbacksPerPage);

  if (lastPage < 5) {
    for (let i = 1; i <= lastPage; i++) {
      pageNumber.push(i);
    }
  } else {
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      if (i > 0) {
        pageNumber.push(i);
      }
    }
  }

  return (
    <nav>
      <Pagination>
        <Pagination.First onClick={() => paginate(1)} />
        {pageNumber.map((number) => (
          <PageItem
            onClick={() => paginate(number)}
            key={number}
            active={number === currentPage}
          >
            {number}
          </PageItem>
        ))}
        <Pagination.Last onClick={() => paginate(lastPage)} />
      </Pagination>
    </nav>
  );
};

export const UsersPagination = ({
  usersPerPage,
  totalUsers,
  currentPage,
  paginate,
}) => {
  const pageNumber = [];
  const lastPage = Math.ceil(totalUsers / usersPerPage);

  if (lastPage < 5) {
    for (let i = 1; i <= lastPage; i++) {
      pageNumber.push(i);
    }
  } else {
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      if (i > 0) {
        pageNumber.push(i);
      }
    }
  }

  return (
    <nav>
      <Pagination>
        <Pagination.First onClick={() => paginate(1)} />
        {pageNumber.map((number) => (
          <PageItem
            onClick={() => paginate(number)}
            key={number}
            active={number === currentPage}
          >
            {number}
          </PageItem>
        ))}
        <Pagination.Last onClick={() => paginate(lastPage)} />
      </Pagination>
    </nav>
  );
};
