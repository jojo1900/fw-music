import { createApp } from 'vue';
import Loading from './loading'
const loadingDirective = {
    mounted(el, binding) {
        const app = createApp(Loading)
        
    },
    update(el, binding) {

    }

}