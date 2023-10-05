

export default function Info() {
  return (
    <div>
        <h1 className="title">Personal Info</h1>
        <p className="subtext">Please provide your name, email address, and phone number.</p>
        <div className="info">
          <p>Name</p>
          <input required></input>
          <p>Email Address</p>
          <input required></input>
          <p>Phone Number</p>
          <input required></input>
        </div>
    </div>
  );
}

