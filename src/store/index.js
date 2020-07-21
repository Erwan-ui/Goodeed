import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import ProjectData from '../data/projectData'
import AdCampaignData from '../data/adCampaignData'
import AssociationData from '../data/associationData'


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
  state: {
    id_donated_project:[],
    id_watched_campaign:[],
    global_count:0,
    projects: ProjectData,
    associations: AssociationData,
   campaigns: AdCampaignData
  },
  mutations: {
    saveCampaignId(state, camp ) {
       
      state.id_watched_campaign.push({id_campaign:camp})
      localStorage.setItem('id_watched_campaign', JSON.stringify(state.id_watched_campaign));
      console.log(state.id_watched_campaign)
      /* Ajouter l'id de la campagne visionnée au tableau id_watched_campaign et le sauvegarder dans le local storage */

     },
    saveProjectId(state, param ) {
       
      state.id_donated_project.push({id_donated_project:param})
      localStorage.setItem('id_donated_project', JSON.stringify(state.id_donated_project));
              /* Ajouter l'id du projet séléctionné au tableau id_donated_project et le sauvegarder dans le local storage /**/


     },
   
    increaseProjectCounter(state, x ) {
       
      state.projects.forEach(project=> {if (project._id===x) {project.donation_current+=1;}})

      /*Actualisation du nombre de dons sur projet visionné */ 
      

     },
     incrementGlobalCounter (state) {
      // mutate state
      state.global_count++       /*Actualisation du compteur global de dons */ 

    }
  },
 
  actions: {
  },
  modules: {
  }
 
})

export const mutations = {
  incrementGlobalCounter:state =>
    state.global_count++       
}
 

