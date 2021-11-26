import React, { useState } from 'react';
import './style.scss';
import imgageDestack from '../../images/homeDestack.png';
import Pills from '../../components/Pills';

const PLACES = [
    'Praias',
    'Restaurantes',
    'Estádio',
    'Arcos',
    'Catedral - São Sebastião',
    'Aquário',
    'Cristo Redentor',
    //'Escadaria',
    'Sambôdromo',
    'Pão de Açúcar',
    'Hotéis'

];

const RioDeJaneiro = props => {
    const [selectedPill, setSelectedPill] = useState('');
    return(
        <main id="main-content" className="home__container">
            <div className="home__col">
                <div className="home__img home__img--destack hide-desktop">
                    <img src={imgageDestack} alt="Imagem representando a acessibilidade através da cadeira de rodas" />
                </div>
                <h1 className="home__title">{props.city} para todos</h1>
                <p className="home__text">
                    Nossa missão é facilitar o encontro entre lugares inclusivos 
                    e pessoas que buscam alternativas culturais para sair de casa, 
                    com a mobilidade que todo cidadão precisa.
                </p>
                <p className="home__text">
                    Checamos 10 itens essenciais de acessibilidade para pessoas 
                    com deficiência em diversos pontos da cidade. 
                </p>
                <div className="home__pills">
                    {
                        PLACES.map((item) => (
                            <Pills
                                local={item}
                                selected={selectedPill === item}
                                onClick={ () => setSelectedPill(item) }
                            />
                        ))
                    }
                </div>
            </div>

            <div className="home__col">
                <div className="home__img home__img--destack hide-mobile">
                    <img src={imgageDestack} alt="Imagem representando a acessibilidade através da cadeira de rodas" />
                </div>
            </div>
        </main>
    );
}

export default RioDeJaneiro;