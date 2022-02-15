import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    appName: "Svelte App",
    fieldLabel: "Your Location",
    fieldName: "location",
    submitLabel: "Where you at?",
  },
});

export default app;
