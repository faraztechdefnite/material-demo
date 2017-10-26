import { BongtechsRestaurantMaterialPage } from './app.po';

describe('bongtechs-restaurant-material App', () => {
  let page: BongtechsRestaurantMaterialPage;

  beforeEach(() => {
    page = new BongtechsRestaurantMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
