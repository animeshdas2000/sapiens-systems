import Form from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import { useMutation } from "@apollo/client";
import { CREATE_LEAD } from "../../pages/assignment/queries";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const schema: RJSFSchema = {
  type: "object",
  properties: {
    Name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    Source: {
      type: "string",
    },
    Status: {
      type: "string",
    },
    Time: {
      type: "string",
    },
    date: {
      type: "string",
    },
    Notes: {
      type: "string",
    },
  },
};

function CreateLead() {
  const [createLead, { data, loading, error }] = useMutation(CREATE_LEAD);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (loading) return <p>Submitting...</p>;
  if (error) return <p>{error.message}</p>;

  if (data) {
    window.location.href = "/assingment";
    return <div>Successfully Submmitted</div>;
  }
  const onSubmit = (e) => {
    const { Name, email, Status, Source, date, Time, Notes } = e.formData;
    createLead({
      variables: { data: { Name, email, Status, Source, date, Time, Notes } },
    });
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Create
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form schema={schema} onSubmit={onSubmit} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CreateLead;
