import logo from './logo.svg';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Home from './home';
import Roster from './roster';
import News from './news';
import LoginRegister from './loginRegister';
import Schedule from './Schedule';
import Contact from './contact';
import NewsArticle from './newspage';


function App() {
  return (
     <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/roster"
                    element={<Roster />}
                />

                <Route
                    path="/news"
                    element={<News />}
                />

                <Route
                    path="/schedule"
                    element={<Schedule />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/login"
                    element={<LoginRegister />}
                />

                <Route
                    path="/newspage"
                    element={<NewsArticle />}
                />

            </Routes>

        </BrowserRouter>
  );
}

export default App;
