export class Config {
    /* APP "VARIABLES" */
    static API_URL =
        'https://ken862734801.pythonanywhere.com/search?';
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
    static DEFAULT_LABEL = 'Label';
    static DEFAULT_TAGS = ['Genre', 'Genre', 'Genre'];
    static DEFAULT_HEIGHT = 17;
    static DEFAULT_WIDTH = 11;
    static DEFAULT_BACKGROUND = '#ffffff';
    static DEFAULT_COLOR = '#000000';

    /* TEST "VARIABLES" */
    static TEST_ARTIST = 'Mac Miller';
    static TEST_ALBUM = 'Swimming';
    static PRODUCTION_URL = 'https://poster-generator-eight.vercel.app/'
}
