// App.jsx

// Import functions from React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// Import axios
import axios from "axios";

// Import context
import GlobalContext from "./context/GlobalContext";
// Import page_layout
import DefaultLayout from "./page_layout/DefaultLayout";

// Import pages
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {

  // useState to handle filmData and searchQuery  
  const [filmData, setFilmData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("ritorno+al+futuro");

  // FUNCTION to handle API request
  const fetchFilmData = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7107f13c6b8639f78e91e4d83ba1c848&query=${searchQuery}`)
      .then((res) => setFilmData(res.data.results))
      .catch((err) => console.error("Error fetching data", err));
  };

  // useEffect to fetch data on searchQuery change
  useEffect(() => {
    fetchFilmData();
  }, [searchQuery]);


  // RENDER
  return (
    <GlobalContext.Provider value={{ filmData }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout setSearchQuery={setSearchQuery} />}>
            {/* HomePage */}
            <Route path="/" element={<HomePage />} />
            {/* NotFound */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App