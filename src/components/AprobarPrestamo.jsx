import {
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
  } from "wagmi";
  import { PrestamosDefiABI } from "../contracts/ABIs";
  import { useEffect, useState } from "react";
  import { Title, TextInput, Button, ErrorInfo } from "./ui";

export default function AprobarPrestamo(){
    const [prestatario, setPrestatario] = useState('');
    const [id, setId] = useState('');

    const { config, error: errorPrepareContract } = usePrepareContractWrite({
      address: import.meta.env.VITE_PRESTAMOS_DEFI_CONTRACT_ADDRESS,
      abi: PrestamosDefiABI,
      functionName: "aprobarPrestamo",
      args: [prestatario, id],
    });
  
    const { data, write } = useContractWrite(config);
  
    const {
      isError: isTxError,
      isLoading: isTxLoading,
      isSuccess: isTxSuccess,
    } = useWaitForTransaction({
      hash: data?.hash,
    });
  
    useEffect(() => {
      if (isTxError) {
        console.log("Error en la transaccion");
        setPrestatario('');
        setId('');
      }
  
      if (isTxSuccess) {
        console.log("Exitos en la transaccion");
        setPrestatario('');
        setId('');
      }
    }, [isTxError, isTxSuccess]);
  
    function handleInputPrestatario(event) {
      return setPrestatario(event.target.value);
    }

    function handleInputID(event) {
        return setId(event.target.value);
      }
  
    let errorMessage = "";
    try {
      if (errorPrepareContract !== null) {
        throw errorPrepareContract;
      }
    } catch (errorPrepareContract) {
      errorMessage = errorPrepareContract.shortMessage;
    }
    
    console.log("Error obtenido", errorPrepareContract);
    return (
      <section className="flex flex-col items-center justify-center gap-3 w-[400px]">
        <Title className="items-start"> Aprobar Prestamo</Title>
        <form className="flex flex-col items-center gap-2">
          <TextInput
            type="text"
            placeholder={"Prestatario"}
            onChange={handleInputPrestatario}
            value={prestatario}
          />
          <TextInput
            type="number"
            placeholder={'ID'}
            onChange={handleInputID}
            value={id}
          />
          {errorPrepareContract !== null && prestatario !== '' && id !== '' ? (
            <ErrorInfo message={errorMessage} />
          ) : null}
          <Button
            onClick={() => write?.()}
            disable={!prestatario || id <=0 || isTxLoading || errorPrepareContract}
            isLoading={isTxLoading}
          >
            {!isTxLoading ? 'Aprobar' : 'Aprobando...'}
          </Button>
        </form>
      </section>
    );
  }