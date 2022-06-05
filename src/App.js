import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import  SearchBox  from './components/search-box/search-box.component.jsx';
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters :[],
      searchField : ''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(responce => responce.json())
  .then(user => {
    this.setState(
      ()=>
      {
        return{monsters : user}
      }
    )
  })
}


onSearchChange = (event) => {
  const searchField = event.target.value.toLocaleLowerCase();
  
  this.setState(() =>{ 
    return {searchField}
  })
  
}

  render()
  {
    const { monsters , searchField } = this.state ;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(searchField)
      
    })
  
    return (
      <div className='App'>
          <h1 className='title'>monster Gallary</h1>
          <SearchBox 
          className = 'monsters-search-box'
          placeholder = 'search here'
          onChangeHandler = { onSearchChange }/>
         <CardList monsters={ filteredMonsters }/>
      </div>
    );
    }
}

export default App;
