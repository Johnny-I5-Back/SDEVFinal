<template>
  <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar dense>
      <router-link to="/">
      <v-btn text>Home</v-btn>
      </router-link>
    <router-link to="/courses">
      <v-btn text>Courses</v-btn>
    </router-link>

      <v-spacer></v-spacer>
<router-link to="/sign-in">
      <v-btn>Sign In</v-btn>
    </router-link>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>

export default {
    name: 'NavBar',
}
</script>
