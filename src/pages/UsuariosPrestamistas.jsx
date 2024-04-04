import { Nav, AltaPrestamista } from "../components";
import { useContractRead, useAccount } from 'wagmi'
import { PrestamosDefiABI } from "../contracts/ABIs";
import { ErrorInfo, LoadingSpinner } from "../components/ui";
import { Link } from "react-router-dom"

export default function GestionUsuarios() {

  const { address } = useAccount();
  
  const { data: owner, isLoading: isLoadingAdministrator} = useContractRead({
    address: import.meta.env.VITE_PRESTAMOS_DEFI_CONTRACT_ADDRESS,
    abi: PrestamosDefiABI,
    functionName: 'administrador',
  })

  if(isLoadingAdministrator){
    return (
      <div className="flex flex-col items-center py-48"> 
        <LoadingSpinner classname={'w-24 h-24'}/> 
        <p>Loading ...</p>
      </div>)
  }

  if(owner !== address) {
    return( 
      <div className="flex flex-col items-center place-content-center min-h-[85vh] gap-8"> 
        <ErrorInfo message={'Error: identifiquese como el administrador del contrato'}/>
        <Link to="/">Volver al inicio</Link>
      </div> )
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex justify-center p-3">
        <Nav />
      </div>
      <section className='sm:w-[475px] gap-4 flex justify-center border shadow p-3 rounded-lg w-[400px]'>
        <AltaPrestamista />
      </section>
    </div>
  );
}
