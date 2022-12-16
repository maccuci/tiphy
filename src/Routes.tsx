import { BrowserRouter as Router, 
    Routes, 
    Route } from "react-router-dom"
import Index from "./pages"
import Keyboards from "./pages/keyboards"

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='/keyboards' element={<Keyboards/>}/>
            </Routes>
        </Router>
    )
}