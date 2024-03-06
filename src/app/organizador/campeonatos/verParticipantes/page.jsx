
import SideBarCampeonato from "../../../../../components/common/sidebarCampeonato/page";
import CardsEquipos from "../../../../../components/pages/componenteParticipantes/pageCardsEquipos";
import "../../../../styles/stylePageVerParticipantes/style.css";

export default function verParticipantes() {
  return (
    <>
      <SideBarCampeonato/>
      <article class="bodyIntegrantes">
        <CardsEquipos/>
        <CardsEquipos/>
        <CardsEquipos/>
        
      </article>
    </>
  );
}
