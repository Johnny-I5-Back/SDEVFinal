<template>
  <div id="page-wrap" v-if="course">
    <div id="img-wrap">
      <img v-bind:src="course.imageUrl" />
    </div>
    <div id="course-details">
      <h1>{{ course.title }}</h1>
      <h3 id="price">Subject: {{ course.subject }}</h3>
      <p>Credit Hours: {{ course.credits }}</p>
      <h4>Description</h4>
      <p>{{ course.description }}</p>
      <button id="add-to-cart">Add to Cart</button>
    </div>
  </div>
  <NotFoundPage v-else/>
</template>

<script>
import { courses } from '../test-data';

export default {
    name: 'CourseDetailPage',
    components: {
    },
    data() {
      return {
        course: courses.find((p) => p.id === this.$route.params.id),
      };
    }
};
</script>

<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #course-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 50%;
    background-color: lightblue;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }
</style>
