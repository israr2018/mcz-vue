<script>
// import CarInfo from '../components/CarAd/CarInfo.vue'
// import CarInfo2 from '../components/CarAd/CarInfo2.vue'
// import CarInfo3 from '../components/CarAd/CarInfo3.vue'
import CarInfo4 from '../components/CarAd/CarInfo4.vue'
import EngineInfo from '../components/CarAd/EngineInfo.vue'
import SellerInfo from '../components/CarAd/SellerInfo.vue'
export default {
    name:'NewCarAd',
    components:{
        'car-info4':CarInfo4,
        'engine-info':EngineInfo,
        'seller-info':SellerInfo
    },
    
       data(){
        return {
            title:{
                1:"Car Info",
                2:"Engine Info",
                3:"Seller Info",
                4: "Transmission Info",
                5: "Seller Info",
                6: "Uplaod Car Pics",
                7:  "Preview Form"

            },
            step:1,
           
        }
    },
    computed:{
            getTitle(){
                return this.title[this.step]
            }
    
    },
     methods:{
        addCarInfo(payload){
            this.step=payload.step;
        },
    }

}
</script>
<template>
    <Card>
        <template #title>
            {{getTitle}}
        </template>
        <template #content>
          
            <car-info4  v-if="step==1"   @add-carInfo="addCarInfo"  />
            <engine-info v-if="step==2"   @add-carInfo="addCarInfo"  />
            <seller-info v-if="step==3"   @add-carInfo="addCarInfo"  />
           
        </template>
       
    </Card>
</template>