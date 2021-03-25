import './App.css';
import Header from './Header'
import Login from './Login'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Checkout from './Checkout';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout" >
            <Header/>
            <Checkout/> 
          </Route>
          <Route path="/login" >
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>