import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { PrestamosDefiABI } from "../contracts/ABIs";
import { useEffect, useState } from "react";
import { Title, TextInput, Button, ErrorInfo } from "./ui";
import { parseGwei, formatGwei } from "viem";

export default function DepositarGarantia() {

  const { address } = useAccount();

  const { data: dataReadContract, error: errorReadContract } = useContractRead({
    address: import.meta.env.VITE_PRESTAMOS_DEFI_CONTRACT_ADDRESS,
    abi: PrestamosDefiABI,
    functionName: "obtenerGarantia",
    account: address,
  });

  const [totalGarantia, setTotalGarantia] = useState(0)
  
  console.log('Error de leer la funcion obtener garantia', errorReadContract)
  const [garantia, setGarantia] = useState("");

  const { config, error: errorPrepareContract } = usePrepareContractWrite({
    address: import.meta.env.VITE_PRESTAMOS_DEFI_CONTRACT_ADDRESS,
    abi: PrestamosDefiABI,
    functionName: "depositarGarantia",
    value: parseGwei(garantia),
    account: address
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
      setGarantia("");
    }

    if (isTxSuccess) {
      console.log("Exitos en la transaccion");
      setGarantia("");
      if(dataReadContract !== undefined) {
        setTotalGarantia(formatGwei(dataReadContract))
      }
    }
  }, [isTxError, isTxSuccess, dataReadContract]);

  function handleInputGarantia(event) {
    return setGarantia(event.target.value);
  }

  let errorMessage = "";
  try {
    if (errorPrepareContract !== null) {
      throw errorPrepareContract;
    }
  } catch (errorPrepareContract) {
    errorMessage = errorPrepareContract.shortMessage;
  }

  console.log("Total Garantia", totalGarantia);
  console.log("Garantia:", garantia);
  console.log("Error obtenido", errorPrepareContract);
  return (
    <section className="flex flex-col items-center justify-center gap-3 w-[400px]">
      <section className="flex flex-col">
        <Title className="items-start"> Deposito de Garantia</Title>
        <p className="text-xs fon italic text-gray-700">
          Deposito Total Gwei: {totalGarantia}
        </p>
      </section>
      <form className="flex flex-col items-center gap-2">
        <TextInput
          type="number"
          placeholder={"Gwei"}
          onChange={handleInputGarantia}
          value={garantia}
        />
        {errorPrepareContract !== null && garantia !== "" ? (
          <ErrorInfo message={errorMessage} />
        ) : null}
        <Button
          onClick={() => write?.()}
          disable={garantia <= 0 || isTxLoading || errorPrepareContract}
          isLoading={isTxLoading}
        >
          {!isTxLoading ? "Depositar" : "Depositando..."}
        </Button>
        </form>
    </section>
  );
}
