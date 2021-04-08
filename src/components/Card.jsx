import { Card } from "element-react"
import "./index.css"

const DialogCard = (props) => {

    const from = props.from
    const className = from === "chatbot" ? "card-chatbot" : "card-user"

    return (
        <Card {...props} className={`card ${className}`} />
    )
}

export default DialogCard