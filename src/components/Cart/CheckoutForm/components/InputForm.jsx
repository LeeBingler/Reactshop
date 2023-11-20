import PropTypes from 'prop-types';

function InputForm({ type, title, dataToChange, setDataToChange, className }) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (
        <>
            <div className={`capitalize ${className || ''}`}>
                <label htmlFor={title}>{title}</label>
                <input
                    className='border border-gray hover:border-black transition-all ease-out 1s rounded p-2'
                    type={type || 'text'}
                    value={dataToChange}
                    name={title}
                    onChange={(e) =>
                        setDataToChange((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                    }
                />
                {type == 'email' && !re.test(dataToChange) && <p className='text-red-500'>Your email is Invalid</p>}
            </div>
        </>
    );
}

InputForm.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    dataToChange: PropTypes.string.isRequired,
    setDataToChange: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default InputForm;
