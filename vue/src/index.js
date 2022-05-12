import { createApp, defineAsyncComponent, defineCustomElement } from "vue";
import Layout from "./Layout.vue";

const app = createApp(Layout);

(async function () {
  await import('app1/Header')
  await import('app2/Footer')

  // const header = defineCustomElement(App1);

  // console.log(App1)
  // const Button = defineAsyncComponent(() => import("home/Button"));

  // console.log(App1)
  // app.component("header-component", App1);
  
})()
// app.config.compilerOptions.isCustomElement = tag => tag.includes('-')
// window.customElements.define('header-component', header)
// app.config.compilerOptions.isCustomElement = tag => {
//   tag.startsWith('header-')
//   console.log(tag)
// }
// app.component("button-element", Button);

app.mount("#app");