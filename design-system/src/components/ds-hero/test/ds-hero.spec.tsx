import { newSpecPage } from '@stencil/core/testing';
import { DsHero } from '../ds-hero';

describe('ds-hero', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsHero],
      html: `<ds-hero></ds-hero>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-hero>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-hero>
    `);
  });
});
