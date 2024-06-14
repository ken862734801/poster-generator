import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/home.page';
import { Config } from '@/configs';

test('User can search for an album', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();

    /* Wait page to load */
    await page.waitForTimeout(2000);
    await homePage.posterTitle.waitFor({ state: 'visible' });
    await expect(homePage.posterTitle).toContainText(Config.DEFAULT_ALBUM);

    /* Search for new album */
    await homePage.enterArtistValue(Config.TEST_ARTIST);
    await page.waitForTimeout(2000);
    await homePage.enterAlbumValue(Config.TEST_ALBUM);
    await page.waitForTimeout(2000);
    await homePage.clickSearchButton();

    /* Wait for new poster to appear */
    await homePage.posterTitle.waitFor({ state: 'visible' });
    await expect(homePage.posterTitle).toContainText(Config.TEST_ALBUM);
    await expect(homePage.posterArtist).toContainText(Config.TEST_ARTIST);
    await page.waitForTimeout(2000);
});
