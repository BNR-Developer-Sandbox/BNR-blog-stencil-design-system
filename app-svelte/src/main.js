import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    appName: "Svelte App",
    fieldLabel: "Your Location",
    fieldName: "location",
    submitLabel: "Where you at?",
    handleFormData: (event) => {
      event.stopPropagation();
      const { formData } = event;
      const data = Object.fromEntries(formData);
      const { location } = data;
      alert(`Where's ${location}?`);
    },
  },
});

export default app;
