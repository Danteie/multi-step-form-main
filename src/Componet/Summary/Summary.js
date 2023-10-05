

export default function Summary({planItem}) {



  return (
    <div>
        <h1 className="title">Finishing up</h1>
        <p className="subtext">Double-check everything looks OK before Confirming</p>
        <div className="info">
          <h1>{planItem}</h1>
        </div>
    </div>
  );
}

