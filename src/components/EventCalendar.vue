<script setup>
import { reactive } from "vue"; // => est la capacité pour une variable (array, string, number, object, etc) de se mettre à jour lorsque sa valeur ou toute autre variable à laquelle elle fait référence est modifiée après la déclaration
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import { Calendar } from "@fullcalendar/core";
import frLocale from "@fullcalendar/core/locales/fr";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { cloneElement } from "preact";
import { mapGetters } from "vuex";

const options = reactive({
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  locale: frLocale,
  headerToolbar: {
    left: "prev,next, today",
    center: "title",
    right: "dayGridMonth",
  },
  editable: true,
  selectable: true,
  weekends: true,
  events: "EVENTS",
  initialView: "dayGridMonth",
  dateClick: function (allDay) {
    allDay.dayEl.style.backgroundColor = "lightgreen";
  },
  businessHours: {
    // horaires de travail . an array of zero-based day of week integers (0= dimanche)
    daysOfWeek: [1, 2, 3, 4, 5], // lundi - vendredi

    startTime: "08:00", // dispo de telle heure
    endTime: "18:00", // à telle heure
  },
  eventSources: [
    // your event source
    {
      events: [
        // put the array in the `events` property
        {
          title: "",
          start: "2022-04-01",
        },
        {
          title: "",
          start: "2022-04-05",
          end: "2022-04-27",
        },
      ],
      backgroundColor: "red", // an option!
      textColor: "black", // an option!
    },

    // any other event sources...
  ],
  eventDidMount: function (info) {
    if (info.event.extendedProps.background) {
      info.el.style.background = info.event.extendedProps.background;
    }
  },
});
</script>

<template>
  <FullCalendar
    v-bind:options="options"
    events="EVENTS"
    @select="handleSelect"
  /><!--La directive v-bind demande à Vue de synchroniser l'attribut id de l'élément avec la propriété options du composant-->
</template>
