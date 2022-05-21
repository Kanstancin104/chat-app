import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="Contact">
            <img
                className="avatar"
                src="https://randomuser.me/api/portraits/women/39.jpg"
                alt=""
            />
            <div>
                <div className="name">Amy Hunt</div>
                <div className="status">
                    <div className="status-online"></div>
                    <div className="status-text">online</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
