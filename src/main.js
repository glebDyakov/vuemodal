import { createApp } from 'vue'
import App from './App.vue'
import translatePlugin from './translatePlugin'
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

const app = createApp(App)

const ru = {
    app: {
        title:'Текст со сменной языка',
        changeBtn: 'Переключить язык'
    }
}

const en = {
    app: {
        title:'Text with change of language',
        changeBtn: 'Toggle language'
    }
}

app.use(translatePlugin, { ru, en })

app.mount('#app')