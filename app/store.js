import { Store } from 'svelte/store.js';
import themes, { getRandomTheme } from '../routes/_themes.js';

const firstTimeThemes = themes.filter(theme => theme.firstTime);

export class MyStore extends Store {
    constructor(state = {}) {
        state.theme = state.theme || firstTimeThemes[Math.floor((Math.random() * (firstTimeThemes.length)))]
        super(state);
    }

    changeTheme() {
        const { theme } = this.get();
        this.set({
            theme: getRandomTheme(theme)
        });
    }
}