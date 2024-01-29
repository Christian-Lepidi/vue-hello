const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: {
        text: "Hello Vue!",
        class: "text-center",
      },
      image: {
        logo: "Logo-Vuejs.png",
      },
    };
  },
}).mount("#app");
