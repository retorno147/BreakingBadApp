import { useEffect, useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PersonajesCard } from './PersonajesCard';
import { listPersonajes } from '../../actions/api';
import { useForm } from '../../hooks/useForm';
import { getPersonaje } from '../../selectors/getPersonaje';
import { useTranslation } from 'react-i18next';

export const PersonajeList = ( ) => {

    const { protagonistas } = useSelector(state => state.personaje)
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        buscar: ''
    });

    useEffect(() => {
        dispatch( listPersonajes())
    }, [dispatch])

    const {buscar} = formValues

    const personaje = useMemo( () => getPersonaje(buscar, protagonistas), [buscar, protagonistas]);

    return (
        <>
            <div className="containerInput mt-4">
                    
                        <input
                        className="form-control inputBuscar"
                        value={buscar}
                        name="buscar"
                        placeholder={t('buscar')}
                        onChange={handleInputChange}
                        />
            </div>

            <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn mt-5">
            { 
                personaje.length !== 0 ?
                    personaje.map( protas => (
                        <PersonajesCard 
                            key={ protas?.char_id } 
                            { ...protas }
                        />
                    )) :

                    protagonistas.map( protas => (
                        <PersonajesCard 
                            key={ protas?.char_id } 
                            { ...protas }
                        />
                    ))
            }
        </div>
        </>
        
    )
}