import { RouterLoadingPage } from './app.po';

describe('router-loading App', function() {
  let page: RouterLoadingPage;

  beforeEach(() => {
    page = new RouterLoadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
