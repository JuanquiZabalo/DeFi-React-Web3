export default function Footer(){
    return(
        <footer className="py-4 px-3 flex justify-center content-center border-t shadow-xs"> 
            Derechos de autor © {new Date().getFullYear()} JC
        </footer>
    )
}