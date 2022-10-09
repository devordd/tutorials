import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddTolist from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}
function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Nikola Tesla",
      age: 86,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvo3fyialgxijak18anYEpRWZa0Ka-sWrqvCmiXLf4&s",
      note: "Random note"
    }
  ])

  return (
    < div className="App" >
      <h1>Add people</h1>
      <List people={people} />
      <AddTolist people={people} setPeople={setPeople} />
    </div >
  );
}

export default App;
