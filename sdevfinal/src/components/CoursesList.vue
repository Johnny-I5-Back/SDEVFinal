<template>
    <div v-if="courses.length > 0">
        <CoursesListItem
            v-for="course in courses"
            :key="course.id"
            :course="course" />
    </div>
    <p v-else>You haven't added anything to your cart yet!</p>
</template>

<script>
import CoursesListItem from './CoursesListItem.vue';

export default {
    name: 'coursesList',
    props: ['courses'],
    components: {
        CoursesListItem,
    },
}
</script>