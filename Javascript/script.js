const{createApp} = Vue


createApp ({
    
    data(){
    
        return{
            lista : [
                
                {
                    id : 1,
                    text : 'Comprare la zucca',
                    done : true
                },
                {
                    id : 2,
                    text : 'Comprare il vestito',
                    done : true
                },
                {
                    id : 3,
                    text : 'Comprare i dolcetti',
                    done : true
                },
                {
                    id : 4,
                    text : 'Comprare le decorazioni',
                    done : true
                },
                {
                    id : 5,
                    text : 'Comprare due birre',
                    done : true
                }
            ]

        }
    },
    
    methods :{

    }

}).mount('#app')