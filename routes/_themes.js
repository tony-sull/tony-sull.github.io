const themes = [
    {
        name: 'blue',
        firstTime: true
    },
    {
        name: 'cyan',
        firstTime: true
    },
    {
        name: 'blue-alt'
    },
    {
        name: 'cyan-alt'
    },
    {
        name: 'green'
    },
    {
        name: 'brown'
    },
    {
        name: 'orange'
    },
    {
        name: 'crimson-red'
    },
    {
        name: 'red'
    },
    {
        name: 'red-alt'
    },
    {
        name: 'indigo-alt'
    },
    {
        name: 'grey-alt'
    },
    {
        name: 'material-cyan'
    },
    {
        name: 'material-brown'
    },
    {
        name: 'material-grey',
        firstTime: true
    },
    {
        name: 'material-grey-alt'
    }
];

export default themes;

export function getRandomTheme(currentTheme) {
    const filteredThemes = themes.filter((theme) => theme.name !== currentTheme);
    const index = Math.floor(
        (Math.random() * (filteredThemes.length))
    );
    return filteredThemes[index];
}