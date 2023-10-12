import './Summary.css'

export default function Summary({planItem}) {



  return (
    <div>
        <h1 className="title">Finishing up</h1>
        <p className="subtext">Double-check everything looks OK before Confirming</p>
        <div className="info">
          <div className="summuray">
            <div className='block'>
              <div>
                <h1>{planItem}</h1>
                <a href="/">Change</a>
                </div>
                <h1>dolari</h1>
            </div>
            <hr/>
            <div className='block'>
              <div>
                <h1>prvi servis</h1>
                </div>
                <h1>dolari</h1>
            </div>
            <div className='block'>
              <div>
                <h1>drugi servis</h1>
                </div>
                <h1>dolari</h1>
            </div>
          </div>
          <div className='block'>
              <div>
                <h1>Total</h1>
                </div>
                <h1>dolari</h1>
            </div>
        </div>
    </div>
  );
}

