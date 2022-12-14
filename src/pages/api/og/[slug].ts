import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer-core';
import chrome from 'chrome-aws-lambda';

const banner = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { slug } = req.query;

    // const browser = await puppeteer.launch({
    //   args: chrome.args,
    //   executablePath: await chrome.executablePath,
    //   headless: chrome.headless,
    //   defaultViewport: { width: 1024, height: 1024 },
    // });

    // /tmp/chromium [class Chromium]

    const browser = await puppeteer.launch(
      process.env.NODE_ENV === 'production'
        ? {
            args: chrome.args,
            executablePath: await chrome.executablePath,
            headless: chrome.headless,
            defaultViewport: { width: 1024, height: 1024 },
          }
        : { defaultViewport: { width: 1024, height: 1024 } },
    );

    const page = await browser.newPage();

    const url = `https://shader-editor.vercel.app/${slug}/full?clear=true&banner=true`;

    console.log(url);

    await page.goto(url);

    const screenshot = await page.screenshot();

    await page.close();
    console.log('pupeteer');

    await browser.close();

    res.setHeader('Content-Type', 'image/png');
    res.send(screenshot);
  } catch (error) {
    res.status(502).json({ error: error.message });
  }
};

export default banner;
