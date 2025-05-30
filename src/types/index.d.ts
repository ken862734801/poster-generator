interface Data {
    album: string;
    artist: string;
    duration: string;
    genres: string[];
    image_url: string;
    release_date: string;
    release_year: string;
    tracks: Track[];
}

interface Track {
    name: string;
    duration: number;
    track_number: number;
}

interface Query {
    album: string;
    artist: string;
}