<template>
  <div id="page-wrap">
    <coursesGrid :courses="courses" />
  </div>
</template>

<script>
import { courses } from '../test-data';
import CoursesGrid from '../components/CoursesGrid.vue';

export default {
    name: 'coursesPage',
    components: {
      CoursesGrid,
    },
    data() {
      return {
        courses,
      };
    }
};
</script>

 