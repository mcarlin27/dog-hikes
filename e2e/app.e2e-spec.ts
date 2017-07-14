import { DogHikesPage } from './app.po';

describe('dog-hikes App', () => {
  let page: DogHikesPage;

  beforeEach(() => {
    page = new DogHikesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
