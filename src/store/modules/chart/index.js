import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { state }  from "./state";

export const chartStore = {
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
}
