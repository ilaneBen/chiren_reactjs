import React, { useState } from 'react';
import '../App.css'; 
import DeleteConfirmation from './modal/modalConfirmDelete';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'; // Importer IconButton
import 'bootstrap/dist/css/bootstrap.min.css'; // Assure-toi d'importer les styles Bootstrap


const sampleGoalsData = [
    { id: 1, goal: "Faire les courses" },
    { id: 2, goal: "Aller à la salle de sport 3 fois par semaine" },
    { id: 3, goal: "Monter à plus de 5000m d'altitude" },
    { id: 4, goal: "Acheter mon premier appartement" },
    { id: 5, goal: "Perdre 5 kgs" },
    { id: 6, goal: "Gagner en productivité" },
    { id: 7, goal: "Apprendre un nouveau langage" },
    { id: 8, goal: "Faire une mission en freelance" },
    { id: 9, goal: "Organiser un meetup autour de la tech" },
    { id: 10, goal: "Faire un triathlon" }
];

const TodoList = () => {
  // Utilisation du hook d'état pour gérer les objectifs
  const [sampleGoals, setSampleGoals] = useState(sampleGoalsData);
  const [goal, setGoal] = useState('');
  
  // Gestion de la modal
  const [showModal, setShowModal] = useState(false);
  const [goalToDelete, setGoalToDelete] = useState(null);

  // Ouvrir la modal et stocker l'objectif à supprimer
  const openDeleteModal = (id) => {
    setGoalToDelete(id);
    setShowModal(true);
  };

  // Fermer la modal
  const closeModal = () => {
    setShowModal(false);
    setGoalToDelete(null);
  };

  // Fonction pour confirmer et supprimer un objectif
  const handleConfirmDelete = () => {
    setSampleGoals(sampleGoals.filter(goal => goal.id !== goalToDelete));
    closeModal(); // Fermer la modal après la suppression
  };

  // Fonction pour gérer l'entrée utilisateur
  const handleChange = (event) => {
    setGoal(event.target.value);
  };

  // Fonction pour ajouter un nouvel objectif
  const handleAdd = () => {
    if (goal.trim() !== '') {
      const newGoal = {
        id: sampleGoals.length + 1,
        goal: goal
      };
      setSampleGoals([...sampleGoals, newGoal]);
      setGoal(''); // Réinitialise l'input
    }
  };

  return (
    <>
      <h2>Ajouter à la liste</h2>
      <div className='list'>
        <input type="text" value={goal} onChange={handleChange} />
        <button type="button" className='btn btn-primary mt-3 mb-3' onClick={handleAdd}>
          Ajouter
        </button>

        <ul>
          {sampleGoals.map((goal) => (
            <li key={goal.id}>
              {goal.goal}{' '}
              {/* Utiliser IconButton pour rendre l'icône cliquable */}
              <IconButton onClick={() => openDeleteModal(goal.id)}>
                <DeleteIcon /> {/* Icône de suppression */}
              </IconButton>
            </li>
          ))}
        </ul>

        {/* Modal de confirmation */}
        <DeleteConfirmation
          showModal={showModal}
          hideModal={closeModal}
          onConfirm={handleConfirmDelete}
          id={goalToDelete} // ID de l'élément à supprimer
          message="Êtes-vous sûr de vouloir supprimer cet objectif ?"
        />
      </div>
    </>
  );
};

export default TodoList;
