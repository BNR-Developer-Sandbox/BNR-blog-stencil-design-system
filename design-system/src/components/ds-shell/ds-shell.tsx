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
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </Host>
    );
  }
}
