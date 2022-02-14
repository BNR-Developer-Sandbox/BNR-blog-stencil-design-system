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
        <slot></slot>
      </Host>
    );
  }

}
