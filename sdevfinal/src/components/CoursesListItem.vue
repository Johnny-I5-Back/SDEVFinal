<template>
    <div class="course-container">
      <img class="course-image" :src="course.imageUrl" />
      <div class="details-wrap">
        <h3>{{ course.title }}</h3>
        <p>{{ course.subject }}</p>
      </div>
      <button class="remove-button">Remove From Cart</button>
    </div>
</template>

<script>
export default {
    name: 'CoursesListItem',
    props: ['course'],
}
</script>

<style scoped>
  .course-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

  .course-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>