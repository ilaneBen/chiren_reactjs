import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 
const DeleteConfirmation = ({ showModal, hideModal, onConfirm, id, message }) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer ?</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={hideModal}>
            Annuler
          </Button>
          <Button variant="danger" onClick={() => onConfirm( id) }>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
 
export default DeleteConfirmation;