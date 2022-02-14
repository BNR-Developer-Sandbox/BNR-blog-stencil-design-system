import { newE2EPage } from '@stencil/core/testing';

describe('ds-shell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-shell></ds-shell>');

    const element = await page.find('ds-shell');
    expect(element).toHaveClass('hydrated');
  });
});
