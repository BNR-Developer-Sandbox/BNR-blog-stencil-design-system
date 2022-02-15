import { Component, h } from '@stencil/core';
import { DsShell } from 'design-system/dist/components/ds-shell'
import { DsHero } from 'design-system/dist/components/ds-hero'
import { DsForm } from 'design-system/dist/components/ds-form'

console.log('Design DsShell\n:', DsShell)
console.log('Design DsHero\n:', DsHero)
console.log('Design DsForm\n:', DsForm)

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <ds-shell>
        <h1 slot="top">Stencil App</h1>
        <ds-hero>
          <ds-form>
            <label>
              Your Expertise:
              <br />
              <input type="text" name="expertise" />
            </label>
            <br />
            <slot slot="submit">
              <input type="submit" value="Say Something" />
            </slot>
          </ds-form>
        </ds-hero>
        <slot slot="bottom">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </slot>
      </ds-shell>
    );
  }
}
