import React from 'react';
import { Track } from './Track'
import './tracklist.css'

interface TrackWithIdProps {
    id: number;
    trackName: string;
    artistName: string;
    albumName: string;
    milliseconds: number;
    bytes: number
}

interface TrackListProps {
    tracks: Array<TrackWithIdProps>;
    loading: boolean;
}

export const TrackList = ({
    tracks,
    loading
}: TrackListProps) => {
    if (loading || tracks.length === 0) {
        return <div className="track-list">No tracks to display. Try a new search!</div>
    }

    return (
        <div className="track-list">
            {tracks.map(track => (
                <Track
                    key={track.id}
                    trackName={track.trackName}
                    artistName={track.artistName}
                    albumName={track.albumName}
                    milliseconds={track.milliseconds}
                    bytes={track.bytes} />
            ))}
        </div>
    );
};