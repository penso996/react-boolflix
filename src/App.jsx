// App.jsx

// Import functions from React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import page_layout
import DefaultLayout from "./page_layout/DefaultLayout"

// Import pages
import HomePage from "./pages/Homepage"
import NotFound from "./pages/NotFound"

function App() {


  // RENDER
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<DefaultLayout />} >
          {/* HomePage */}
          <Route path="/" element={<HomePage />} />
          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App