import React from 'react';

const todoList = [
  {
    uniqueIdentifier:1,
    title: "The Bad Guys in Attack of the Zittens",
  },
  {
    uniqueIdentifier:2,
    title: "Knuffle Bunny : a cautionary tale",
  },
  {
    uniqueIdentifier:3,
    title: "Far from home",
  },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>{todoList.map((item) => <li key={item.uniqueIdentifier}>{item.title}</li>)}</ul>
    </div>

    // <div style={{ textAlign: 'center' }}>
    //   <header>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;