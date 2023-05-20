import { createRoot } from "react-dom/client";
import { Routes, Route, Link } from 'react-router-dom'
import { createContext, useState } from 'react'
import { Details } from './components/Details'
import SearchParams from './components/SearchParams'
import { QueryClientProvider } from '@tanstack/react-query'
const ThemeContext = createContext()
function App() {
  const theme = useState("green")
  return (
    <div>
      <ThemeContext.Provider theme={theme}>
        <header>
          <Link to='/'>Flower Store</Link>
        </header>
    <Routes>
     <Route path='/details/:id' element={<Details/>}/>
     <Route path='/' element={<SearchParams/>}/>
    </Routes>
    </ThemeContext.Provider>
    </div>
  )
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
