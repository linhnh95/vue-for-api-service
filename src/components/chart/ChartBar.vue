<template>
    <div class="chart-content">
        <canvas :id="'charts-'+chart_id" width="600" height="200"></canvas>
    </div>
</template>

<script>
    import Chart from "chart.js";

    export default {
        props: {
            chart_id: {
                type: String,
                required: true
            },
            chart_type: {
                type: String,
                required: true
            },
            chart_data: {
                type: Object,
                required: true
            },
            chart_options: {
                type: Object,
                required: true
            }
        },
        components: {},
        mounted() {
            let vm = this;
            vm.chart = new Chart(document.getElementById("charts-" + vm.chart_id), {
                type: vm.chart_type,
                data: vm.chart_data,
                options: vm.chart_options
            });
        },
        data() {
            return {
                chart: null
            }
        },
        watch: {},
        methods: {}
    }
</script>

<style scoped>

</style>
