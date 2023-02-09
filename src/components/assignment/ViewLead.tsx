import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { VIEW_LEAD } from "../../pages/assignment/queries";

function ViewLead({ id }) {
  const [show, setShow] = useState(false);
  const { data, loading, error } = useQuery(VIEW_LEAD, {
    variables: { id },
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>Error:{error.message}</p>;
  }

  console.log(data);
  return (
    <>
      <span onClick={handleShow}>View</span>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Name:{data.lead.data.attributes.Name}</p>
          <p>Source:{data.lead.data.attributes.Source}</p>
          <p>Status:{data.lead.data.attributes.Status}</p>
          <p>Time:{data.lead.data.attributes.Time}</p>
          <p>Email:{data.lead.data.attributes.email}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewLead;
