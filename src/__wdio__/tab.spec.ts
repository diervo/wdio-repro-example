import TabPageObject from 'wdio-repro-example/pageObjects/fancyTabs';

describe('first test',() => {
    it('PageObject is created correctly', async () => {
        await browser.url('https://rawgit.com/ebidel/2d2bb0cdec3f2a16cf519dbaa791ce1b/raw/fancy-tabs-demo.html');

        const tabPageObject = await utam.load(TabPageObject);   
        const tabElement = await tabPageObject.getInternalTabsElement();
        expect(tabElement).toBeDefined();

        // FIXME: bug for nested pages:
        // const tabs = await tabPageObject.getFirstTabElement();
        // console.log(tabs);
    });
});
