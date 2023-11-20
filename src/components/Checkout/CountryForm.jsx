function CountryForm({ country, setData }) {
    return (
        <form>
            <label htmlFor='country'> Country </label>
            <input
                defaultValue={country}
                value={country}
                onChange={(e) =>
                    setData((prev) => ({
                        ...prev,
                        country: e.target.value
                    }))
                }
            />
        </form>
    );
}

export default CountryForm;
