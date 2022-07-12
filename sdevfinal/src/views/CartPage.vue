<template>
  <div id="page-wrap">
    <h1>Course Cart</h1>
    <coursesList :courses="courses"/>
    <h3 id="total-price">Total Credit Hours: {{ totalPrice }}</h3>
  </div>
</template>

<script>
import { courses } from '../test-data';
import CoursesList from '../components/CoursesList.vue';

export default {
    name: 'CartPage',
    components: {
      CoursesList,
    },
    data() {
      return {
        courses,
      }
    },
    computed: {
      totalPrice() {
        return this.courses.reduce(
          (sum, item) => sum + Number(item.credits),
          0,
        );
      }
    }
};
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }

  #total-price {
    padding: 16px;
    text-align: right;
  }

  #checkout-button {
    width: 100%;
  }

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
