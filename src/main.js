import './main.css'
import { createApp } from 'vue'
import vReveal from './directives/reveal'
import App from './App.vue'

const app = createApp(App)
app.directive('reveal', vReveal)
app.mount('#app')