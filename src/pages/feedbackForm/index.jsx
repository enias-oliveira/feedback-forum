import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import postNewFeedback from "./helper.js";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Navigation from "../../components/navbar";
import { Content } from "./styles";

const FeedbackForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    register("name", { required: "Please, enter your name" });
    register("comment", { required: "Please, enter your comment" });
    register("grade", { required: "Please, enter your grade" });
  }, [register]);

  const handleForm = (data) => {
    postNewFeedback(data, params, history);
  };

  return (
    <>
      <Navigation />
      <Content>
        <Container>
          <h1>Post your feedback</h1>
          <Form onSubmit={handleSubmit(handleForm)}>
            <Form.Group>
              <Form.Control name="name" ref={register} placeholder="Name" />
              <p style={{ color: "red" }}>{errors.name?.message}</p>
              <br />
              <Form.Control
                name="comment"
                ref={register}
                placeholder="Comment"
              />
              <p style={{ color: "red" }}>{errors.comment?.message}</p>
              <br />
              <Form.Control
                name="grade"
                ref={register}
                placeholder="Grade"
                type="number"
              />
              <p style={{ color: "red" }}>{errors.grade?.message}</p>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </Content>
    </>
  );
};

export default FeedbackForm;
