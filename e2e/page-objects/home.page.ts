import { Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {}

    public artistInput = this.page.locator('input[id="artist-input"]');
    public albumInput = this.page.locator('input[id="album-input"]');
    public searchButton = this.page.locator('button[id="search-btn"]');
    public posterTitle = this.page.locator('h1');
    public posterArtist = this.page.locator('h2');

    async navigate() {
        await this.page.goto('/');
    }

    async enterArtistValue(text: string) {
        await this.artistInput.fill(text);
    }

    async enterAlbumValue(text: string) {
        await this.albumInput.fill(text);
    }

    async clickSearchButton() {
        await this.searchButton.click();
    }
}
