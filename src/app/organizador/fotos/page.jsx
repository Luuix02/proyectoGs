import RootLayout from "@/app/layout";
import Fotos from "../../../../components/pages/componenteFotos/page";

export default function FotosP() {
  return (
    <>
      <RootLayout backgroundImage={true}>
        <Fotos />
      </RootLayout>
    </>
  );
}
