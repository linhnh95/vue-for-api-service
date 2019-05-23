import Vue from "vue";
import Vuex from "vuex";

import {authStore} from "./modules/auth";
import {chartStore} from "./modules/chart";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth : authStore,
        chart: chartStore
    }
});
