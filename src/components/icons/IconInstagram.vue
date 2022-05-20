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
        d="M93 470 c-44 -14 -80 -61 -89 -115 -12 -82 -1 -258 19 -288 36 -56
58 -62 217 -62 159 0 181 6 217 62 26 40 26 306 0 346 -35 54 -60 62 -202 64
-71 1 -144 -2 -162 -7z m314 -63 c28 -27 28 -28 28 -167 0 -139 0 -140 -28
-167 -26 -27 -32 -28 -144 -31 -207 -6 -223 8 -223 202 0 185 13 197 212 194
125 -3 128 -4 155 -31z"
      />
      <path d="M343 374 c-3 -8 -1 -20 5 -26 16 -16 42 -2 42 22 0 24 -38 28 -47 4z" />
      <path
        d="M178 344 c-77 -41 -75 -169 2 -209 84 -43 180 13 180 105 0 92 -99
149 -182 104z m117 -49 c33 -32 33 -78 0 -110 -49 -50 -135 -15 -135 55 0 19
9 40 25 55 15 16 36 25 55 25 19 0 40 -9 55 -25z"
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
