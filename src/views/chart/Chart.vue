<template>
    <div class="base-customer">
        <div v-if="isLoad" class="chart-container" v-for="chart in dataChart">
            <chart-bar
                    :chart_id="chart.chart_id"
                    :chart_type="chart.chart_type"
                    :chart_data="chart.chart_data"
                    :chart_options="chart.chart_options"
            >
            </chart-bar>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import ChartBar from "../../components/chart/ChartBar";

    import {GET_CHART_FROM_DATABASE} from "../../store/actions.type";
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    export default {
        components: {
            "chart-bar": ChartBar
        },
        mounted() {
        },
        data() {
            return {
                dataChart: [
                    {
                        chart_id: "charts-1",
                        chart_type: "horizontalBar",
                        chart_data: {
                            labels: ["January", "February", "March", "April", "May", "June", "July"],
                            datasets: [
                                {
                                    label: "Customer (person)",
                                    backgroundColor: ["#999999", "#999999", "#999999", "#999999", "#999999", "#999999", "#999999"],
                                    data: [65, 59, 80, 81, 56, 55, 40]
                                }
                            ]
                        },
                        chart_options: {
                            legend: {display: false},
                            title: {
                                display: true,
                                text: 'My First Dataset'
                            },
                            scales: {
                                xAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    }
                ]
            }
        },
        watch: {},
        computed: {
            isLoad(){
                let vm = this;
                if(vm.isAuthenticated){
                    vm.getResultCharts();
                    return true;
                }else{
                    location.href = "/login";
                }
            },
            ...mapGetters(["isAuthenticated", "getCharts"])
        },
        methods: {
            getResultCharts() {
                let vm = this;
                vm.$store.dispatch(GET_CHART_FROM_DATABASE).then(response => {
                    if (response.data.data) {
                        let tempCharts = {
                            chart_id: "charts-2",
                            chart_type: "horizontalBar",
                            chart_data: {
                                labels: [],
                                datasets: [
                                    {
                                        label: "Customer (person)",
                                        backgroundColor: ["#999999", "#999999", "#999999", "#999999", "#999999", "#999999", "#999999"],
                                        data: []
                                    }
                                ]
                            },
                            chart_options: {
                                legend: {display: false},
                                title: {
                                    display: true,
                                    text: 'My First Dataset'
                                },
                                scales: {
                                    xAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            }
                        };
                        vm.getCharts.forEach(function(chart){
                            let date = new Date(chart.date);
                            tempCharts.chart_data.labels.push(monthNames[date.getMonth()]);
                            tempCharts.chart_data.datasets[0].data.push(chart.value);
                        })
                        vm.dataChart.push(tempCharts);
                    }
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>
