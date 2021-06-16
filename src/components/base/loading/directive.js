import {
  createApp
} from 'vue';
import Loading from './loading'
const loadingDirective = {
  mounted(el, binding) {
    console.log('loading-directive-mounted');
    console.log(el);
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    //把实例保存下来
    if (!el.instance) {
      el.instance = instance
    }
    append(el)
  },
  updated(el, binding) {
    console.log('loading-directive-updated');
    console.log(binding.value,binding.oldValue);
    if (binding.value !== binding.oldValue) {
      binding.value===true ? append(el) : remove(el)
    }
  }


}
export default loadingDirective

function append(el) {
  el.appendChild(el.instance.$el)
}

function remove(el) {

  if (el.instance.$el.parentElement === el) {
    el.removeChild(el.instance.$el)
  }
}
