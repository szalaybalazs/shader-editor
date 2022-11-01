import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';
import chromium from 'chrome-aws-lambda';

const shaders = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  const browser = await puppeteer.launch({
    defaultViewport: { width: 1024, height: 1024 },
    args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  });

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

export default shaders;
