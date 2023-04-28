const { createApp } = Vue;

createApp({
    data() {
        return {
            isOnOff: false
        }
    }, 
    methods: {
        toggleLampada: function () {
            this.isOnOff = !this.isOnOff
        }
    }
}).mount("#app");