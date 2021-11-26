import React, {useContext} from 'react';
import './header.scss';
import logoAcessaBr from '../../images/acessabr-logo.svg';
import logoEbac from '../../images/ebac-logo.svg';
import { LocationContext } from '../../contexts/LocationContext';

const Header = () => {
    const {city, state} = useContext(LocationContext);
    return(
        <header className="header__container">
            <div className="header__logo header__logo--state">
                <img src={logoAcessaBr} alt="Logo AcessaBR" />
                <span className="header__city">
                    / {city} - {state}
                </span>
            </div>
            <div className="header__logo header__logo--ebac">
                <span className="header__span">
                    apoio:
                </span>
                <img src={logoEbac} alt="Logo EBAC" />
            </div>
        </header>
    );
}

export default Header;