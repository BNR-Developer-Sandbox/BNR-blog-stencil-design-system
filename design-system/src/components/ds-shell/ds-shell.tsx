import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-shell',
  styleUrl: 'ds-shell.css',
  shadow: true,
})
export class DsShell {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
