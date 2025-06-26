import { useState } from 'react';
import { TextField } from './TextField';
import { textItems } from './textItems';
import { Button } from '@/components/common';
import { useStore } from '@/store/useStore';
import { cn } from '@/lib';

export const TextPanel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const data = useStore((state) => state.data);
  const setData = useStore((state) => state.setData);

  if (!data) return null;

  return (
    <div className="p-5">
      <div className="text-panel-tabs-container">
        <Button
          className={cn(
            activeTab == 0
              ? 'bg-white text-[var(--text-primary)]'
              : 'text-[var(--text-secondary)]',
            'w-1/2 p-1 rounded cursor-pointer transition-colors duration-200 ease-in-out'
          )}
          onClick={() => setActiveTab(0)}
        >
          General
        </Button>
        <Button
          className={cn(
            activeTab == 1
              ? 'bg-white text-[var(--text-primary)]'
              : 'text-[var(--text-secondary)]',
            'w-1/2 p-1 rounded cursor-pointer transition-colors duration-200 ease-in-out'
          )}
          onClick={() => setActiveTab(1)}
        >
          Tracklist
        </Button>
      </div>
      <div className="h-[70vh] overflow-auto">
        {activeTab === 0 ? (
          <>
            {textItems.map(({ label, key }) => (
              <TextField
                key={label}
                label={label}
                value={data[key]}
                onChange={(event) =>
                  setData({ ...data, [key]: event.target.value })
                }
              />
            ))}
            {data.genres.map((genre, index) => (
              <TextField
                key={index}
                label={`Genre #${index + 1}`}
                value={genre}
                onChange={(event) => {
                  const newGenres = [...data.genres];
                  newGenres[index] = event.target.value;
                  setData({
                    ...data,
                    genres: newGenres,
                  });
                }}
              />
            ))}
          </>
        ) : (
          <>
            {data.tracks.map((track, index) => (
              <TextField
                key={track.track_number}
                label={`Track #${track.track_number}`}
                value={track.name}
                onChange={(event) => {
                  const newTracks = [...data.tracks];
                  newTracks[index] = {
                    ...newTracks[index],
                    name: event.target.value,
                  };
                  setData({
                    ...data,
                    tracks: newTracks,
                  });
                }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TextPanel;
