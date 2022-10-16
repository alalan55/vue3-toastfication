import CardContainer from "./components/CardContainer.vue";
export default {
  install: (app, options) => {
    app.component("vue-toast", CardContainer);

    app.directive("type-toast", (el, binding, vnode) => {
      el.classList.add(binding.arg);
    });

    app.mixin({
      data() {
        return {
          timer: options.config.timeStamp || 4000,
        };
      },
      created() {
        console.log(this.timer);
      },
    });
    const action = () => alert("Do some");

    app.provide("action", action);
  },
};
export { CardContainer };
