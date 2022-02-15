import { Component, h } from '@stencil/core';
import 'design-system/dist/components/ds-shell';
import 'design-system/dist/components/ds-hero';
import 'design-system/dist/components/ds-form';

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
