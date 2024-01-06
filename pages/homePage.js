const playwrite = require('@playwright/test')

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page
  }

    async open() {
    await this.page.goto('https://dou.ua/');
  }

   async getTitle() {
    return await this.page.title();
   }
  
    async isForumLinkVisible() {
    // Перевірка видимості елемента "Форум"
    const forumLink = await this.page.$('a[href="https://dou.ua/forums/"]');
    return forumLink !== null;
  }

  async navigateToForum() {
    // Клік на елементі "Форум"
    const forumLink = await this.page.$('a[href="https://dou.ua/forums/"]');
    if (forumLink) {
      await forumLink.click();
    }
  }

  async clickBySelector(selector) {
    await this.page.click(selector);
  }
}
