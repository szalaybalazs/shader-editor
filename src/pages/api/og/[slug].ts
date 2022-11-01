import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer-core';
import chrome from 'chrome-aws-lambda';

const banner = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  console.log(await chrome.executablePath, chrome);
  // const browser = await puppeteer.launch({
  //   args: chrome.args,
  //   executablePath: await chrome.executablePath,
  //   headless: chrome.headless,
  //   defaultViewport: { width: 1024, height: 1024 },
  // });

  const browser = await puppeteer.launch(
    process.env.NODE_ENV === 'production'
      ? {
          args: chrome.args,
          executablePath: await chrome.executablePath,
          headless: chrome.headless,
        }
      : {},
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
};

export default banner;
