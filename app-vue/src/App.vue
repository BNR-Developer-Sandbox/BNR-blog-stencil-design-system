<script setup>
import "design-system/ds-shell";
import "design-system/ds-hero";
import "design-system/ds-form";

function handleFormData(event) {
  event.stopPropagation();
  const { formData } = event;
  const data = Object.fromEntries(formData);
  const { view } = data;
  alert(`${view}!?! Wow! What a view!`);
}
</script>

<template>
  <ds-shell>
    <h1 slot="header">Vue App</h1>
    <ds-hero>
      <ds-form @formdata="handleFormData">
        <label>
          How's the view?:
          <br />
          <input type="text" name="view" />
        </label>
        <br />
        <slot slot="submit">
          <input type="submit" value="Looking good?" />
        </slot>
      </ds-form>
    </ds-hero>
    <span slot="footer">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </span>
  </ds-shell>
</template>

<style>
@import "@/assets/base.css";
</style>
