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
        {/*<slot name="top"></slot>*/}
        {/*<slot></slot>*/}
        {/*<slot name="bottom"></slot>*/}
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
