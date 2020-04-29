import { By as _By, ShadowRoot as _ShadowRoot, UtamBasePageObject as _UtamBasePageObject, ActionableUtamElement as _ActionableUtamElement, WebDriver as _WebDriver, WebElement as _WebElement, Locator as _Locator } from '@utam/core';
export default class Tab extends _UtamBasePageObject {
    constructor(driver: _WebDriver, element?: _WebElement, locator?: _Locator);
    getTabsElement(): Promise<_ActionableUtamElement>;
}