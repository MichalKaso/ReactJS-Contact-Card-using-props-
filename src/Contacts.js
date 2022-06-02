import React from "react";

export default function Contacts(props) {

    return(

        <div className="contact-card">
             <img src={props.img} alt="cat"/>
             <h3>{props.name}</h3>
            <div className="info-group">
                 <img src={require("./images/phone-icon.png")} alt="cat"/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                 <img src={require("./images/mail-icon.png")} alt="cat"/>
                 <p>{props.email}</p>
            </div>
        </div>
    )
}

