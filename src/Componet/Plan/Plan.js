import "./Plan.css"
import arcadeImage from '../../Assets/images/icon-arcade.svg'
import advancedImage from '../../Assets/images/icon-advanced.svg'
import proImage from '../../Assets/images/icon-pro.svg'

export default function Plan() {
  return (
    <div>
        <h1 className="title">Plan</h1>
        <p className="subtext">Please provide your name, email address, and phone number.</p>
        <div className="info">
            <div className="plan">

              <div className="plan-container">
                <img src={arcadeImage} alt='ardace'/>
                <div>
                  <h3>Arcade</h3>
                  <p>$9/mo</p>
                </div>
              </div>

              <div className="plan-container">
                <img src={advancedImage} alt='advanced'/>
                <div>
                  <h3>Advanced</h3>
                  <p>$9/mo</p>
                </div>
              </div>

              <div className="plan-container">
                <img src={proImage} alt='pro'/>
                <div>
                  <h3>Pro</h3>
                  <p>$9/mo</p>
                </div>
              </div>

            </div>
            <div className="plantime">
              <div>Montly</div>
              <label className="switch">
                <input type="checkbox"  />
                <span className="slider round"></span>
              </label>
              <div>Yearly</div>
            </div>
        </div>
    </div>
  );
}

