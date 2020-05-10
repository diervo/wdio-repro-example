
function monkeyPatchShadow() {
    const elementProto = require('webdriverio/build/commands/element');
    elementProto.shadow$ = async function _monkeyPatchedShadow() {
        const { sessionMap } = require('devtools');
        const { ELEMENT_KEY } = require('webdriverio/build/constants');

        const sessionObj = sessionMap.get(browser.sessionId);
        const driver = sessionObj.session;
        const elementStore = driver.elementStore;
        const elementReference = this[ELEMENT_KEY];
        const puppeteerHandle = elementStore.get(elementReference);

        const elementHandle = await puppeteerHandle.evaluateHandle(function (element) {
            if (element.shadowRoot) {
                return element.shadowRoot.querySelector('#tabs');
            }
        }, puppeteerHandle);
        
        if (!elementHandle) {
            throw new Error('Unable to find a shadowRoot within this element');
        }

        // Creates a copy of this element to not mutate the original one
        const elementCopy = await browser.$(this);

        // Set the element internals to the new ElementHandle recovered
        const newElementReference = elementStore.set(elementHandle);
        elementCopy[ELEMENT_KEY] = newElementReference;
        elementCopy.elementId = newElementReference;

        return elementCopy;
    }
}

describe('test',() => {

    beforeAll(async () => {        
        monkeyPatchShadow();
    });

    it('PageObject is created correctly', async () => {
        await browser.url('https://rawgit.com/ebidel/2d2bb0cdec3f2a16cf519dbaa791ce1b/raw/fancy-tabs-demo.html');
        const fancyTabs = await browser.$('fancy-tabs');
        const tabs = await fancyTabs.shadow$('#tabs');
        const id = await tabs.getAttribute('id');
        expect(id).toBe('tabs'); // works

    });
});
