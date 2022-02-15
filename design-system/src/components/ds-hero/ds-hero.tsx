import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ds-hero',
  styleUrl: 'ds-hero.css',
  shadow: true,
})
export class DsHero {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
