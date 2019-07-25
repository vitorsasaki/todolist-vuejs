import Vue from 'vue';
import store from './store';
import router from './router';
import vuetify from './pluglins/vuetify';
import './pluglins/vee-validate';

new Vue({
    el: "#app",
    router,
    store,
    vuetify,
    computed:{
        snackbar(){
            return this.$store.state.alertas.snackbar;
        }
    }
})
