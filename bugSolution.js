```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
      <p>Current location: {location.pathname}</p>
    </div>
  );
}

function About() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
      <p>Current location: {location.pathname}</p>
    </div>
  );
}
```