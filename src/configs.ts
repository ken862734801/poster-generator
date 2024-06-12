export class Config {
    static URL =
        'https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=';
    static DEV_API_KEY = 'a961cf7c34546fbbc73f9fc61ae62758';
    static SHARED_SECRET = '5e60b0acbb05bf188fed0f5065c4c29e'
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
    static DEFAULT_LABEL = "Label";
    static DEFAULT_TAGS = ['Genre', 'Genre', 'Genre'];
    static DEFAULT_HEIGHT = 17;
    static DEFAULT_WIDTH = 11;
    static DEFAULT_BACKGROUND = '#ffffff';
    static DEFAULT_COLOR = '#000000';
}
