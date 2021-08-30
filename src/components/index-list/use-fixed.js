import {
  ref,
  watch,
  nextTick,
  computed
} from "vue";
export default function useFixed(props) {
  const groupRef = ref(null);
  const listHeights = ref([]);
  const scrollY = ref(0);
  const currentIndex = ref(0);

  const fixedTitle = computed(() => {
    console.log("currentIndex", currentIndex.value);
    console.log(111);
    if (currentIndex.value === 0) {
      return "";
    }
    const currentGroup = props.data[currentIndex.value];
    return currentGroup ? currentGroup.title : "";
  });

  watch(
    () => props.data,
    async () => {
      await nextTick();
      calculate();
    }
  );
  watch(scrollY, newY => {
    console.log(newY, listHeights.value);
    for (let i = 0; i < listHeights.value.length - 1; i) {
      if (newY > listHeights.value[i] && newY <= listHeights.value[i + 1]) {
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
    listHeightsVal.push(height);
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      //这里要累加；clientHeight指容器高度
      height += element.clientHeight;
      listHeightsVal.push(height);
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
