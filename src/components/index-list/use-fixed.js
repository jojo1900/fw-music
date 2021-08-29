import { ref, watch, nextTick, computed } from "vue";
export default function useFixed(props) {
  const groupRef = ref(null);
  const listHeights = ref([]);
  const scrollY = ref(0);
  const currentIndex = ref(0);

  const fixedTitle = computed(() => {
    console.log("currentIndex", currentIndex.value);
    if (currentIndex.value === 0) {
      return "";
    }
    const currentGroup = listHeights[currentIndex.value];
    return currentGroup ? currentGroup.title : "";
  });

  watch(
    () => {
      props.data;
    },
    async () => {
      await nextTick();
      calculate();
    }
  );
  watch(scrollY, newY => {
    for (let i = 0; i < listHeights.length - 1; i) {
      if (newY > listHeights[i] && newY <= listHeights[i + 1]) {
        currentIndex.value = i;
      }
    }
  });
  function onScroll(pos) {
    scrollY.value = -pos.y;
  }

  function calculate() {
    const list = groupRef.value.children;
    const listHeightsVal = listHeights.value;
    listHeightsVal.length = 0;
    let height = 0;
    listHeights.push(height);
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      //这里要累加；clientHeight指容器高度
      height += element.clientHeight;
      listHeights.push(height);
    }
  }

  return {
    groupRef,
    onScroll,
    fixedTitle,
    // fixedStyle,
    currentIndex
  };
}
