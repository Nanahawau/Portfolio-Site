export class DefaultSystemTheme {
    public static darkModeOn: boolean = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
}