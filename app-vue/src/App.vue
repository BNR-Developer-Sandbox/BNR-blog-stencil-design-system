<script setup>
import "design-system/ds-shell";
import "design-system/ds-hero";
import "design-system/ds-form";
</script>

<template>
  <ds-shell>
    <h1 slot="header">Vue App</h1>
    <ds-hero>
      <ds-form>
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
