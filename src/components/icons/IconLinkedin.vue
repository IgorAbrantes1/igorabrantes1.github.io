<template>
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width"
    :height="props.height"
    viewBox="0 0 48 48"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
      :fill="props.color"
      stroke="none"
    >
      <path
        d="M12 468 c-17 -17 -17 -439 0 -456 17 -17 439 -17 456 0 17 17 17 439
0 456 -17 17 -439 17 -456 0z m120 -65 c31 -28 17 -73 -23 -73 -19 0 -49 25
-49 41 0 10 37 49 47 49 3 0 15 -7 25 -17z m231 -104 c36 -16 47 -50 47 -144
l0 -85 -35 0 -35 0 0 66 c0 72 -12 104 -38 104 -33 0 -42 -22 -42 -98 l0 -73
-37 3 -38 3 0 110 0 110 38 3 c22 2 37 -1 37 -8 0 -7 8 -5 22 4 27 19 48 20
81 5z m-223 -114 l0 -115 -35 0 -35 0 0 115 0 115 35 0 35 0 0 -115z"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: "48",
  },
  height: {
    type: String,
    default: "48",
  },
  color: {
    type: String,
    default: "#c7b6fc",
  },
});
</script>
