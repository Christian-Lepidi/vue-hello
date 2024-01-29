const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: {
        text: "Hello Vue!",
        class: "text-center",
      },
      logo: "Logo-Vuejs.png",
    };
  },
}).mount("#app");
