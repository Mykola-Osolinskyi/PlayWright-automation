const {test, expect} = require('@playwright/test')
import { HomePage } from '../pages/homePage';



test.describe('Currently testing "DOU UA" page', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.open('https://dou.ua/');
  });

  test('Перевірка коректності назви сторінки', async ({ page }) => {  
    const homePage = new HomePage(page);
    await homePage.open();

    const title = await homePage.getTitle();
    expect(title).toBe('Спільнота програмістів | DOU')
  });

  test('Переходить на коректну сторінку після натискання на "Топ-50"', async ({ page }) => {
    // Click the Топ-50 link.
   //await page.getByRole('link', { name: 'Топ-50' }).click();

    // Expects page to have a heading with the name of 'Топ-50 ІТ-компаній України'.
    //await expect(page.getByRole('heading', { name: 'Топ-50 ІТ-компаній України' })).toBeVisible();
    const homePage = new HomePage(page);

    await homePage.clickBySelector('a[href="https://dou.ua/lenta/articles/top-50-summer-2023/?from=doufp"]');

     expect(homePage.page.url()).toBe('https://dou.ua/lenta/articles/top-50-summer-2023/?from=doufp')
  });

  test('Verify the presence of "Форум" link', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.open();

    const forumLinkExists = await homePage.isForumLinkVisible();
    expect(forumLinkExists).toBeTruthy();
  });

  test('Navigate to the "Форум" page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.navigateToForum();
    const forumTitle = await homePage.getTitle();
    expect(forumTitle).toBe('Форум програмістів | DOU');
  });

  test('should return Recruitment Test', async ({page}) => {

    const homePage = new HomePage(page);

    await homePage.clickBySelector('a[href="https://dou.ua/calendar/"]');

     expect(homePage.page.url()).toBe('https://dou.ua/calendar/')
  });

});
