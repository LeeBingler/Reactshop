import { useState } from "react"
import EmailForm from "../components/Checkout/EmailForm";
import AdressForm from "../components/Checkout/AdressForm";
import CountryForm from "../components/Checkout/CountryForm";

function Checkout() {
    const [data, setData] = useState({
        email: '',
        adress: '',
        country: ''
    });

    return (
        <section className="pt-32">
            <EmailForm email={data.email} setData={setData}/>
            <AdressForm adress={data.adress} setData={setData} />
            <CountryForm country={data.country} setData={setData} />
        </section>
    )
}

export default Checkout