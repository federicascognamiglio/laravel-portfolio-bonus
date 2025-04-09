import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"

// Pages
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import DetailPage from "./pages/DetailPage"

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route element={ <MainLayout /> }>
      <Route index element={ <HomePage /> } />
      <Route path="/projects" element={ <ProjectsPage /> } />
      <Route path="/projects/:id" element={ <DetailPage /> } />
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App