export class Config {
    static URL =
        'https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=';
    static DEV_API_KEY = '1c896e0b8f8cb83c6c4c85fc3a0295c0';
    static TITLE = 'Poster Generator';
    static DEFAULT_ARTIST = 'Tame Impala';
    static DEFAULT_ALBUM = 'Currents';
    static DEFAULT_DURATION = '00:00:00';
    static DEFAULT_TRACKLIST = [
        'Track Name',
        'Track Name',
        'Track Name',
        'Track Name',
        'Track Name',
        'Track Name',
        'Track Name',
        'Track Name',
        'Track Name',
    ];
    static DEFAULT_TAGS = ['Genre', 'Genre', 'Genre'];
    static DEFAULT_HEIGHT = 17;
    static DEFAULT_WIDTH = 11;
    static DEFAULT_BACKGROUND = '#ffffff';
    static DEFAULT_COLOR = '#000000';
}
