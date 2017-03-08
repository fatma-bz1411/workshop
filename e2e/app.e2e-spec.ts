import { FlexboxAufgabePage } from './app.po';

describe('flexbox-aufgabe App', () => {
  let page: FlexboxAufgabePage;

  beforeEach(() => {
    page = new FlexboxAufgabePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
