import { Component, h } from '@stencil/core';
import 'design-system/ds-shell';
import 'design-system/ds-hero';
import 'design-system/ds-form';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  handleFormData(event) {
    event.stopPropagation();
    const { formData } = event;
    const data = Object.fromEntries(formData);
    const { expertise } = data;
    alert(`So you are good with ${expertise}...`);
  }
  render() {
    return (
      <ds-shell>
        <h1 slot="header">Stencil App</h1>
        <ds-hero>
          <ds-form onFormData={event => this.handleFormData(event)}>
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
        <span slot="footer">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </span>
      </ds-shell>
    );
  }
}
