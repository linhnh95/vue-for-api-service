import authAPI from "../../../api/auth";

import {
    LOGIN
} from "../../actions.type";

import {
    SET_AUTH
} from "../../mutations.type";

export const actions = {

    async [LOGIN]({commit}, params){
        try{
            let result = await authAPI.login(params);
            if(result.data.data){
                let token = result.data.data;
                commit(SET_AUTH, token[0]);
            }
            return result;
        }catch (e) {
            return e;
        }
    }
}
