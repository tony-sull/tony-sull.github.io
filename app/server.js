import polka from 'polka';
import compression from 'compression';
import sapper from 'sapper';
// import { Store } from 'svelte/store.js';
import { MyStore } from './store';
import serve from 'serve-static';
import { routes } from './manifest/server.js';
import themes from '../routes/_themes.js';

const firstTimeThemes = themes.filter(theme => theme.firstTime);

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		serve('assets'),
		sapper({
			routes,
			store: request => new MyStore()
		})
	)
	.listen(process.env.PORT);
