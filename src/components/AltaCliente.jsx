import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { PrestamosDefiABI } from '../contracts/ABIs'
import { useEffect, useState } from 'react'
import { Title, TextInput, Button, ErrorInfo } from './ui'

export default function AltaCliente(){

    const [addresCliente, setAddressCliente] = useState('')

    const { config, error: errorPrepareContract } = usePrepareContractWrite({
        address: import.meta.env.VITE_PRESTAMOS_DEFI_CONTRACT_ADDRESS,
        abi: PrestamosDefiABI,
        functionName: 'altaCliente',
        args:[addresCliente],
        })

    const { data, write } = useContractWrite(config)
        
    const { isError: isTxError, isLoading: isTxLoading, isSuccess: isTxSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })
        
    useEffect(()=>{
        if(isTxError){
            console.log('Error en la transaccion')
            setAddressCliente('')
        }

        if(isTxSuccess){
            console.log('Exitos en la transaccion')
            setAddressCliente('')
        }
        }, [isTxError, isTxSuccess])
        
    function handleAddresCliente(event){
        return setAddressCliente(event.target.value)
    }
        
    
    let errorMessage = ''
    try {
        if (errorPrepareContract !== null){ 
           throw errorPrepareContract     
        } 
    } catch (errorPrepareContract) {
        //errorMessage = error?.name === 'ContractFunctionExecutionError' ? 'Error: Cliente ya dado de alta' : 'Error: Direccion Invalida'
        errorMessage = errorPrepareContract.shortMessage
    }   
    
    console.log('Error obtenido', errorPrepareContract)
    return(
        <section className='flex flex-col items-center justify-center gap-3 w-[400px]'>
            <Title className="items-start"> Nuevo Cliente</Title>
            <form className="flex flex-col items-center gap-2">
                <TextInput type='text' placeholder={'Address'} onChange={handleAddresCliente} value={addresCliente} />
                {errorPrepareContract !== null  && addresCliente !== '' ? <ErrorInfo message={errorMessage}/> : null}
                <Button onClick={() => write?.()} disable={!addresCliente || isTxLoading || errorPrepareContract} isLoading={isTxLoading}>
                    {!isTxLoading ? 'Agregar' : 'Agregando...'}
                </Button>
            </form>
        </section>

    )
}