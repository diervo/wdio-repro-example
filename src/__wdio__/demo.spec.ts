describe('first test', () => {
    it('PageObject is created correctly', async () => {
        await browser.url('https://rawgit.com/ebidel/2d2bb0cdec3f2a16cf519dbaa791ce1b/raw/fancy-tabs-demo.html');
        const element = await browser.findElement('css selector', 'fancy-tabs');
        expect(element).toBeDefined();
    });
});
