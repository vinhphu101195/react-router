import React, { Component } from "react";
// import {
//   Public,
//   Protected,
//   Login,
//   PrivateRoute,
//   AuthButton
// } from "./protected-authentication";
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";
import { Form } from "./preventing-transitions";

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <AuthButton />
//           <ul>
//             <li>
//               <Link to="/public"> Public Page</Link>{" "}
//             </li>
//             <li>
//               <Link to="/protected"> Protected Page</Link>{" "}
//             </li>
//           </ul>

//           <Route path="/public" component={Public} />
//           <Route path="/login" component={Login} />
//           <PrivateRoute path="/protected" component={Protected} />
//         </div>
//       </Router>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Form</Link>
            </li>
            <li>
              <Link to="/one">One</Link>
            </li>
            <li>
              <Link to="two">Two</Link>
            </li>
          </ul>

          <Route path="/" exact component={Form} />
          <Route path="/one" render={() => <h3>One</h3>} />
          <Route path="/two" render={() => <h3>Two</h3>} />
        </div>
      </Router>
    );
  }
}

export default App;
