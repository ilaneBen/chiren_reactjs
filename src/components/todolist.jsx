import React from 'react';

const sampleGoals =["Faire les courses","Aller à la salle de sport 3 fois par semaine","Monter à plus de 5000m d'altitude","Acheter mon premier appartement",
"Perdre 5 kgs","Gagner en productivité","Apprendre un nouveau langage", "Faire une mission en freelance", "Organiser un meetup autour de la tech",
"Faire un triathlon" ];

const Tab = sampleGoals.map(goals => <li>{goals}</li>);

const TodoList = () => {
    return <ul>{Tab}</ul>;

};


export default TodoList;
