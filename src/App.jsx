import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Office from './pages/Office'
import PracticeAreas from './pages/PracticeAreas'
import PracticeDetail from './pages/PracticeDetail'
import Professionals from './pages/Professionals'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="escritorio" element={<Office />} />
          <Route path="atuacao" element={<PracticeAreas />} />
          <Route path="atuacao/:slug" element={<PracticeDetail />} />
          <Route path="profissionais" element={<Professionals />} />
          <Route path="contato" element={<Contact />} />
          <Route path="politica-de-privacidade" element={<Privacy />} />
          <Route path="pagina-nao-encontrada" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
