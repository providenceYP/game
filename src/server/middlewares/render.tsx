import React from 'react';
import { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { Provider } from 'react-redux';

import { renderToStaticMarkup } from 'react-dom/server';

import App from 'components/App';
import configureStore from 'store';

import favicon from 'static/favicon.ico';
import { renderObject } from 'utils/renderObject';

function getPageHtml(params: {
  content: JSX.Element;
  data?: Record<string, unknown>;
  store?: ReturnType<typeof configureStore>;
}) {
  const { content, store } = params;

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

        <div id="app">{content}</div>

        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${renderObject(
              store.getState(),
            )}`,
          }}
        />

        <script src="/main.js" />
      </body>
    </html>,
  );

  return `<!doctype html>${html}`;
}
export default (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};
  const store = configureStore({});

  const content = (
    <Provider store={store}>
      <StaticRouter context={context} location={location}>
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  res.status(context.statusCode || 200).send(getPageHtml({ content, store }));
};
