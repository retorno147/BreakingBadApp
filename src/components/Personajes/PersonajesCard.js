import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'


export const PersonajesCard = ({char_id, name, img, status}) => {

    const { t } = useTranslation();

    return (
        <div className="col animate__animated animate__fadeIn ml-5">
            <div className="card">
                
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ img } className="card-img" alt={name} />
                    </div>
                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{name}</h5>

                            <p className="card-text">
                                <small className="text-muted">{ status }</small>
                            </p>

                            
                            <Link to={`/protagonista/${char_id}`}>
                                {t('informacion')}
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
