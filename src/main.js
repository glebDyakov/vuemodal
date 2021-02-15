import { createApp } from 'vue'
import App from './App.vue'
// import alertMixin from './alertMixin'

// const alertMixin = {
//     data(){
//         return {
//             alert: false
//         }
//     },
//     methods:{
//         toggleAlert(){
//             this.alert = !this.alert
//         }
//     }
// }

// createApp(App).mixin(alertMixin).mount('#app')
// createApp(App).directive('focus',{
//     mounted(el){
//         console.log('Focus el',el)
//         el.focus()
//     }
// }).mount('#app')
createApp(App).mount('#app')