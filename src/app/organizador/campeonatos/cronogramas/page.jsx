"use client";
import React from "react";
import "../../../../styles/styleCronograma/Cronograma.css";
import Tarde from "./tarde/page";
import Manana from "./manana/page";
import { useState } from "react";
import SideBarCampeonato from "../../../../../components/common/sidebarCampeonato/page";
import RootLayout from "@/app/layout";

export default function Cronograma() {
  const [selectOption, setSelectOption] = useState("manana");

  const handleChange = (event) => {
    setSelectOption(event.target.value);
  };
  return (
    <>
      <RootLayout backgroundImage={true}>
        <SideBarCampeonato></SideBarCampeonato>
        <div class="ContainerPrincipal">
          <div class="contenedorCronograma">
            <select
              value={selectOption}
              class="selectorJornada"
              onChange={handleChange}
            >
              <option value={"manana"}>Jornada Mañana</option>
              <option value={"tarde"}>Jornada Tarde</option>
            </select>
          </div>
          {selectOption === "manana" && <Manana />}
          {selectOption === "tarde" && <Tarde />}
        </div>
      </RootLayout>
    </>
  );
}
