

const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,//this 
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,//this
      },
    ],
  },
];



function uncompletedNotes(notes) {
  const uncompleted = [];

  notes.forEach(note => {
    const uncompletedTodos = note.todos.filter(todo => !todo.done);
    uncompleted.push(uncompletedTodos);
    //ho provato a ricostruire l'oggetto, ma non riesco a vedere i todos
    /*if (uncompletedTodos.length > 0) {
      uncompleted.push({
        id: note.id,
        description: note.description,
        todos: uncompletedTodos
      })
    }*/;

  });
  return uncompleted;
}
console.log(uncompletedNotes(notes));









