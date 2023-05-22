import { Suspense, lazy, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
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

const SearchParams = lazy(()=>import('./components/SearchParams'))
const Details = lazy(()=>import('./components/Details'))

const App=()=> {
  const theme = useState("blue");
  return (
    <div className="my-0 w-full">
      <ThemeContext.Provider value={theme}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={
            <div>
              loading...
            </div>
          }>
        <header className="text-4xl no-underline rounded text-green-500 font-extrabold shadow bg-slate-200 h-20 pt-4 px-4">      
          <Link to='/'>Flower Store</Link>
        </header>
        <div className=" bg-gradient-to-tl from-slate-800 to-slate-200 p-4">
    <Routes>
     <Route path='/details/:id' element={<Details/>}/>
     <Route path='/' element={<SearchParams/>}/>
    </Routes>
    </div>
    </Suspense>
    </QueryClientProvider>
    </ThemeContext.Provider>
    </div>
  )
}
export default App