import { JoinnusAngularCliPage } from './app.po';

describe('joinnus-angular-cli App', () => {
  let page: JoinnusAngularCliPage;

  beforeEach(() => {
    page = new JoinnusAngularCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
