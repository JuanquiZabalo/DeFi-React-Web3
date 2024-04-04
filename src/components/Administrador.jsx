import { useContractRead } from 'wagmi'
import { PrestamosDefiABI } from '../contracts/ABIs'
import { Title } from './ui';
import LoadingSpinner from './ui/LoadingSpinner';

export default function Administrador(){
    const { data, isLoading } = useContractRead({
        address: import.meta.env.VITE_PRESTAMOS_DEFI_CONTRACT_ADDRESS,
        abi: PrestamosDefiABI,
        functionName: 'administrador',
      })


    console.log(data)
    const resultado = isLoading ? <LoadingSpinner classname={'h-3 w-3'}/> : <p className='sm:text-xs bg-gray-100 border rounded p-2'>{data}</p>
    return(
        <section className='sm:flex sm:w-[455px] gap-4 items-center border shadow p-3 rounded-lg w-[400px] bg-gray-400'>
            <Title classname={'text-white'}>Administrador: </Title>
            {resultado}
        </section>
    )
}