import { ConnectKitButton } from "connectkit";

export default function Header(){
    return(
        <header className="bg-white border-b shadow flex justify-between items-center">
            <img src="/logo-mobile-blockmaker.ico" alt="logo de blockmaker mobile" className="sm:hidden" width={46}/>
            <img src="/logo-full-blockmaker.png" alt="logo de blockmaker desktop" className="hidden sm:flex" width={300}/>
            <ConnectKitButton showBalance={true}/>
            {/*<button className="bg-gray-400 rounded-xl text-sm px-2 py-1 h-fit">Connect Wallet</button>*/}
        </header>
    )
}