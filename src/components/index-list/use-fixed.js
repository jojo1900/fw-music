import {ref,watch,nextTick} from 'vue'
export default function useFixed(props) {
  const groupRef = ref(null)
  const listHeights = ref([])

  watch(() => { props.data }, async () => {
    await nextTick()
    calculate()
  })
  function onScroll(params) {

  }

  function calculate() {
    const list = groupRef.value.children
    const listHeightsVal = listHeights.value
    listHeightsVal.length = 0
    let height = 0
    listHeights.push(height)
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      //这里要累加；clientHeight指容器高度
      height += element.clientHeight
      listHeights.push(height)
    }
  }



  return {
    groupRef,
    onScroll,
    // fixedTitle,
    // fixedStyle,
    // currentIndex
  };
}
