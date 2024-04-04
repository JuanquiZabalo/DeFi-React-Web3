  import {
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
  } from "wagmi";
  import { PrestamosDefiABI } from "../contracts/ABIs";
  import { useEffect, useState } from "react";
  import { Title, TextInput, Button, ErrorInfo } from "./ui";
  
  
  export default function SolicitarPrestamo() {
    const [monto, setMonto] = useState('');
    const [plazo, setPlazo] = useState('');

    const { config, error: errorPrepareContract } = usePrepareContractWrite({
      address: import.meta.env.VITE_PRESTAMOS_DEFI_CONTRACT_ADDRESS,
      abi: PrestamosDefiABI,
      functionName: "solicitarPrestamo",
      args: [monto, plazo],
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
        setMonto('');
        setPlazo('');
      }
  
      if (isTxSuccess) {
        console.log("Exitos en la transaccion");
        setMonto('');
        setPlazo('');
      }
    }, [isTxError, isTxSuccess]);
  
    function handleInputMonto(event) {
      return setMonto(event.target.value);
    }

    function handleInputPlazo(event) {
        return setPlazo(event.target.value);
      }
  
    let errorMessage = "";
    try {
      if (errorPrepareContract !== null) {
        throw errorPrepareContract;
      }
    } catch (errorPrepareContract) {
      //errorMessage = error?.name === 'ContractFunctionExecutionError' ? 'Error: Cliente ya dado de alta' : 'Error: Direccion Invalida'
      errorMessage = errorPrepareContract.shortMessage;
    }
  
    console.log("Error obtenido", errorPrepareContract);
    return (
      <section className="flex flex-col items-center justify-center gap-3 w-[400px]">
        <Title className="items-start"> Solicitud de Prestamo</Title>
        <form className="flex flex-col items-center gap-2">
          <TextInput
            type="number"
            placeholder={"Monto"}
            onChange={handleInputMonto}
            value={monto}
          />
          <TextInput
            type="number"
            placeholder={"Plazo (minutos)"}
            onChange={handleInputPlazo}
            value={plazo}
          />
          {errorPrepareContract !== null && monto !== '' && plazo !== '' ? (
            <ErrorInfo message={errorMessage} />
          ) : null}
          <Button
            onClick={() => write?.()}
            disable={monto <=0 || plazo <=0 || isTxLoading || errorPrepareContract}
            isLoading={isTxLoading}
          >
            {!isTxLoading ? 'Solicitar' : 'Solicitando...'}
          </Button>
        </form>
      </section>
    );
  }