import './App.css';
import Info from './Componet/Info/Info';
import Plan from './Componet/Plan/Plan';

function App() {
  let paths =  [<Info />,<Plan />];  

  function path(){
    for (let index = 0; index < paths.length; index++) {
      return paths[index];
      break;
    }
  }

  function press(e){
    const buttonValue = e.target.value;
    console.log(buttonValue);
  }

  

  return (
    <div className="App">
      <div className='countainer'>
        <div className='sidebar'>
          <div className='steps'>
            <h1 className='bg'>1</h1>
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
              <button>Go Back</button>
              <button onClick={press}>Next Step</button>
            </div>
          </article>
        </div>
      </div>
      
    </div>
  );
}

export default App;
