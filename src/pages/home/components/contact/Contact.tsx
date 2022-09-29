import React from "react";

type Props = {};

const Contact = (props: Props) => {
    return (
        <div className="container" id="Contact">
            <div className="content">
                <h1 className="content-header">Contact</h1>
                <div id="contactcontent">
                    <h1>Kontaktieren sie Mich!</h1>
                    <form>
                        <label>name</label>
                        <input type="text" name="name" />

                        <label>email</label>
                        <input type="email" name="user_email" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
