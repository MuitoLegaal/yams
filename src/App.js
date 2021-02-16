import React, {useState} from 'react';
import {Button, Table} from 'reactstrap'
import './App.css';
import Dice from './components/Dice'

function App() {

  var tabDiceOrigin = [
    {id:1,value:'',selected:true},
    {id:2,value:'',selected:true},
    {id:3,value:'',selected:true},
    {id:4,value:'',selected:true},
    {id:5,value:'',selected:true},
  ]

  const [tabValue, setTabValue] = useState(tabDiceOrigin)
  const [compt, setCompt] = useState(0)

  var updateDice = () => {
    var diceTab = [...tabValue]

    for(var i=0;i<diceTab.length;i++){
      if(diceTab[i].selected == true){
        diceTab[i].value = Math.floor(Math.random() * Math.floor(6) + 1);
        diceTab[i].selected = false

      }
    }

    setTabValue(diceTab)
    setCompt(compt+1)
  }




  var updateSelectedDice = (indice,selected) => {
    var diceTab = [...tabValue]
    diceTab[indice].selected = selected
    setTabValue(diceTab)
  }


  var totalDice = 0;
  var tabDice = []
  var bravo = true

  for(var i=0;i<tabValue.length;i++){
    if(tabValue[i].value!= ''){
      tabDice.push(<Dice key={i}  indice={i} selected={tabValue[i].selected} updateSelectedDice={updateSelectedDice} val={tabValue[i].value} />)
      totalDice += tabValue[i].value
    }
    if(tabValue[i].value != 6){
      bravo = false
    }
  }

  var congrat
  if(bravo){
    congrat = <p>Bravo !!!</p>
  }

  return (
    <div className="App">
      <div>
        <Button onClick={()=>{updateDice()}} color="secondary">Lancer les dés</Button>
        <p>Total des dés : {totalDice}</p>
        <p>Nombre de lancers : {compt}</p>
        <div style={{display:'flex',justifyContent:'center'}}>{tabDice}</div>
        {congrat}
      </div>
      
    </div>
  );
}

export default App;
