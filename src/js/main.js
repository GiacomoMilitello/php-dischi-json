const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: 'server.php',
            dischi: []
        }
    },
    mounted() {
        this.getDischi()
    },
    methods: {
        getDischi(){
            axios.get( this.apiUrl )
            .then((response) => {
                console.log( response.data )
                this.dischi = response.data
            })
        }
    }
}).mount('#app')