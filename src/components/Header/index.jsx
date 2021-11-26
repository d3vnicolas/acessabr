import React from 'react';
import './header.scss';
import logoAcessaBr from '../../images/acessabr-logo.svg';
import logoEbac from '../../images/ebac-logo.svg';

const Header = props => {
    return(
        <header className="header__container">
            <div className="header__logo header__logo--state">
                <img src={logoAcessaBr} alt="Logo AcessaBR" />
                <span className="header__city">
                    / {props.city} - {props.state}
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