import { FeathersChatAngularPage } from './app.po';

describe('feathers-chat-angular App', () => {
  let page: FeathersChatAngularPage;

  beforeEach(() => {
    page = new FeathersChatAngularPage();
  });

  xit('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Log in or signup');
  });
});
