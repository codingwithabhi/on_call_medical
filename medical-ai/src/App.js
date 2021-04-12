import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Pages/Home/view"
import Login from "./Pages/Login/view"
import ChangePassword from "./Pages/ChangePassword/view"
import Header from "./Components/Organisms/Header/index"
import './index.scss'
import Footer from "./Components/Organisms/Footer/index";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/change-password" component={ChangePassword} /> */}
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
