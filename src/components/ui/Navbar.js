import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import es from './../../locale/img/spain.png';
import en from './../../locale/img/united-kingdom.png';


export const Navbar = () => {

    const { i18n } = useTranslation();
    
    const cambioIdioma = (code) => {
        i18n.changeLanguage(code)
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ml-4">
            
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <Link 
                        className="navbar-brand margin-l" 
                        to="/"
                    >
                        Breaking Bad App
                    </Link>
                    
                </div>
            </div>
            <div className="banderas">
                <button onClick={ () => cambioIdioma('es') }><img src={es} alt=""/></button>
                <button onClick={ () => cambioIdioma('en') }><img src={en} alt=""/></button>
            </div>

        </nav>
    )
}