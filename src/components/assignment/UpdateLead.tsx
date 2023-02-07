import { useMutation } from "@apollo/client";
import Form from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { UPDATE_LEAD } from "../../pages/assignment/queries";
function UpdateLead({ id }) {
  console.log(id);
  const [show, setShow] = useState(false);

  const [updateLead, { error, loading }] = useMutation(UPDATE_LEAD);
  const schema: RJSFSchema = {
    type: "object",
    properties: {
      Name: {
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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = (e) => {
    console.log(e.formData);
    const { Name, date, Source, Status, Time, Notes } = e.formData;
    updateLead({
      variables: {
        id,
        data: {
          Name,
          date,
          Source,
          Status,
          Time,
          Notes,
        },
      },
    });
    window.location.reload();
  };

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form schema={schema} onSubmit={onSubmit} />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UpdateLead;
