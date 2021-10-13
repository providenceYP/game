import React from 'react';
import { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
// import { getInitialState } from './store/getInitialState';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import App from 'components/App';

import favicon from 'static/favicon.ico';

function getPageHtml(params: {
  content: string;
  data?: Record<string, unknown>;
}) {
  const { content } = params;

  const html = renderToStaticMarkup(
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <title>Game</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />

        <link rel="icon" href={favicon} />
      </head>

      <body>
        <noscript>
          If you&apos;re seeing this message, that means
          <strong>JavaScript has been disabled on your browser</strong>, please
          <strong>enable JS</strong> to make this app work.
        </noscript>

        <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script src="/main.js" />
      </body>
    </html>,
  );

  return `<!doctype html>${html}`;
}
export default (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};
  // const { store } = configureStore(getInitialState(location), location);

  const jsx = (
    <StaticRouter context={context} location={location}>
      <App />
    </StaticRouter>
  );
  const reactHtml = renderToString(jsx);
  // const reduxState = {};

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  res
    .status(context.statusCode || 200)
    .send(getPageHtml({ content: reactHtml }));
};
