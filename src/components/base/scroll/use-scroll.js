import BScroll from '@better-scroll/core'
import ObserveDom from '@better-scroll/observe-dom'
import { onMounted, onUnmounted, ref } from 'vue'

//bscroll 在列表还没加载完全时，就开始计算父元素与子元素的高度，所以要监听dom，dom更新后动态再计算高度
BScroll.use(ObserveDom)
export default function useScroll(wrapperRef,options,emit){
    //声明一个scroll
    const scroll = ref(null)
    //mounted之后通过ref拿到挂载scroll的实例
    onMounted(() => {
        const scrollVal = scroll.value = new BScroll(wrapperRef.value, {
            observeDOM: true,
            ...options
        })
      if (options.probeType > 0){
        scrollVal.on('scroll', (pos) => {
          //派发一个事件
          emit('scroll',pos)
        })
      }
    })
    onUnmounted(() => {
        scroll.value.destroy()
    })
}
