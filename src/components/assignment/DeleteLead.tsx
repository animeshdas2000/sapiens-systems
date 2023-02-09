import { useMutation } from "@apollo/client";
import { DELETE_LEAD } from "../../pages/assignment/queries";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
function DeleteLead({ id }) {
  const [deleteLead, { error }] = useMutation(DELETE_LEAD);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (error) {
    console.log(error);
  }
  return (
    <>
      <span onClick={handleShow}>Delete</span>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this lead?</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              deleteLead({
                variables: {
                  id,
                },
              });
              window.location.reload();
            }}>
            Delete
          </Button>
          <Button>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteLead;
