"use client"
 import React from "react";
// import "../../../src/styles/styleCrearCampeonato/crearcampeonato.css"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {Draggable, DropArg} from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
export default function Calendarioo() {
    return (
        <div class="calendario">
           
        <FullCalendar class="DiseñoDeCalendario"
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                headerToolbar={{ 
                color : 'red',
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek'
            }}
            events={[]}
            nowIndicator={true}
            editable={true}
            droppable={true}
            selectable={true}
            selectMirror={true}
        // dateClick={{}}
        // drop={ }
        // eventClick={}
            /></div>
    )
}