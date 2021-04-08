import React from "react";
import axios from 'axios';
import Card from "./Card"
import { Input, Button } from "element-react";
import "./index.css";
import { ReactComponent as Send } from "../assets/send.svg";

export default function Chatbot() {

    const [value, setValue] = React.useState([])
    const [message, setMessage] = React.useState("")

    const welcomeMessage = "Bonjour ! Je suis le chatbot, bienvenue !! :)"

    const getValue = React.useCallback(() => {
        axios.get('http://www.randomtext.me/api/lorem').then((response) => {
            setValue(prevState => prevState.concat({ ...response.data, from: "chatbot" }));
        });
    }, [setValue])

    React.useEffect(() => {
        setValue(prevState => prevState.concat({ text_out: welcomeMessage, from: "chatbot" }))
    }, [setValue])

    const handleChange = (message) => {
        setMessage(message)
    }

    const handleSend = () => {
        if (message) {
            setValue(prevState => prevState.concat({ text_out: message, from: "user" }))
            setMessage("")
            getValue()
        }
    }

    window.scrollTo(0, document.body.scrollHeight);

    return (
        <>
            <h2>Set your chatbox here</h2>

            <div className="card-container">
                {value && value.map(e => {
                    const description = e ? e.text_out : ""
                    return (
                        <Card {...e}>
                            <div>{description}</div>
                        </Card>
                    )
                })}

            </div>
            <Input value={message}
                onChange={handleChange}
                append={<Button onClick={handleSend}><Send /></Button>}
                placeholder={"Ecrivez votre message ici ..."}
                className={"input"}
            >
            </Input>
        </>
    );
}
