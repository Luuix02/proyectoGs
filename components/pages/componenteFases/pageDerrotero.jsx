"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FasePrimera from "./pageFasePri";
import FaseSegunda from "./pageFaseSeg";
import FaseTercera from "./pageFaseTer";
import FaseCuarta from "./pageFaseCuar";
import FaseQuinta from "./pageFaseQuin";
import FaseSexta from "./pageFaseSeis";
import Final from "./pageFinalEq";
import Ganador from "./pageEqGanador";
import "../../../src/styles/stylePageDerrotero/style.css";

export default function DerroteroFases() {
  const path = "/organizador/campeonatos/derrotero";

  const router = useRouter();

  const handleChange = (event) => {
    const route = event.target.value;
    if (route) {
      router.push(route);
    }
  };

  return (
    <>
      <article class="bodyDerrotero">
        <select className="btnJornada" onChange={handleChange}>
          Jornada
          <option value={`${path}/mananaDerr`} className="btnJornada">
            Mañana
          </option>
          <option value={`${path}/tardeDerr`} className="btnJornada">
            Tarde
          </option>
        </select>

        <FasePrimera />
        <FaseSegunda />
        <FaseTercera />
        <FaseCuarta />
        <FaseQuinta />
        <FaseSexta />
        <Final />
        <Ganador />
      </article>
    </>
  );
}
