import { useAccount, useContractRead } from "wagmi";
import { PrestamosDefiABI } from "../contracts/ABIs";
import { useState } from "react";
import { Title, TextInput, LoadingSpinner } from "./ui";

export default function PrestamosCliente() {
  const [prestatario, setPrestatario] = useState("");
  const [id, setId] = useState(0);

  const { address } = useAccount();

  const { data, isLoading } = useContractRead({
    address: import.meta.env.VITE_PRESTAMOS_DEFI_CONTRACT_ADDRESS,
    abi: PrestamosDefiABI,
    functionName: "obtenerDetalleDePrestamo",
    args: [prestatario, id],
    account: address,
  });

  function handleInputPrestatario(event) {
    return setPrestatario(event.target.value);
  }

  function handleInputID(event) {
    return setId(event.target.value);
  }

  console.log("Datos: ", data);
  if (data !== undefined) {
    console.log("Forma 1");
    for (const key in data) {
      console.log(`${key}: ${data[key]}`);
    }

    console.log(Object.entries(data));
    console.log("Forma 2");
    Object.entries(data).map(([key, value]) => console.log(`${key}: ${value}`));
  }

  return (
    <section className="flex flex-col items-center justify-center gap-3 w-[400px]">
      <Title className="items-start"> Detalles de Prestamo</Title>
      <form className="flex flex-col items-center gap-2">
        <TextInput
          type="text"
          placeholder={"Prestatario"}
          onChange={handleInputPrestatario}
          value={prestatario}
        />
        <TextInput
          type="number"
          placeholder={"ID"}
          onChange={handleInputID}
          value={id}
        />
        {isLoading ? (
          <LoadingSpinner classname={"h-3 w-3"} />
        ) : data !== undefined ? (
          <ul className="flex flex-col gap-3 sm:text-xs bg-gray-100 border rounded p-2 sm:w-[450px] w-[375px]">
            {Object.entries(data).map(([key, value]) => (
              <li key={key}>
                {key}: {String(value)}
              </li>
            ))}
          </ul>
        ) : null}
      </form>
    </section>
  );
}
