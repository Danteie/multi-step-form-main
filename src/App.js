import { useEffect, useState } from 'react';
import './App.css';
import Info from './Componet/Info/Info';
import Plan from './Componet/Plan/Plan';
import Add from './Componet/Add/Add';
import Summary from './Componet/Summary/Summary';

function App() {

//Routing  
  let paths =  [<Info />,<Plan plan={plan}/>,<Add/>,<Summary/>];  
  const [index, setIndex] = useState(0);

  function nextStep(e){
    if(index >= 3) return
    setIndex(index + 1)
  }

  function goBack(e){
    if(index == 0) return
    setIndex(index - 1)
  }

  function path(){
    // Go Back button
    if (index >= 1) document.getElementById('back').style.opacity = 1;
    //render commpoennt
    return paths[index]
  }

  function stepCheck(){
    let steps = document.querySelectorAll('.steps h1');
    for (let i = 0; i < steps.length; i++) {
      steps[i].style.background = 'transparent';
    } 
    steps[index].style.background = 'red';
  }

//Payment Selected


function plan(p){
  let plan = p; // registrovan plan
  console.log(p);
}



function selectPlan(plan){
  console.log(plan);
}



  useEffect(()=>{
    stepCheck();
    if (index === 0) document.getElementById('back').style.opacity = 0;
  });

  
  return (
    <div className="App">
      <div className='countainer'>
        <div className='sidebar'>
          <div className='steps'>
            <h1>1</h1>
            <div>
                <p>STEP 1</p>
                <p>YOUR INFO</p>
            </div>
          </div>
          <div className='steps'>
            <h1>2</h1>
            <div>
                <p>STEP 2</p>
                <p>SELECT PLAN</p>
            </div>
          </div>
          <div className='steps'>
            <h1>3</h1>
            <div>
                <p>STEP 3</p>
                <p>ADD-ONS</p>
            </div>
          </div>
          <div className='steps'>
            <h1>4</h1>
            <div>
                <p>STEP 4</p>
                <p>SUMMARY</p>
            </div>
          </div>

        </div>
        <div className='content'>
          <article>
            <div>
              {path()}
            </div> 
            <div className='navigation'>
              <button id='back' onClick={goBack}>Go Back</button>
              <button onClick={nextStep}>Next Step</button>
            </div>
          </article>
        </div>
      </div>
      
    </div>
  );
}

export default App;
