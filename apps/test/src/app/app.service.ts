import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class AppService {
  async getData(): Promise<void> {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://developer.chrome.com/');

     // Type into search box
    await page.type('.search-box__input', 'automate beyond recorder');

    // Wait and click on first result
    const searchResultSelector = '.search-box__link';
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);

    // Localte the full title with a unique string
    const textSelector = await page.waitForSelector(
      'text/Customize and automate'
    );
    const fullTitle = await textSelector.evaluate(el => el.textContent);

    // Print the full title
    console.log('TestThe title of this blog post is "%s".', fullTitle);

    await browser.close();
  }
}
