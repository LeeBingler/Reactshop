import React from 'react';

function InputForm({ title, dataToChange, setDataToChange }) {
    return (
        <div>
            <label htmlFor={title} className='capitalize'>
                {title}
                <input
                    type='text'
                    value={dataToChange}
                    name={title}
                    onChange={(e) =>
                        setDataToChange((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                    }
                />
            </label>
        </div>
    );
}

export default InputForm;
