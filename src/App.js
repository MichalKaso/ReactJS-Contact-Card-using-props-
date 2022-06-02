import React from "react"
import "./style.css"
import Contacts from "./Contacts"
 


export default function App() {
    return(
        <div className="contacts">
            <Contacts 
                img={require("./images/mr-whiskerson.png")}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contacts 
                img={require("./images/fluffykins.png")}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contacts
                img={require("./images/felix.png")}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contacts
                img={require("./images/pumpkin.png")}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />

            
        </div>
    )
}



/*
function App() {
    return (
        <div className="contacts">
        
            <div className="contact-card">
                <img src={require("./images/mr-whiskerson.png")} alt="cat"/>
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img src={require("./images/phone-icon.png")} alt="cat"/>
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img src={require("./images/mail-icon.png")} alt="cat"/>
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src={require("./images/fluffykins.png")}alt="cat"/>
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img src={require("./images/phone-icon.png")}alt="cat" />
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img src={require("./images/mail-icon.png")}alt="cat" />
                    <p>fluff@me.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src={require("./images/felix.png")} alt="cat"/>
                <h3>Felix</h3>
                <div className="info-group">
                    <img src={require("./images/phone-icon.png")} alt="phone" />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src={require("./images/mail-icon.png")} alt="email" />
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src={require("./images/pumpkin.png")} alt="cat"/>
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <img src={require("./images/phone-icon.png")} alt="cat" />
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <img src={require("./images/mail-icon.png")}alt="cat" />
                    <p>pumpkin@scrimba.com</p>
                </div>
            </div>
            
        </div>
    )
}
*/



