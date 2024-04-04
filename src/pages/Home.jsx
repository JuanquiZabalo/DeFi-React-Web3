import { useAccount } from "wagmi";
import { Nav, Administrador } from "../components";
import { ConnectKitButton } from "connectkit";

export default function Home() {
  const { address, isConnected } = useAccount();

  return (
    <section className="bg-cover bg-no-repeat bg-center bg-[url('./images/defi2.jpg')] min-h-[100vh] flex ">
      {!isConnected ? (
        <>
          <section className=" flex flex-col justify-center items-center place-content-center gap-5">
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl mb-2 bg-gradient-to-r from-green-200 to-white text-transparent bg-clip-text">
              Aplicacion Financiera
            </h1>
            <p className="text-xl sm:text-2xl text-white">
              🔒 Unete con tu wallet.
            </p>
            <ConnectKitButton showBalance={true} />
          </section>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center w-[100%] p-3">
            <Nav />

            <div className="flex flex-col gap-1 items-center">
              <p className="text-white text-xs sm:text-sm">Wallet Connect: {address}</p>
              <Administrador />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
