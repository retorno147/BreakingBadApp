import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import { PersonajesCard } from '../components/Personajes/PersonajesCard';
import { PersonajeScreen } from '../components/Personajes/PersonajeScreen';
import { Navbar } from '../components/ui/Navbar';
import { PersonajeList } from '../components/Personajes/PersonajeList';


export const AppRouter = () => {

    return (
        <HashRouter>
            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route exact path="/protagonista/:protagonistaId" element={<PersonajeScreen/>}/>
                    <Route exact path="/protagonistas" element={<PersonajesCard/>}/>
                    <Route exact path="/*" element={<PersonajeList/>}/>  
                </Routes>
            </div>
        </HashRouter>
    )
}
