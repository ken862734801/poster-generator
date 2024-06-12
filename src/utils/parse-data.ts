import { Config } from '@/configs';
import {
    currentDate,
    currentYear,
    formatDuration,
    formatReleaseDate,
} from './date-functions';

export type AlbumData = {
    artist?: string;
    album?: string;
    image?: string;
    tracklist?: any;
    duration?: string;
    label?: string;
    tags?: any;
    date?: string;
    year?: string | number;
};

export const parseData = (data: any) => {
    const parsedData: AlbumData = {};

    if (data.album.name) {
        parsedData.album = data.album.name;
    } else {
        console.warn('Failed to retrieve album name.');
    }

    if (data.album.artist) {
        parsedData.artist = data.album.artist;
    } else {
        console.warn('Failed to retrieve album artist.');
    }

    if (data.album.image) {
        parsedData.image = data.album.image[5]['#text'].replace('/300x300', '');
    } else {
        console.warn('Failed to retrieve album cover art.');
    }

    if (data.album.tracks) {
        let seconds = 0;
        let i;
        for (i = 0; i < data.album.tracks.track.length; i++) {
            seconds += data.album.tracks.track[i].duration;
            parsedData.duration = formatDuration(seconds);
        }
    } else {
        parsedData.duration = Config.DEFAULT_DURATION;
        console.warn('Failed to retrieve album duration.');
    }

    if (data.album.tracks && data.album.tracks.track.length > 0) {
        let songs = [];
        let i;
        for (i = 0; i < data.album.tracks.track.length; i++) {
            let song = data.album.tracks.track[i].name;
            songs.push(`${i + 1}. ${song}`);
        }
        parsedData.tracklist = songs;
    } else {
        parsedData.tracklist = Config.DEFAULT_TRACKLIST;
        console.warn('Failed to retrieve album tracklist.');
    }

    if (data.album.tags && data.album.tags.tag.length > 0) {
        let genres = [];
        let i;
        for (i = 0; i < data.album.tags.tag.length; i++) {
            let genre = data.album.tags.tag[i].name;
            genres.push(genre);
        }
        parsedData.tags = genres.slice(0, 3);
    } else {
        parsedData.tags = Config.DEFAULT_TAGS;
        console.warn('Failed to retrieve album tags.');
    }

    if (data.album.wiki && data.album.wiki.content) {
        const content = data.album.wiki.content;
        const formattedReleaseDate = formatReleaseDate(content);
        parsedData.date = formattedReleaseDate.releaseDate;
        parsedData.year = formattedReleaseDate.releaseYear;
    } else {
        parsedData.date = currentDate;
        parsedData.year = currentYear;

        console.warn('Failed to retrieve album wiki content.');
    }
    parsedData.label = Config.DEFAULT_LABEL;

    return parsedData;
};
