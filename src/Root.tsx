import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ProjectDetail from './ProjectDetail'

export default function Root() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </HashRouter>
  )
}
