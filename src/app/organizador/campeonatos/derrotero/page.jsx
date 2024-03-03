import Ganador from "../../../../../components/pages/componenteFases/pageEqGanador";
import FaseCuarta from "../../../../../components/pages/componenteFases/pageFaseCuar";
import FasePrimera from "../../../../../components/pages/componenteFases/pageFasePri";
import FaseQuinta from "../../../../../components/pages/componenteFases/pageFaseQuin";
import FaseSegunda from "../../../../../components/pages/componenteFases/pageFaseSeg";
import FaseSexta from "../../../../../components/pages/componenteFases/pageFaseSeis";
import FaseTercera from "../../../../../components/pages/componenteFases/pageFaseTer";
import Final from "../../../../../components/pages/componenteFases/pageFinalEq";

import "../../../../styles/stylePageDerrotero/style.css";

export default function Derrotero() {
  return (
    <>
      <FasePrimera></FasePrimera>
      <FaseSegunda></FaseSegunda>
      <FaseTercera></FaseTercera>
      <FaseCuarta></FaseCuarta>
      <FaseQuinta></FaseQuinta>
      <FaseSexta></FaseSexta>
      <Final></Final>
      <Ganador></Ganador>
    </>
  );
}
