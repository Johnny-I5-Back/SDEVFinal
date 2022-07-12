<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    <v-toolbar dense>
      <router-link to="/">
        <v-btn id="navItem" text>Home</v-btn>
      </router-link>
      
      <router-link to="/courses">
        <v-btn id="navItem" text>Courses</v-btn>
      </router-link>

      <v-spacer></v-spacer>
      <v-btn id="navItem" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <router-link to="/sign-in">
        <v-btn>Sign In</v-btn>
      </router-link>

      <router-link to="/cart" id="cart-link">
        <button>Cart</button>
      </router-link>
    </v-toolbar>
  </v-card>
</template>

<script>

export default {
  name: 'NavBar',
}
</script>

<style>
#navItem{
  background-color: transparent;
  
  
}
</style>