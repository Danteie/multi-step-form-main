import './App.css';
import Info from './Componet/Info/Info';

function App() {
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
                <p>STEP 1</p>
                <p>YOUR INFO</p>
            </div>
          </div>
          <div className='steps'>
            <h1>3</h1>
            <div>
                <p>STEP 1</p>
                <p>YOUR INFO</p>
            </div>
          </div>
          <div className='steps'>
            <h1>4</h1>
            <div>
                <p>STEP 1</p>
                <p>YOUR INFO</p>
            </div>
          </div>

        </div>
        <div className='content'>
          <article>
            <div>
              <Info />
            </div> 
            <div className='navigation'>
              <button>Go Back</button>
              <button>Next Step</button>
            </div>
          </article>
        </div>
      </div>
      
    </div>
  );
}

export default App;
