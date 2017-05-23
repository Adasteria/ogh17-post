import { Ogh18Page } from './app.po';

describe('ogh18 App', () => {
  let page: Ogh18Page;

  beforeEach(() => {
    page = new Ogh18Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
