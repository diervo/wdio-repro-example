import { By as _By, ShadowRoot as _ShadowRoot, UtamBasePageObject as _UtamBasePageObject, ActionableUtamElement as _ActionableUtamElement } from '@utam/core';

async function _utam_get_tabs(driver, root, ) {
    let element = root;
    element = new _ShadowRoot(driver, element);
    return element.findElement(_By.css(`#tabs`));
}

export default class Tab extends _UtamBasePageObject {
    constructor(driver, element, locator = _By.css('fancy-tabs')) {
        super(driver, element, locator);
    }

    async getTabsElement() {
        const driver = this.driver;
        const root = await this.getRootElement();
        const element = await _utam_get_tabs(driver, root, );
        return new _ActionableUtamElement(driver, element);
    }
}