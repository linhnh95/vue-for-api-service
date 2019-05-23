import ApiService from "../common/api.service";

const baseUrl = "http://localhost.testsyno/api/v1";

export default {
    getCharts() {
        return ApiService.query(baseUrl + "/charts");
    }
}
