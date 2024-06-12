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

    let TracklistComponent;

    if (album) {
        const tracklist = divideTracklist(album.tracklist);

        TracklistComponent = (
            <div className="flex">
                {tracklist.map((subArray, index) => {
                    if (Array.isArray(subArray)) {
                        return (
                            <ul className="even:mx-4" key={index}>
                                {subArray.map((item, innerIndex) => (
                                    <li className="text-lg" key={innerIndex}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        );
                    }
                })}
            </div>
        );
    }

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
                {album?.tags.map((tag: string, index: number) => (
                    <span key={index} className="text-lg">
                        {tag}
                        {index < album.tags.length - 1 && ' · '}
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
                    <h3 className="text-4xl text-right my-2">{album?.year}</h3>
                    <h1 className="text-7xl my-3">{album?.album}</h1>
                </div>
                <div className="mt-4 w-full h-4/6">
                    <img className="w-full h-full" src={album?.image} />
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
                                <p className="text-lg">{album?.date}</p>
                                <p className="text-lg">{album?.duration}</p>
                            </div>
                            <div className="text-right">
                                <h4 className="text-xl">Released By</h4>
                                <p className="text-lg">{album?.label}</p>
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
