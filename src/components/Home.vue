<template>
  <div class='projects'>
    <nav>
      <v-toolbar  app color='white'>
        <v-layout row justify-space-around>
          <v-toolbar-side-icon>
            <v-img src='../assets/logo_home.svg'> 
            </v-img>
          </v-toolbar-side-icon>
          <div>
            <div class='donation_counter'>{{$store.state.global_count}} <!-- Définition du compteur global de dons qui va rester en mémoire -->
            </div> 
            <div class='text_donations'>donations
            </div>
          </div>
        </v-layout>
      </v-toolbar> 
    </nav>
    <v-container  class='my-4'>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="project in projects" 
      :key="project._id"
      :project="project"
      >
      <!-- Ci dessus on boucle sur tous les projets du fichier ProjectData afin d'extraire les données propre à chacun et de créer des cartes dynamiques -->
          <v-card
      class="ma-3"   
    >
            <v-carousel
      height='222px'
      class="carousel"
      hide-delimiters>
      <img 
      :src=project.logo>
              <v-carousel-item
        v-for="(item,i) in project.photos"
        :key="i"
        :src="item"
        reverse-transition="fade"
        transition="fade"
        class='zoom'
      >       </v-carousel-item>   
      <!-- Ci-dessus on a bouclé sur le tableau de photos de chaque projet afin de permettre au slider d'afficher toutes les images -->    
            </v-carousel>  
            <v-card-subtitle pb0 pt0 mt0  class=" title_project text--primary"><b>{{project.title}}</b>
            </v-card-subtitle>
            <v-card-text class="description text--primary">
              <div>{{project.description}}
              </div><br>
              <div class='d-flex justify-space-between donation_number'>   
              <div><b>{{project.donation_current}}</b><span class='current_donation'> dons</span>
              </div>
              <div class ='donation_percentage'><b>{{Math.round(project.donation_current/project.donation_goal*100)}}</b><span class='percent_symbol current_donation'>%</span> 
              <!-- Ci-dessus calcul du pourcentage de complétion des dons -->
              </div>
              </div>
              <v-progress-linear rounded="rounded" color='#87CF3B' background-color='#EAF8FF' class='progress_bar_home' v-bind:value="Math.round(project.donation_current/project.donation_goal*100)">
              </v-progress-linear>
            </v-card-text>
            <v-card-actions>
              <v-btn class='button' @click="()=> { increaseProjectCounter(project._id);$router.push('/Donation');incrementGlobalCounter();saveProjectId(project._id) }"
         block color="#4FB7FA"  dark>
          Donner gratuitement
              </v-btn>
              <!-- Le bouton ci-dessus déclenche plusieurs actions: incrémentation du compteur global, redirection vers la page de Donation, incrémentation du compteur de projet et enregistrement de l'id projet dans le local storage -->
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
     data () {
      return {
      }
    },
    computed:{
      projects(){
        return this.$store.state.projects;
      },
      associations(){
        return this.$store.state.associations;
      }

    },
    methods:{
      saveProjectId(projectId){
        this.$store.commit('saveProjectId',projectId);
      
      },
      increaseProjectCounter(projectId){
        this.$store.commit('increaseProjectCounter',projectId);
        
      },
      incrementGlobalCounter(){
      this.$store.commit('incrementGlobalCounter')
      },
      
}, 
  }
</script>

<style>

@font-face {
    font-family: Gotham Rounded Bold;
    src: url("../fonts/Gotham Rounded Bold.otf") format("opentype");
}

@font-face {
    font-family: Gotham Rounded Light;
    src: url("../fonts/GothamRounded-Light.otf") format("opentype");
}


.description{
  color:green;
  font-family: Gotham Rounded Light;
}

.donation_number, .donation_percentage{
    font-family: Gotham Rounded Bold;
}

.current_donation{
  font-family: Gotham Rounded Light;
}

body {
font-family: Gotham,Helvetica,sans-serif;
font-weight: 400;
color: #89969f;
image-rendering: -moz-crisp-edges;
image-rendering: -o-crisp-edges;
image-rendering: -webkit-optimize-contrast;
image-rendering: crisp-edges;
-ms-interpolation-mode: nearest-neighbor;
line-height: 1;
background: #fff;
overflow-x: hidden;
}

.title_project{
  font-family: Gotham Rounded Bold;
  color: rgba(0,0,0,.87)
  }

.zoom:hover{
  transform: scale(1.05)
}

.carousel {
  position: relative;
}

img {
  position: absolute;
  height: 60px;
  width: 60px;
  top: 140px;
  left: 20px;
  z-index: 1000;
  border-radius: 10px;
}
.mx-auto {
  border-radius: 10px;
}

.text_donations{
    font-family:gotham,Helvetica,sans-serif;
    color:#89969f;
    font-weight:400;
    line-height:1;
    font-size:17px;
    float:left;
    padding:3px;
}

.donation_counter{
    font-family:gotham,Helvetica,sans-serif;
    color:#353e44;
    font-weight:700;
    line-height:1;
    font-size:17px;
    float:left;
    padding:3px;
    
}

.current_donation{
 color: #5e6971;
 font-size:12px;
}

</style>