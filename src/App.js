import { Switch, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import Menus from './pages/Menus/Menus';
import MenuDetail from './pages/MenuDetail/MenuDetail';
import Home from './pages/Home/Home';
import Food from './pages/Food/Food';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NoPageFound from './pages/NoPage/NoPageFound';
import ScrollToTop from './components/Scroll/ScrollToTop';
import Overlay from './components/UI/Ovelay/Overlay';
import { HeaderProvider } from './contexts/header/header-context';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Overlay />
      <div className="App">
        <HeaderProvider>
          <Header />
        </HeaderProvider>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/menus" exact>
              <Menus />
            </Route>
            <Route path="/menus/:category" exact>
              <MenuDetail />
            </Route>
            <Route path="/menus/:category/:foodId" exact>
              <Food />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="*">
              <NoPageFound />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;;