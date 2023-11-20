import { useState } from "react"
import EmailForm from "../components/Checkout/EmailForm";

function Checkout() {
    const [email, setEmail] = useState('');

    return (
        <EmailForm email={email} setEmail={setEmail}/>
    )
}

export default Checkout