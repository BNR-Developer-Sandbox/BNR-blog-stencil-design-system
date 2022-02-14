import { newE2EPage } from '@stencil/core/testing';

describe('ds-hero', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-hero></ds-hero>');

    const element = await page.find('ds-hero');
    expect(element).toHaveClass('hydrated');
  });
});
