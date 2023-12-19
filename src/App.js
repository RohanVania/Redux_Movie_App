import './App.scss';
import { Route, Routes, } from 'react-router';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import PageNotFound from './component/PageNotFound/PageNotFound';
import MovieDetail from "./component/MovieDetail/MovieDetail"
import "./App.scss"
import "./index.scss"

function App() {
  return (
    <div className=' APP '>

        <Header />
      <div className='container'>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
      </div>
        <Footer />
    </div >
  );
}

export default App