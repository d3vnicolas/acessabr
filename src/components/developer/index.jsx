import React from "react";
import './developer.scss';
import DevPhoto from '../../images/devPhoto.png';


const DeveloperItem = () => {
    return(
        <div className="developer__container">
            <div className="developer__photo">
                <img src={DevPhoto} alt="Imagem do Curador responsável Nicolas Soares" />
            </div>
            <div className="developer__details">
                <div>
                    <h3>Nicolas Soares</h3>
                    <h6>Desenvolvedor</h6>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Corrupti odio illo ut deserunt optio labore id deleniti 
                    magni impedit quo reiciendis soluta quasi recusandae facilis 
                    sapiente dolore, tenetur non? Suscipit.
                </p>
            </div>
        </div>
    );
}

export default DeveloperItem;
