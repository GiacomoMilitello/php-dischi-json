const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: 'server.php'
        }
    },
    mounted() {
    },
    methods: {
        getDischi(){
            axios.get( this.apiUrl )
            .then((response) => {
                this.dischi = response.data
            })
        }
    }
}).mount('#app')