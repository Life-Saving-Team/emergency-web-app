import { EmergencyWebAppPage } from './app.po';

describe('emergency-web-app App', () => {
  let page: EmergencyWebAppPage;

  beforeEach(() => {
    page = new EmergencyWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
