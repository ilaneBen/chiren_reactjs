// UpdateGoalModal.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UpdateGoalModal = ({ showModal, hideModal, onConfirm, updatedGoal, setUpdatedGoal }) => {
  return (
    <Modal show={showModal} onHide={hideModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Mettre à jour l'objectif</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Modifier l'objectif</Form.Label>
          <Form.Control
            type="text"
            value={updatedGoal || ''}  // Assurez-vous que la valeur n'est pas undefined
            onChange={(e) => setUpdatedGoal(e.target.value)}  // Mettre à jour la valeur
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Annuler
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Sauvegarder les modifications
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateGoalModal;
