import { Suspense, lazy, useState } from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
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

const SearchParams = lazy(()=>import("./components/SearchParams"))
const Details = lazy(()=>import("./components/Details"))
const App=()=> {
  const theme = useState("blue");
  return (
    <div>
      <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<div>
            loading...
          </div>}>
        <header>
          <Link to='/'>Flower Store</Link>
        </header>
    <Routes>
     <Route path='/details/:id' element={<Details/>}/>
     <Route path='/' element={<SearchParams/>}/>
    </Routes>
    </Suspense>
    </QueryClientProvider>
    </ThemeContext.Provider>
    </BrowserRouter>
    </div>
  )
}
export default App