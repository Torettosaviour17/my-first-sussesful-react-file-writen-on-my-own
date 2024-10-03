// import "./App.css";
// import Home from "./screens/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/login-component/login";
// import Signin from "./components/signin-component/signin";
// import Welcome from "./components/welcome-component/welcome";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/Signin" element={<Signin />} />
//         <Route path="welcome" element={<Welcome />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





// import "./App.css";
// import Home from "./screens/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/login-component/login";
// import Signin from "./components/signin-component/signin";
// import Welcome from "./components/welcome-component/welcome";
// import NotFound from "./components/NotFound"; // Import your NotFound component

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signin" element={<Signin />} /> {/* Changed to lowercase */}
//         <Route path="/welcome" element={<Welcome />} />
//         <Route path="*" element={<NotFound />} /> {/* Fallback route */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;








import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login-component/login";
import Signin from "./components/signin-component/signin";
import Welcome from "./components/welcome-component/welcome";
import NotFound from "./components/NotFound"; // Ensure this path is correct

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<NotFound />} /> {/* Fallback route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
