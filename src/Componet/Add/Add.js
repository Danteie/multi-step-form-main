import './Add.css'

export default function ADD({extra}) {

 
function check(){
  const checked = document.getElementsByClassName('extra-pick')

  for (let index = 0; index < checked.length; index++) {
    if (checked[index].checked) {
      console.log(checked[index].value);
    }
  }
}

  return (
    <div>
        <h1 className="title">Pick add-ons</h1>
        <p className="subtext">Add-ons help enhance your gaming experience</p>
        <div className="info add">
            <div className="adon-card">
                <input type="checkbox" className='extra-pick' onChange={check} value='1'/>
                <div>
                  <h2>Online services</h2>
                  <p>Access to multiplater games</p>
                </div>
                <h2>+$1/mo</h2>
            </div>
            <div className="adon-card">
                <input type="checkbox" className='extra-pick' onChange={check} value='2'/>
                <div>
                  <h2>Larger storage</h2>
                  <p>Extra 1TB of cloud save</p>
                </div>
                <h2>+$2/mo</h2>
            </div>
            <div className="adon-card">
                <input type="checkbox" className='extra-pick' onChange={check} value='2'/>
                <div>
                  <h2>Customizable Profile</h2>
                  <p>Custom theme on your profile</p>
                </div>
                <h2>+$2/mo</h2>
            </div>
        </div>
    </div>
  );
}

