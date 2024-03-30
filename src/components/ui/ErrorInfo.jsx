import { MdInfo } from "react-icons/md";
import PropTypes from 'prop-types'

export default function ErrorInfo({message}){
    return(
        <div className="text-red-600 flex items-center gap-2 bg-red-100 w-fit rounded-lg p-2">
            <MdInfo />
            {message}
        </div>
    )
}

ErrorInfo.propTypes = {
    message: PropTypes.string
}