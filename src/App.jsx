import { useState } from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import { Details } from './components/Details'
import {SearchParams} from './components/SearchParams'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ThemeContext } from "../lib/ThemeContext";

const queryClient = new QueryClient({
defaultOptions:{
  queries:{
    staleTime: Infinity,
    cacheTime: Infinity
  }
}
})
const App=()=> {
  const theme = useState("blue");
  return (
    <div>
      <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <QueryClientProvider client={queryClient}>
        <header>
          <Link to='/'>Flower Store</Link>
        </header>
    <Routes>
     <Route path='/details/:id' element={<Details/>}/>
     <Route path='/' element={<SearchParams/>}/>
    </Routes>
    </QueryClientProvider>
    </ThemeContext.Provider>
    </BrowserRouter>
    </div>
  )
}
export default App