import Vue from "vue";

Vue.filter('truncate', function (text, stop, clamp) {
    if(typeof text !== 'undefined'){
        return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '');
    }else{
        return "";
    }
});
