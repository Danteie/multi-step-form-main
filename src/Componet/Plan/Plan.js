import "./Plan.css"

export default function Plan() {
  return (
    <div>
        <h1 className="title">Plan</h1>
        <p className="subtext">Please provide your name, email address, and phone number.</p>
        <div className="info">
            <div className="plan">
              <div>Arcade</div>
              <div>Advanced</div>
              <div>Pro</div>
            </div>
            <div className="plantime">
              <div>Montly</div>
              <div><input type="checkbox"/></div>
              <div>Yearly</div>
            </div>
        </div>
    </div>
  );
}

