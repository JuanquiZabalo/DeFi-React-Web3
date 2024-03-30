import PropTypes from 'prop-types'

export default function Title({children}){
    return(
        <h1 className='text-lg font-bold w-fit'>{children}</h1>
    )
}

Title.propTypes = {
    children: PropTypes.node.isRequired
}