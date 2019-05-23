import {
    SET_CHART_FROM_DATABASE
} from "../../mutations.type";

export const mutations = {

    [SET_CHART_FROM_DATABASE](state, charts){
        state.charts = charts;
    }
}
