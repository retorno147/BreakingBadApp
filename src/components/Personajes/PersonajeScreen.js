import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { datosPersonaje, obtenerFrase } from '../../actions/api';
import { Spinner } from '../ui/Spinner';


export const PersonajeScreen = () => {

    const { protagonistaId } = useParams();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { datosProtagonista, fraseCelebre, loading } = useSelector(state => state.personaje);
    const dispatch = useDispatch();
    const { name, img, birthday, occupation, status, nickname, portrayed, category, appearance } = datosProtagonista;
    const { quote } = fraseCelebre;
    let listaOccupation = []
    let listaAppearance = []

    useEffect(() => {
        dispatch( datosPersonaje(protagonistaId))
        dispatch( obtenerFrase(name))
    }, [dispatch, protagonistaId, name])
    

    const handleReturn = () => {
        navigate( -1 )
    }


    if (!datosProtagonista) {
        return <Navigate to='/' />
    }

    if ( occupation ) {
        listaOccupation = occupation.map((pd) =>
            <div  className="padding-prod"key={pd} >
                <div id="handleValue" className="item">
                    <p className="caption margin-l">
                        {pd}
                    </p>
                </div>
            </div>
        )
    }

    if ( appearance ) {
        listaAppearance = appearance.map((pd) =>
            pd = pd + ' / '
        )
    }
    

    return loading ? (
        <Spinner />
        ) : (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ img } 
                    alt={ name }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>{t('nombre')}:</b> { name } </li>
                    <li className="list-group-item"> <b>{t('cumpleaños')}:</b> { birthday } </li>
                    <li className="list-group-item"> <b>{t('apodo')}:</b> { nickname } </li>
                    <li className="list-group-item"> <b>{t('profesión')}:</b> { listaOccupation } </li>
                    <li className="list-group-item"> <b>{t('estado')}:</b> { status } </li>
                    <li className="list-group-item"> <b>{t('apariciones')}:</b> { listaAppearance } </li>
                    <li className="list-group-item"> <b>{t('representado')}:</b> { portrayed } </li>
                    <li className="list-group-item"> <b>{t('categoría')}:</b> { category } </li>
                </ul>
                <h5 className="mt-3">{t('quote')}</h5>
                <p>{ quote !== undefined ? quote : t('noFrase') }
                </p>
                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    {t('regresar')}
                </button>
            </div>
        </div>
    )
}