export default {
    transform(data) {
        let vm = this;
        let new_data = [];

        data.forEach(function(item){
            new_data.push(vm.transformItem(item));
        });

        return new_data;
    },

    transformItem(data){
        let transform = {};

        transform = {
            id: data.id,
            date: data.date,
            value: data.value,
            created_at: data.created_at,
            updated_at: data.updated_at
        };

        return transform;
    }
}
