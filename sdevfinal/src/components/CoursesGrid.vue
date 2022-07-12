<template>
  <div class="grid-wrap">
    <CoursesGridItem
        v-for="course in courses"
        :key="course.id"
        :course="course" />
  </div>
</template>

<script>
import CoursesGridItem from './CoursesGridItem.vue';

export default {
    name: 'CoursesGrid',
    props: ['courses'],
    components: {
        CoursesGridItem,
    },
}
</script>

<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }
</style>