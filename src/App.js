import './App.css';
import Info from './Componet/Info/Info';

function App() {
  return (
    <div className="App">
      <div className='countainer'>
        <div className='sidebar'>left</div>
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
