import { Ang2Play1Page } from './app.po';

describe('ang2-play1 App', function() {
  let page: Ang2Play1Page;

  beforeEach(() => {
    page = new Ang2Play1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
