import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import MyList from './pages/MyList';

const App = () => (
  <Router basename="/Movie-app">
    <main className="min-h-screen bg-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
    </main>
  </Router>
);

export default App;
