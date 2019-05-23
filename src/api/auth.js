import ApiService from "../common/api.service";

const baseUrl = "http://localhost.testsyno/api/v1";

export default {

    login(params) {
        return ApiService.post(baseUrl + "/oauth-syno", params);
    }
}
