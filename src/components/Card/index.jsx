import React from "react";
import './card.scss';
import Button from '../Button';
import iconAudio from '../../images/iconAudio.png';
import iconBathroom from '../../images/iconBathroom.png';
import iconBraile from '../../images/iconBraile.png';
import iconDog from '../../images/iconDog.png';
import iconDoor from '../../images/iconDoor.png';
import iconElevator from '../../images/iconElevator.png';
import iconFloor from '../../images/iconFloor.png';
import iconLibras from '../../images/iconLibras.png';
import iconParking from '../../images/iconParking.png';
import iconRamp from '../../images/iconRamp.png';

const Card = ({item}) => {
    const imagePath = require(`../../images${item.image}`)
    return (
        <div className="card__container">
            <div className="card__image">
                <img src={imagePath.default} alt={item.name} title={item.name} />
            </div>
            <div className="card__content">
                <h3>{item.name}</h3>
                <ul className="card__facilities">
                    <li className={`card__facilities__item ${item.facilities[0]} ${item.facilities[0].status?'card__facilities__item--unchecked':''}`}>
                        <img src={iconBraile} alt="Sinalização em braile" title="Sinalização em braile"/>
                    </li>
                    <li className={`card__facilities__item ${item.facilities[1]} ${item.facilities[1].status?'card__facilities__item--unchecked':''}`}>
                        <img src={iconAudio} alt="Audio descrição" title="Audio descrição"/>
                    </li>
                    <li className={`card__facilities__item ${item.facilities[2]} ${item.facilities[2].status?'card__facilities__item--unchecked':''}`}>
                        <img src={iconBathroom} alt="Banheiro acessível" title="Banheiro acessível"/>
                    </li>
                    <li className={`card__facilities__item ${item.facilities[3]} ${item.facilities[3].status?'card__facilities__item--unchecked':''}`}>
                        <img src={iconElevator} alt="Elevador para cadeirantes" title="Elevador para cadeirantes"/>
                    </li>
                    <li className={`card__facilities__item ${item.facilities[4]} ${item.facilities[4].status?'card__facilities__item--unchecked':''}`}>
                        <img src={iconParking} alt="Estacionamento para idosos/deficientes" title="Estacionamento para idoso/deficientes"/>
                    </li>
                    <li className={`card__facilities__item ${item.facilities[5]} ${item.facilities[5].status?'card__facilities__item--unchecked':''}`}>
                        <img src={iconDog} alt="Permite cães-guias" title="Permite cães-guias"/>
                    </li>
                    <li className={`card__facilities__item ${item.facilities[6]} ${item.facilities[6].status?'card__facilities__item--unchecked':''}`}>
                        <img src={iconFloor} alt="Piso tátil de alerta" title="Piso tátil de alerta"/>
                    </li>
                    <li className={`card__facilities__item ${item.facilities[7]} ${item.facilities[7].status?'card__facilities__item--unchecked':''}`}>
                        <img src={iconDoor} alt="Portas largas" title="Portas largas"/>
                    </li>
                    <li className={`card__facilities__item ${item.facilities[8]} ${item.facilities[8].status?'card__facilities__item--unchecked':''}`}>
                        <img src={iconRamp} alt="Rampas de acesso para cadeirantes" title="Rampas de acesso para cadeirantes"/>
                    </li>
                    <li className={`card__facilities__item ${item.facilities[9]} ${item.facilities[9].status?'card__facilities__item--unchecked':''}`}>
                        <img src={iconLibras} alt="Atendimento em libras" title="Atendimento em libras"/>
                    </li>
                </ul>
                <p>
                    {item.description}
                </p>
                <Button>Como chegar</Button>
            </div>
        </div>
    );
}

export default Card;