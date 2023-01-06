import "./App.css";
import "./css/bootstrap.css";
import "./Styles/header.css";
import "./Styles/nav.css";
import "./Styles/accueil.css";
import "./Styles/resume.css";
import "./Styles/footer.css";
import "./Styles/projets.css";
import "./Styles/contact.css";
import "./Styles/separation.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/elements/Nav";
import Footer from "./components/elements/Footer";
import Header from "./components/elements/Header";
import Global from "./components/Global";
import Separation from "./components/Separation";

function App() {
  return (
    <div className='App '>
      <Nav />
      <Header />
      <Separation />
      <Routes>
        <Route
          path='/'
          element={<Global />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
