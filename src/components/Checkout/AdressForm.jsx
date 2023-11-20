function AdressForm(adress, setData) {
    return (
        <form>
            <label htmlFor='adress'> Adress </label>
            <input
                defaultValue={adress}
                value={adress}
                onChange={(e) => setData(prev => {
                    return {
                        adress: e.target.value,
                        email: prev.email,
                        country: prev.country
                }})}
            />
        </form>
    );
}

export default AdressForm;
