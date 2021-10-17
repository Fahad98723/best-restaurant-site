import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Register/Register';
import MenuDetails from './Pages/Details/MenuDetails/MenuDetails';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="body">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route  path = '/home'>
            <Home></Home>
          </Route>
          <Route  path = '/login'>
            <Login></Login>
          </Route>
          <Route  path = '/register'>
            <Register></Register>
          </Route>
          <PrivateRoute  path = '/details/:itemId'>
            <MenuDetails></MenuDetails>
          </PrivateRoute>
          <Route path = '/placeorder'>
            <PlaceOrder></PlaceOrder>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
