import React, { useState } from 'react';
import '../App.css'; // Assurez-vous de créer un fichier CSS pour Home
import DeleteIcon from '@mui/icons-material/Delete';


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
  

    function handleChange(event) {
        setGoal(event.target.value);
      }
    
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

    // Fonction pour supprimer un objectif par ID
    const handleDelete = (id) => {
      setSampleGoals(sampleGoals.filter(goal => goal.id !== id));
    };
  
    return (

        <>
        <h2>Ajouter à la liste</h2>
        <div className='list'><input type="text" onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
            Ajouter
        </button>
        <ul>
                {sampleGoals.map((goal) => (
                    <li key={goal.id}>
                        {goal.goal}{' '}
                        <DeleteIcon onClick={() => handleDelete(goal.id)}>
                            Supprimer
                        </DeleteIcon>
                    </li>
                ))}
            </ul></div></>
    );  
};


export default TodoList;
