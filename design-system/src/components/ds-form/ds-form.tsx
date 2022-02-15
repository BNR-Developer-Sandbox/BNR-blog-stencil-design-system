import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-form',
  styleUrl: 'ds-form.css',
  shadow: true,
})
export class DsForm {
  render() {
    return (
      <Host>
        <form>
          <slot></slot>
          <slot name="submit"></slot>
        </form>
      </Host>
    );
  }
}
