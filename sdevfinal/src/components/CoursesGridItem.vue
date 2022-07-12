<template>
    <div class="course-item">
        <img v-bind:src="course.imageUrl" />
        <h3 class="course-name">{{ course.title }}</h3>
        <p class="course-price">{{ course.subject }}</p>
        <router-link v-bind:to="'/courses/' + course.id">
            <button>View Course Details</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CoursesGridItem',
    props: ['course'],
}
</script>

<style scoped>
.course-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .course-name {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
</style>