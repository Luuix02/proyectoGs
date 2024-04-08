
import SideBarCampeonato from "../../../../../components/common/sidebarCampeonato/page";
import RootLayout from "@/app/layout";
import MuestraSelector from "./MuestraSelector/page";
export default function Cronograma() {
  return (
    <RootLayout backgroundImage={true}>
        <SideBarCampeonato>
        </SideBarCampeonato>
        <MuestraSelector></MuestraSelector>
    </RootLayout>
  )
}
