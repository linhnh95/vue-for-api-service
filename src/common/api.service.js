import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "./jwt.service";
import router from '../router/router';

axios.interceptors.response.use(response => response, error => {
    if (error.response.status === 401) {
        location.href = "/login";
    }
});

const ApiService = {
    init() {
        Vue.use(VueAxios,axios);
        this.setHeader();
    },
    setHeader() {
        Vue.axios.defaults.headers.common[
            "Authorization"
            ] = `Bearer ${JwtService.getToken()}`;

        let teamId = router.history.current.params.team_id;
        if (teamId) {
            Vue.axios.defaults.params = {"team_id": teamId};
        }
    },
    query(resource, params) {
        return Vue.axios.get(resource, params).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },

    get(resource, slug = "") {
        return Vue.axios.get(`${resource}/${slug}`).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },

    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    },

    update(resource, slug, params) {
        return Vue.axios.put(`${resource}/${slug}`, params);
    },

    put(resource, params) {
        return Vue.axios.put(`${resource}`, params);
    },

    delete(resource, params) {
        return Vue.axios.delete(resource, {params: params}).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    }
}
export default ApiService;
