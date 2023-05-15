import './Add.css'

export default function ADD() {
  return (
    <div>
        <h1 className="title">Pick add-ons</h1>
        <p className="subtext">Add-ons help enhance your gaming experience</p>
        <div className="info add">
            <div className="adon-card">
                <input type="radio"/>
                <div>
                  <h2>Online</h2>
                  <p>Access</p>
                </div>
                <h2>1</h2>
            </div>
            <div className="adon-card">
                <input type="radio"/>
                <div>
                  <h2>Online</h2>
                  <p>Access</p>
                </div>
                <h2>+$1/mo</h2>
            </div>
            <div className="adon-card">
                <input type="radio"/>
                <div>
                  <h2>Online</h2>
                  <p>Access</p>
                </div>
                <h2>+$1/mo</h2>
            </div>
        </div>
    </div>
  );
}

