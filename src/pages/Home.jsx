import { useAccount } from "wagmi";
import {
  LoadingSpinner,
  Button,
  TextInput,
  Title,
} from "../components/ui";
import { Nav, Administrador } from "../components";

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;

  return (
    <>
      <div className="flex justify-center p-3">
        <Nav />
      </div>
      <div className="flex flex-col gap-2">
        <div>Connected Wallet: {address}</div>
        
        <LoadingSpinner />

        <div>
          <Button disable={false}>Click me</Button>
        </div>
        

        <div>
          <TextInput />
        </div>

        <Title>Titulo de prueba</Title>

        <Administrador/>

      </div>
    </>
  );
}
