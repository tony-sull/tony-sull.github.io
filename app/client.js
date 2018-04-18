import { init } from 'sapper/runtime.js';
//import { Store } from 'svelte/store.js';
import { MyStore } from './store';
import { routes } from './manifest/client.js';

// `routes` is an array of route objects injected by Sapper
init(document.querySelector('#sapper'), routes, {
    store: data => {
        return new MyStore(data)
    }
});

if (module.hot) module.hot.accept();