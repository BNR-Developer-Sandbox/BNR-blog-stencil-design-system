import { newE2EPage } from '@stencil/core/testing';

describe('ds-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-form></ds-form>');

    const element = await page.find('ds-form');
    expect(element).toHaveClass('hydrated');
  });
});
