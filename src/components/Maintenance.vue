<template>
  <div class="content d-flex flex-column align-items-center justify-content-evenly">
    <h1 class="text-white lowercase fw-bold text-center align-middle">
      {{ props.message }}
    </h1>
  </div>

  <footer>
    <a
      href="https://www.instagram.com/igorabrantes1/?hl=pt-br"
      rel="noreferrer"
      target="_blank"
      class="p-0 m-0 me-3"
      ><div
        style="
          display: inline-block;
          max-width: 100%;
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        "
      >
        <div style="box-sizing: border-box; display: block; max-width: 100%">
          <IconInstagram
            style="max-width: 100%; display: block; margin: 0; border: none; padding: 0"
            aria-hidden="true"
            role="presentation"
            width="40"
            height="40"
            color="#c7b6fc"
          />
        </div>
        <IconInstagram
          decoding="async"
          style="
            visibility: inherit;
            position: absolute;
            inset: 0px;
            box-sizing: border-box;
            padding: 0px;
            border: none;
            margin: auto;
            display: block;
            width: 0px;
            height: 0px;
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
          "
          width="40"
          height="40"
          color="#c7b6fc"
        /></div
    ></a>
    <a
      href="https://www.linkedin.com/in/igorabrantes/"
      rel="noreferrer"
      target="_blank"
      class="p-0 m-0 ms-3"
    >
      <div
        style="
          display: inline-block;
          max-width: 100%;
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        "
      >
        <div style="box-sizing: border-box; display: block; max-width: 100%">
          <IconLinkedin
            style="max-width: 100%; display: block; margin: 0; border: none; padding: 0"
            aria-hidden="true"
            role="presentation"
            width="40"
            height="40"
            color="#c7b6fc"
          />
        </div>
        <IconLinkedin
          decoding="async"
          style="
            visibility: inherit;
            position: absolute;
            inset: 0px;
            box-sizing: border-box;
            padding: 0px;
            border: none;
            margin: auto;
            display: block;
            width: 0px;
            height: 0px;
            min-width: 100%;
            max-width: 100%;
            min-height: 100%;
            max-height: 100%;
          "
          width="40"
          height="40"
          color="#c7b6fc"
        />
      </div>
    </a>
  </footer>
</template>

<script setup lang="ts">
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";

const props = defineProps({
  message: {
    type: String,
    default: "Site em construção",
  },
});
</script>

<style scoped>
h1 {
  font-size: 45px;
  margin: 0;
  padding: 0;
  padding-bottom: 15px;
}
div.content {
  width: 100vw;
  height: 100vh;
  background-image: url("/background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% center;
}
footer {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}
</style>
