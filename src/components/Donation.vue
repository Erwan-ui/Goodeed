<template> 
  <div id="video_page">
    <nav>
      <v-toolbar  app color='white' class='navbar'>
        <v-layout  out row justify-space-around>
          <v-toolbar-side-icon>
            <v-img class='logo' src='../assets/logo_home.svg'> 
            </v-img>
          </v-toolbar-side-icon>
          <div>
            <v-btn @click="()=> { $router.push('/'); saveCampaignId()}" v-show="elementVisible" class="hideElement" color="blue lighten-1" dark> Confirmer le don 
            </v-btn> 
            <!-- Plusieurs actions se déclenchent en cliquant sur le bouton, redirection vers la page Home et enregistrement de l'id de campagne dans le local storage -->
          </div>
          <div class="progress_bar">
          <div class="progress-value">
          </div>
          </div>
        </v-layout>
    </v-toolbar>
  </nav>

  <Media class='played_video' 
      :kind="'video'"
      :isMuted="(false)"
      :src="selectedLink"
      :autoplay="true" 
      :controls="false"
      :loop="false"
      :ref="'fish'"
      :style="{width: '50vw', margin:'100px'}"
      @click="onClickVideo()">      
  >
  </Media>
  </div>
</template>

<script >
import Media from '@dongido/vue-viaudio'

export default {
  computed:{
      campaigns(){
        return this.$store.state.campaigns;
      }
      },
  data () {
      return{
          elementVisible: false,
          
redir:'',
selectedLink:''

      }
  },
  components: {
    Media
  },
  created () {
    const idx = Math.floor(Math.random() * this.campaigns.length);/* J'assigne à la variable idx un nombre aléatoire compris entre 0 et le nombre de campagnes dans le fichier adCampaignData*/
    this.selectedLink = this.campaigns[idx].video_uri; 
    this.redir = this.campaigns[idx].redirect_uri;
    this.id_campaign = this.campaigns[idx]._id;
    /* Les 3 opérations ci-dessus permettent de récupérer des informations concernant la campagné choisie aléatoirement */
    setTimeout(() => this.elementVisible = true, 5000)
    console.log(this.redir)
  },

  methods: {
    saveCampaignId(){
        this.$store.commit('saveCampaignId',this.id_campaign);
      
      },
      onClickVideo () {
          window.open(this.redir, "_blank")

        // window.location.href = this.redir
      }
      
   
  }
}     

</script>

<style>

#video_page {
  max-width: 100%;
  height:auto;
  text-align: center;
}

.logo {
    /* margin-left:150px; */
}

.progress_bar {
  background: #e3f2fd;
  justify-content: flex-start;
  border-radius: 10px;
  align-items: center;
  /* position: relative; */
  /* padding: 0 5px; */
  display: flex;
  height: 30px;
  width: 200px;
    /* margin-right:150px; */
      border-radius:15px;
}

.progress-value {
  animation: load 5s linear forwards;
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 10px;
  background: #42A5F5;
  height: 30px;
  width: 0;
    border-radius:10px;
}

@keyframes load {
  0% { width: 0; }
  100% { width: 100%; }
}

@media screen and (max-width: 533px) {
  .progress_bar {
display:none;  }

}

@media screen and (max-width: 330px) {
 nav{
   display:none;
 }
}
</style>