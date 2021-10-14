import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      first: event.target[0].value,
      last: event.target[1].value,
      email: event.target[2].value,
    };

    await fetch('https://hooks.zapier.com/hooks/catch/11075513/bta8oaj/', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log('this is my data', data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="d-flex flex-column w-50">
          <span>First Name</span>
          <input type="text" name="fname"></input>
        </div>
        <div className="d-flex flex-column w-50">
          <span>Last Name</span>
          <input type="text" name="lname"></input>
        </div>
        <div className="d-flex flex-column w-50">
          <span>Email</span>
          <input type="email" name="email" required></input>
        </div>
        <div className="mt-4">
          <input
            className="btn btn-primary"
            type="submit"
            name="submit"
            value="submit"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default App;
