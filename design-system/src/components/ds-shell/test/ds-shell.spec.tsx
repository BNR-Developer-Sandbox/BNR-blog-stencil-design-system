import { newSpecPage } from '@stencil/core/testing';
import { DsShell } from '../ds-shell';

describe('ds-shell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsShell],
      html: `<ds-shell></ds-shell>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-shell>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-shell>
    `);
  });
});
