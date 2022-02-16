import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    appName: "Svelte App",
    fieldLabel: "Your Location",
    fieldName: "location",
    submitLabel: "Where you at?",
    handleSubmitted: (event) => {
      event.stopPropagation();
      const { detail } = event;
      const { location } = detail;
      alert(`Where's ${location}?`);
    },
  },
});

export default app;
