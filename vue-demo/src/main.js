import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import app from './app.vue'
import todo from './todo'

Vue.use(Vuex)

let store = new Store({
    modules: {
      todo
    }
})

new Vue({
    store,
    render: h => h(app)
}).$mount('#app')