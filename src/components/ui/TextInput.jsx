import PropTypes from 'prop-types'

export default function TextInput({type='text', value, onChange, placeholder, disabled}){
    return(
        <input 
        type={type} 
        value={value} 
        onChange={onChange}
        placeholder={placeholder} 
        disabled= {disabled}
        className="border border-gray-100 rounded-lg p-2 outline-none
        focus:ring-2 focus:ring-blue-500 focus:border-transparent
        transition duration-300 ease-in-out disabled:cursor-not-allowed sm:w-[450px] w-[375px]" />
    )
}

TextInput.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}