<template>
  <v-app >  
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
 data: () => ({
    //
  }),
};
</script>

<style>
.v-application {
    background-color:#e5f6ff !important;
}
</style>


