import { createApp } from "vue";
import Loading from "./loading";
import { addClass } from "@/assets/js/dom.js";
const relativeCls = "g-relative";

const loadingDirective = {
  mounted(el, binding) {
    // console.log('loading-directive-mounted');
    const app = createApp(Loading);
    const instance = app.mount(document.createElement("div"));
    //把实例保存下来
    if (!el.instance) {
      el.instance = instance;
    }
    const title = binding.arg;
    if (typeof title !== "undefined") {
      instance.setTitle(title);
    }
    //mounted时，把loading挂载上
    append(el);
  },
  updated(el, binding) {
    // console.log('loading-directive-updated');
    // console.log(binding.value, binding.oldValue);

    const title = binding.args;
    if (typeof title !== "undefined") {
      instance.setTitle(title);
    }
    if (binding.value !== binding.oldValue) {
      binding.value === true ? append(el) : remove(el);
    }
  }
};
export default loadingDirective;

function append(el) {
  const style = getComputedStyle(el);
  if (["absolute", "fixed", "relative"].indexOf(style.position) === -1) {
    addClass(el, relativeCls);
  }
  el.appendChild(el.instance.$el);
}

function remove(el) {
  if (el.instance.$el.parentElement === el) {
    el.removeChild(el.instance.$el);
  }
}
