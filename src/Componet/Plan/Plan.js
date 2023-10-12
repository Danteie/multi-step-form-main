import "./Plan.css"
import arcadeImage from '../../Assets/images/icon-arcade.svg'
import advancedImage from '../../Assets/images/icon-advanced.svg'
import proImage from '../../Assets/images/icon-pro.svg'

export default function Plan({plan}) {

//handle Click for selecting plan
  const handleClick = (e) => {
   document.getElementsByClassName('plan-container')[0].style.backgroundColor = 'blue';
   document.getElementsByClassName('plan-container')[1].style.backgroundColor = 'blue';
   document.getElementsByClassName('plan-container')[2].style.backgroundColor = 'blue';

    let value = e.target.value
    plan(value)
    e.currentTarget.style.backgroundColor = 'salmon';
  }


  //Mont to Year price switch
  function planSelect(){
    var switchButton = document.getElementById('switch').checked;
    const element = document.getElementsByClassName("plan-price");
    const free = document.getElementsByClassName("free")

    if (!switchButton) {
      element[0].innerHTML = '$9/mo';
      element[1].innerHTML = '$12/mo';
      element[2].innerHTML = '$15/mo';
      free[0].style.opacity = '0';
      free[1].style.opacity = '0';
      free[2].style.opacity = '0';
      

    }else{
      element[0].innerHTML = '$90/yo';
      element[1].innerHTML = '$120/yo';
      element[2].innerHTML = '$150/yo';

      free[0].style.opacity = '1'
      free[1].style.opacity = '1'
      free[2].style.opacity = '1'
      
    }
 }


  return (
    <div>
        <h1 className="title">Plan</h1>
        <p className="subtext">Please provide your name, email address, and phone number.</p>
        <div className="info">
            <div className="plan">
              <button className="plan-container" onClick={handleClick} value={'Arcade'}>
                <img src={arcadeImage} alt='ardace'/>
                <div>
                  <h3>Arcade</h3>
                  <p className='plan-price'>$9/mo</p>
                  <p className='free'>free</p>
                </div>
              </button>

              <button className="plan-container" onClick={handleClick} value={'Advanced'}>
                <img src={advancedImage} alt='advanced'/>
                <div>
                  <h3>Advanced</h3>
                  <p className='plan-price'>$12/mo</p>
                  <p className='free'>free</p>
                </div>
              </button>

              <button className="plan-container" onClick={handleClick} value={'Pro'}>
                <img src={proImage} alt='pro'/>
                <div>
                  <h3>Pro</h3>
                  <p className='plan-price'>$15/mo</p>
                  <p className='free'>free</p>
                </div>
              </button>

            </div>
            <div className="plantime">
              <div>Montly</div>
              <label className="switch">
                <input type="checkbox"  id='switch' onChange={planSelect}/>
                <span className="slider round"></span>
              </label>
              <div>Yearly</div>
            </div>
        </div>
    </div>
  );
}

