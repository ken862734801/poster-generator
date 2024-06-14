import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/home.page';
import { Config } from '@/configs';

test('User can search for an album', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.enterArtistValue(Config.TEST_ARTIST);
    await homePage.enterAlbumValue(Config.TEST_ALBUM);
    await homePage.clickSearchButton();
    await expect(homePage.posterTitle).toContainText(Config.DEFAULT_ALBUM);
    await expect(homePage.posterTitle).toContainText(Config.TEST_ALBUM);
});
