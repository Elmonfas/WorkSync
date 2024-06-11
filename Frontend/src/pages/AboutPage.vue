<template>
  <div class="q-px-lg q-py-md bg-[#001220] text-white h-screen w-full">
    <q-timeline :layout="layout" color="cyan-11">

      <q-timeline-entry heading class="my-[2rem] font-bold">
        About WorkSync
      </q-timeline-entry>

      <q-timeline-entry
        title="Conception and Planning"
        subtitle="February 22, 2024"
        side="left"
        icon="today"
      >
        <div>
          In the first month, the need for a work shift management tool in the market was identified. This phase included conducting market research and gathering requirements from potential users through surveys and interviews. The development team was formed, and the project's scope and main objectives were defined. Finally, a detailed project plan was created, outlining the development phases and key milestones.

</div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Design and Prototyping"
        subtitle="March 03, 2024"
        side="right"
        icon="print"
        color="purple-11"
      >
        <div>
          During the second month, the system architecture and application workflow were designed. A low-fidelity prototype was developed to validate concepts and the basic structure. This prototype was presented to a select group of users to obtain initial feedback, and key functionalities were adjusted based on this feedback. Subsequently, a high-fidelity prototype with more detailed interfaces was created.        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Development and Database"
        subtitle="April 18, 2024"
        side="left"
        icon="computer"
        color="orange"
      >
        <div>
          The third month focused on developing the backend of the application, including the creation of the database and implementation of authentication systems. Concurrently, the frontend of the application was developed, focusing on user interface (UI) and user experience (UX) design. The backend was integrated with the frontend, and initial functionality tests were conducted to ensure all components worked together seamlessly.

</div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Testing and Launch"
        subtitle="June 4, 2024"
        side="right"
        icon="cloud"
        color="green"
      >
        <div>
          In the fourth month, critical functions such as shift management, leave requests, and notifications were implemented. Closed beta testing was conducted with a select group of users to identify issues and gather feedback. The feedback was used to resolve identified problems. Preparations for the official launch were completed, including creating marketing materials and user documentation, culminating in the official market launch of WorkSync.
</div>
      </q-timeline-entry>

    </q-timeline>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { computed } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    return {
      layout: computed(() => {
        return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
      })
    }
  }
}
</script>


<style lang="sass">
body
  overflow: hidden
</style>