import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link, Outlet, useParams, } from 'react-router-dom';

const NavBar = function () {
  return (
    <>
    <h2>React Rotuer v6 Demo</h2>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="press">Press</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
  )
}

const Home = function () {
  return (
    <h1> Honey I'm Home </h1>
  )
}

const Article = function () {
  let {article_id} = useParams();
  return <h3>Article ID: {article_id}</h3>;
}
const Archive = function () {
  let {year} = useParams();
  return <h3>Year {year}</h3>;
}
const Press = function () {
  return (
    <>
      <h1>Press</h1>
      <div><Link to="1">Why is the sky blue?</Link></div>
      <div><Link to="2">The science of solar eclipse?</Link></div>
      <nav>
        <p>Archive</p>
        <ul>
          <li>
            <Link to="archive/2023">2023</Link>
          </li>
          <li>
            <Link to="archive/2022">2022</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path=":article_id" element={<Article />} />
        <Route path="archive/:year" element={<Archive />} />
      </Routes>
    </>
  )
}
const App = function () {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="press" element={<Press />} />
        <Route path=":article_id" element={<Article />} />
        <Route path="archive/:year" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
