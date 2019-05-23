import chartApi from "../../../api/chart";
import {chartVM} from "../../../transforms/charts";

import {
    GET_CHART_FROM_DATABASE
} from "../../actions.type";

import {
    SET_CHART_FROM_DATABASE
} from "../../mutations.type";

export const actions = {

    async [GET_CHART_FROM_DATABASE]({commit}){
        try{
            let charts = await chartApi.getCharts();
            if(charts.data.data){
                commit(SET_CHART_FROM_DATABASE, chartVM.listVM.transform(charts.data.data));
            }
            return charts;
        }catch (e) {
            return e;
        }
    }
}
