const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: {
        text: "Hello Vue!",
        class: "text-center",
      },
    };
  },
}).mount("#app");
