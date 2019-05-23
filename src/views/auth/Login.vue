<template>
    <div class="container base-login">
        <div class="form-login" :style="{height : isError || errors.any() ? '220px' : '200px'}">
            <div class="form-login-top">
                <h3>Login SYNO</h3>
            </div>
            <div class="form-login-middle">
                <div class="form-element">
                    <label for="username">Username : </label>
                    <input type="text" data-vv-scope="login" v-model.trim="user.username" name="username" v-validate="'required|max:20'" id="username">
                </div>
                <div class="form-element">
                    <label for="password">Password : </label>
                    <input type="password" data-vv-scope="login" v-model.trim="user.password" name="password" v-validate="'required|max:20'" id="password">
                </div>
            </div>
            <div class="form-login-footer">
                <span v-if="isError" class="notice-warning">Username or Password is invalid</span>
                <span class="notice-warning" v-if="errors.has('login.username') || errors.has('login.password')">
                    <template v-if="errors.has('login.username')">
                        {{ errors.first('login.username') }}
                    </template>
                    <template v-if="errors.has('login.password')">
                        {{ errors.first('login.password') }}
                    </template>
                </span>
                <button :disabled="isLoading" class="button" @click="login('login')">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import {LOGIN} from "../../store/actions.type";

    export default {
        mounted() {
            let vm = this;
            if(vm.isAuthenticated){
                vm.$router.push({name: 'listChart'});
            }
        },
        watch: {},
        computed: {
            ...mapGetters(["isAuthenticated"])
        },
        data(){
            return{
                user: {
                    username: '',
                    password: '',
                },
                isLoading : false,
                isError : false
            }
        },
        methods: {
            login(scope) {
                let vm = this;
                vm.isLoading = true;
                vm.$validator.validateAll(scope).then(() => {
                    if (!vm.errors.any()) {
                        vm.$store.dispatch(LOGIN, vm.user).then(() => {
                            vm.$router.push({name: 'listChart'});
                        }).catch(() => {
                            vm.isLoading = false;
                        });
                    } else {
                        vm.isLoading = false;
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>
