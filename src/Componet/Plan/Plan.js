import "./Plan.css"
import arcadeImage from '../../Assets/images/icon-arcade.svg'
import advancedImage from '../../Assets/images/icon-advanced.svg'
import proImage from '../../Assets/images/icon-pro.svg'

export default function Plan({plan}) {


  const handleClick = (e) => {
    e.button.style.backgroundColor = 'blue';
    let value = e.target.value
    plan(value)
    console.log(e);
    e.currentTarget.style.backgroundColor = 'salmon';
  }

  function planSelect(){
    var switchButton = document.getElementById('switch').checked;
    console.log(switchButton);
    const element = document.getElementsByClassName("plan-price");

    if (!switchButton) {
      element[0].innerHTML = '$9/mo';
      element[1].innerHTML = '$12/mo';
      element[2].innerHTML = '$15/mo';
    }else{
      element[0].innerHTML = '$90/yo';
      element[1].innerHTML = '$120/yo';
      element[2].innerHTML = '$150/yo';
    }


 }







  return (
    <div>
        <h1 className="title">Plan</h1>
        <p className="subtext">Please provide your name, email address, and phone number.</p>
        <div className="info">
            <div className="plan">

              <button className="plan-container" onClick={handleClick} value={'arcade'}>
                <img src={arcadeImage} alt='ardace'/>
                <div>
                  <h3>Arcade</h3>
                  <p className='plan-price'>$9/mo</p>
                </div>
              </button>

              <button className="plan-container" onClick={handleClick} value={'advanced'}>
                <img src={advancedImage} alt='advanced'/>
                <div>
                  <h3>Advanced</h3>
                  <p className='plan-price'>$12/mo</p>
                </div>
              </button>

              <button className="plan-container" onClick={handleClick} value={'pro'}>
                <img src={proImage} alt='pro'/>
                <div>
                  <h3>Pro</h3>
                  <p className='plan-price'>$15/mo</p>
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

