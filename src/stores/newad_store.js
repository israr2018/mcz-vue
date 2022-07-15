import { defineStore } from 'pinia'
export const useCarAdStore = defineStore({
  id:'newadStore',
    state: () =>( {
        carInfo:{
            model_year:'',
            model_name:''
        },
        engineInfo:{
            engine_type:''
        }
    }),
    actions: {  
      setCarModel(value) {
        this.carInfo.model_year=value;
      },
      setCarEngine(value) {
        this.engineInfo.engine_type=value;
      },
    },
  })