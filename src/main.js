import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from './components/UI'
const app = createApp(App)

components.forEach(comp =>{
	app.component(comp.name,comp)
})

app.use(router).mount('#app')
