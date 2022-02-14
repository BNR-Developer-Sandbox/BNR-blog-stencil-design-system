import { newSpecPage } from '@stencil/core/testing';
import { DsForm } from '../ds-form';

describe('ds-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsForm],
      html: `<ds-form></ds-form>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-form>
    `);
  });
});
