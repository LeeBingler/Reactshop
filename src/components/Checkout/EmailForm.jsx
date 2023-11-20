import React from 'react';

function EmailForm({ email, setData}) {
    
    return (
        <>
            <form>
                <label htmlFor='email'> Email </label>
                <input
                    defaultValue={email}
                    value={email}
                    onChange={(e) =>
                        setData((prev) => {
                            return { adress: prev.adress, email: e.target.value, country: prev.country };
                        })
                    }
                />
            </form>
            {error && <p className='text-red-500 text-xl'>Error: {error}</p>}
        </>
    );
}

export default EmailForm;
