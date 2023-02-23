import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class AppService {
  async workingPuppeteerService(): Promise<void> {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://developer.chrome.com/');

    const placeholderText = await page.$eval('.search-box__input', el => el.getAttribute('placeholder'));

    console.log("Placeholder text is: " + placeholderText);

    await browser.close();
  }

  async notWorkingPuppeteerService(): Promise<void> {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://developer.chrome.com/');

    const placeholderText = await page.$eval('.search-box__input_NOT_EXIST', el => el.getAttribute('placeholder'));

    console.log("Placeholder text is: " + placeholderText);
    await browser.close();
  }
}
