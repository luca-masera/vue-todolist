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
                    done : false
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
                    done : false
                }
            ],
            
            lastId : 5,
            todoTextNew : ''
            

        }
    },
    
    methods :{
        
        remove(index){
            this.lista.splice(index,1)
        },
        
        aggiungi(){
            this.lastId++;
            
            const newObj = {
                id : this.lastId,
                text : this.todoTextNew,
                done : false
            }
            this.lista.push(newObj),
            this.todoTextNew = ''
        }
    }

}).mount('#app')