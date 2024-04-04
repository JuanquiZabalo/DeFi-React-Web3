import PropTypes from 'prop-types'

export default function Title({children, classname}){
    return(
        <h1 className={`text-lg font-bold ${classname} sm:w-[450px] w-[375px]`}>{children}</h1>
    )
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
    classname: PropTypes.string
}