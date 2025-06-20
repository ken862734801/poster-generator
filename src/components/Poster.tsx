import { PaletteColors, Settings } from '@/app/page';
import { divideTracklist } from '@/utils';
import { cn } from '@/utils/cn';
import { Separator } from './ui/Separator';
import { Config } from '@/configs';

export interface PosterProps {
    album: any;
    palette?: PaletteColors;
    width?: string | number;
    height?: string | number;
    settings: Settings;
    className?: string;
}

export interface Track {
    duration_ms: number;
    name: string;
    track_number: number;
  }

export const Poster: React.FC<PosterProps> = ({
    album,
    palette,
    width = Config.DEFAULT_WIDTH * 96,
    height = Config.DEFAULT_HEIGHT * 96,

    settings,
    className,
}) => {
    const outerStyle = {
        width: width,
        height: height,
    };

    const innerStyle = {
        backgroundColor: settings.backgroundColor,
        color: settings.textColor,
    };

    if (!album?.tracks) {
        return null;
    }

    const tracklist = divideTracklist<Track>(album.tracks);

    const TracklistComponent = (
    <div className="flex">
        {tracklist.map((column, colIndex) => (
        <ul className="even:mx-4" key={colIndex}>
            {column.map((track: any, rowIndex) => (
            <li className="text-lg" key={rowIndex}>
                {track.track_number}. {track.name}
            </li>
            ))}
        </ul>
        ))}
    </div>
);

    const PaletteComponent: React.FC = () => {
        return (
            <div className="pt-4 pb-2">
                {palette &&
                    Object.values(palette).map((data, index) => (
                        <div
                            key={index}
                            style={{ backgroundColor: data }}
                            className="w-1/5 h-4 inline-block"
                        ></div>
                    ))}
            </div>
        );
    };

    const GenreComponent: React.FC = () => {
        return (
            <>
                {album?.genres.map((genre: string, index: number) => (
                    <span key={index} className='text-lg'>
                        {genre}
                        {index < album.genres.length - 1 && ' · '}
                    </span>
                ))}
            </>
        );
    };

    const classes = cn('poster', className);

    return (
        <div className={classes} style={outerStyle}>
            <div id="poster" className="h-fit p-7" style={innerStyle}>
                <div>
                    <Separator color={settings.textColor} className="my-2" />
                    <h3 className="text-4xl text-right my-2">{album?.release_year}</h3>
                    <h1 className="text-7xl my-3">{album?.album}</h1>
                </div>
                <div className="mt-4 w-full h-4/6">
                    <img className="w-full h-full" src={album?.image_url} alt={`${album?.album} cover art`} />
                </div>
                <div>
                    <PaletteComponent />
                    <div className="flex justify-between">
                        {TracklistComponent}
                        <div>
                            <div className="text-right">
                                <h2 className="text-5xl">{album?.artist}</h2>
                            </div>
                            <div className="text-right">
                                <h4 className="text-xl">Out Now</h4>
                                <p className="text-lg">{album?.release_date}</p>
                                <p className="text-lg">{album?.duration}</p>
                            </div>
                            <div className="text-right">
                                <h4 className="text-xl">Released By</h4>
                                <p className="text-lg">{album?.record_label}</p>
                            </div>
                            <div className="text-right">
                                <h4 className="text-xl">Genre</h4>
                                <GenreComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
