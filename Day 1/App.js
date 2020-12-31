import React,{useState} from 'react';//useState allow us to use reacthook or state in functional component
import './App.css';
import Person from './Person/person.js';
const App=(props)=>{
  
  const [PersonState,setPersonState]=useState(//this method will return an array which has 2 elements or functions
  {
    person:[
      {name:'Manu',age:'29'},
    {name:'Max',age:'10'}
  ],
  otherSate:'some other state'
  });

  
  
    
  //return React.createElement('div',null,'h1','Hi,I\'m React')


const switchHandler = ()=>{
  setPersonState({
    person:[
      {name:'julie',age:'29'},
      {name:'Max',age:'17'}
    ]
  
  }
  )}

return(
  <div className = "App">
  <h1>Hello there!</h1>
  <button onClick ={switchHandler}>Switch Button</button>
  <Person name={PersonState.person[0].name} age={PersonState.person[0].age} />
  <Person name ={PersonState.person[1].name} age={PersonState.person[1].age} click={PersonState.switchHandler}/> 
  </div>
)
};



export default App;

// state={
//   person:[{name:'Manu',age:'29'},{name:'Max',age:'10'}]

// }
// switchHandler = ()=>{
//   setPersonState({
//     person:[
//       {name:'julie',age:'29'},
//       {name:'Max',age:'17'}
//     ]
//   }
//   );
