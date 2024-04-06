"use client";
import React from "react";
import SideBarCampeonato from "../../../../../../components/common/sidebarCampeonato/page";
import "../../../../../styles/stylePageDerrotero/style.css";
import DerroteroFases from "../../../../../../components/pages/componenteFases/pageDerrotero";
import RootLayout from "@/app/layout";

export default function TardeDerr() {
  return (
    <>
      <RootLayout backgroundImage={true}>
        <SideBarCampeonato />
        <article class="bodyDerrotero">
          <div>
            <h1 className="jornada">Tarde</h1>
            <DerroteroFases />
          </div>
        </article>
      </RootLayout>
    </>
  );
}
