import React, { useState } from "react";

import Form from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import { useMutation } from "@apollo/client";
import { UPDATE_LEAD } from "../../pages/assignment/queries";
import { Button, Modal } from "react-bootstrap";
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

function UpdateLead({ id }) {
  const [updateLead, { data, loading, error }] = useMutation(UPDATE_LEAD);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (loading) return <p>Submitting...</p>;
  if (error) return <p>{error.message}</p>;

  if (data) return <div>Successfully Submmitted</div>;
  const onSubmit = (e) => {
    const { Name, email, Status, Source, date, Time, Notes } = e.formData;
    updateLead({
      variables: {
        id,
        data: { Name, email, Status, Source, date, Time, Notes },
      },
    });
  };
  return (
    <div>
      {" "}
      <span onClick={handleShow}>Create</span>
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

export default UpdateLead;
