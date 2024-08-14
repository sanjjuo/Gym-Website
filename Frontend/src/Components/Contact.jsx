import React, { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { FaDumbbell } from "react-icons/fa6";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMail = async(e) =>{
        e.preventDefault();
            setLoading(true)
        try{

        }catch (error){

        }
    }

    return (
        <section className="contact">
            <form onSubmit={sendMail}>
                <h1 style={{display:"flex",alignItems:"center", gap:"10px"}}>CONTACT US <FaDumbbell/></h1>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button type='submit' disabled={loading} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap:"15px"
                }}>
                    {!loading && <ClipLoader size={20} color='white' />} Send Message</button>
            </form>
        </section>
    )
}

export default Contact
