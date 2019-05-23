import JwtService from "@/common/jwt.service";

import {
    SET_AUTH
} from "../../mutations.type";

export const mutations = {
    [SET_AUTH](state, token){
        JwtService.saveToken(token);
    }
}
