import {
  createApp
} from 'vue';
import Loading from './loading'
const loadingDirective = {
  mounted(el, binding) {
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    //把实例保存下来
    el.instance = instance
  },
  update(el, binding) {
    if (el.value !== el.oldValue) {
      el.value ? append(el) : remove(el)
    }
  }


}

function append(el) {
  el.appendChild(el.instance.$el)
}

function remove(el) {
  el.removeChild(el.instance.$el)
}
