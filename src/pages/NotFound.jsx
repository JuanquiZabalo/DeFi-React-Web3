import { Link } from "react-router-dom"
import {ErrorInfo} from '../components/ui'

export default function NotFound(){
    return(
        <div className="grid justify-items-center gap-2">
            <ErrorInfo message="Error 404: Internal Server Error" />
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}