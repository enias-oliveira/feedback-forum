const FeedbackPosts = ({ feedbacks }) => {
  return (
    <tbody>
      {feedbacks.map(({ id, name, comment, grade }, idx) => (
        <tr key={idx}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{comment}</td>
          <td>{grade}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default FeedbackPosts;
