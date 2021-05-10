import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link} from "react-router-dom";
import HomeScreen from "./views/HomeScreen";
import AdminScreen from "./views/AdminScreen"
import AboutScreen from "./views/AboutScreen"
import OriginScreen from "./views/OriginScreen"

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div className="grid-container">
          <header>
            <Link to="/">React Shopping Cart</Link>
            <Link to="/admin">Admin</Link>
          </header>
          <main>
            <Route path="/admin" component={AdminScreen} />
            {/* <Route path="/about" component={AboutScreen} /> */}
            {/* <Route path="/origin" component={OriginScreen} /> */}
            <Route path="/" component={HomeScreen} exact />
          </main>
          <footer>All right is reserved.</footer>
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;