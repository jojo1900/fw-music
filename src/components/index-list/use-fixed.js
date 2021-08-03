import {ref} from 'vue'
export default function useFixed(props) {
  const scrollY = ref(0)

  const onScroll = (pos) => {
    scrollY.value = -pos.y
  }
  return {
    groupRef,
    onScroll,
    fixedTitle,
    fixedStyle,
    currentIndex
  };
}
