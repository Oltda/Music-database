
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux"
import { store } from './state/store'
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import TabContainer from './components/tabs/TabContainer';
import linkedin from "./images/icons/linkedin.png"
import mail from "./images/icons/mail.png"
import github from "./images/icons/github.png"
import Footer from './components/utilities/Footer';

function App() {




  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <TabContainer />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
