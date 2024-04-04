import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { PrestamosDefiABI } from '../contracts/ABIs'
import { useEffect, useState } from 'react'
import { Title, TextInput, Button, ErrorInfo } from './ui'

export default function AltaPrestamista(){

    const [addresPrestamista, setAddressPrestamista] = useState('')

    const { config, error: errorPrepareContract } = usePrepareContractWrite({
        address: import.meta.env.VITE_PRESTAMOS_DEFI_CONTRACT_ADDRESS,
        abi: PrestamosDefiABI,
        functionName: 'altaPrestamista',
        args:[addresPrestamista],
        })

    const { data, write } = useContractWrite(config)
        
    const { isError: isTxError, isLoading: isTxLoading, isSuccess: isTxSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })
        
    useEffect(()=>{
        if(isTxError){
            console.log('Error en la transaccion')
            setAddressPrestamista('')
        }

        if(isTxSuccess){
            console.log('Exitos en la transaccion')
            setAddressPrestamista('')
        }
        }, [isTxError, isTxSuccess])
        
    function handleAddresPrestamista(event){
        return setAddressPrestamista(event.target.value)
    }
        
    
    let errorMessage = ''
    try {
        if (errorPrepareContract !== null){ 
           throw errorPrepareContract     
        } 
    } catch (errorPrepareContract) {
        //errorMessage = error?.name === 'ContractFunctionExecutionError' ? 'Error: Prestamista ya dado de alta' : 'Error: Direccion Invalida'
        errorMessage = errorPrepareContract.shortMessage
    }   
    
    console.log('Error obtenido', errorPrepareContract)
    return(
        <section className='flex flex-col items-center justify-center gap-3 w-[400px]'>
            <Title className="items-start"> Nuevo Prestamista</Title>
            <form className="flex flex-col items-center gap-2">
                <TextInput type='text' placeholder={'Address'} onChange={handleAddresPrestamista} value={addresPrestamista} />
                {errorPrepareContract !== null  && addresPrestamista !== '' ? <ErrorInfo message={errorMessage}/> : null}
                <Button onClick={() => write?.()} disable={!addresPrestamista || isTxLoading || errorPrepareContract} isLoading={isTxLoading}>
                    {!isTxLoading ? 'Agregar' : 'Agregando...'}
                </Button>
            </form>
        </section>

    )
}