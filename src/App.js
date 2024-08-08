import './App.css';
import Header from './pageTemplate/Header'
import Footer from './pageTemplate/Footer';
import Navigation from './pageTemplate/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Trending from './Pages/trending/Trending';
import Movies from './Pages/movie/Movies';
import Series from './Pages/series/Series';
import Search from './Pages/search/Search';
import LoginForm from './Pages/userCredentials/Login';
import SignUp from './Pages/userCredentials/Signup';
import Forget from './Pages/userCredentials/Forget';
import WatchList from './Pages/userCredentials/WatchList';
function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" exact element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvseries" element={<Series />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/changePassword" element={<Forget />} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
