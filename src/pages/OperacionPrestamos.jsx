import { useAccount } from "wagmi";
import { Nav, DepositarGarantia, SolicitarPrestamo, AprobarPrestamo, ReembolsarPrestamo, LiquidarGarantia, PrestamosCliente } from "../components";
import { ErrorInfo } from "../components/ui";
import { Link } from "react-router-dom"

export default function OperacionPrestamos() {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center place-content-center min-h-[85vh] gap-8">
        <ErrorInfo message={"Error: identifiquese con su cuenta"} />
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex justify-center p-3">
        <Nav />
      </div>

      <section className="sm:w-[475px] gap-4 flex justify-center border shadow p-3 rounded-lg w-[400px]">
        <DepositarGarantia />
      </section>

      <section className="sm:w-[475px] gap-4 flex justify-center border shadow p-3 rounded-lg w-[400px]">
        <SolicitarPrestamo />
      </section>

      <section className="sm:w-[475px] gap-4 flex justify-center border shadow p-3 rounded-lg w-[400px]">
        <AprobarPrestamo />
      </section>

      <section className="sm:w-[475px] gap-4 flex justify-center border shadow p-3 rounded-lg w-[400px]">
        <ReembolsarPrestamo />
      </section>

      <section className="sm:w-[475px] gap-4 flex justify-center border shadow p-3 rounded-lg w-[400px]">
        <LiquidarGarantia />
      </section>

      <section className="sm:w-[475px] gap-4 flex justify-center border shadow p-3 rounded-lg w-[400px]">
        <PrestamosCliente />
      </section>

    </div>
  );
}
