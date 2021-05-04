import Header from "./components/Header"
import Directory from "./components/Directory"

import API from "./utils/API";

function App() {
  console.log('hello');
  API.getEmployees()
  .then(data => console.log(data))
  .catch((err => {
    console.error(err);
  }))
  return (
    <>
    <Header/>
    <Directory/>
    </>
  );
}

export default App;
