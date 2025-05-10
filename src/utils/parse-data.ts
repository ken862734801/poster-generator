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
    image_url?: string;
    tracks?: any;
    duration?: string;
    label?: string;
    genres?: any;
    date?: string;
    year?: string | number;
};