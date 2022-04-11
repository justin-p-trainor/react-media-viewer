import React from 'react';
import './track.css'

interface TrackProps {
    trackName: string;
    artistName: string;
    albumName: string;
    milliseconds: number;
    bytes: number
}

export const Track = ({
    trackName,
    artistName,
    albumName,
    milliseconds,
    bytes
}: TrackProps) => {
    return (
        <div className="track-item">
            <div className="track-item__trackName">{trackName}</div>
            <div className="track-item__info"><strong>{artistName}</strong> | {albumName} | {formatTime(milliseconds)} | {formatBytes(bytes)}</div>
        </div>
    );
}

function formatBytes(bytes: number): string {
    return (bytes / 1000000.0).toFixed(2) + ' mB';
}

function formatTime(milliseconds: number): string {
    const minutes = Math.floor(milliseconds / 60000.0);
    const seconds = (milliseconds - minutes * 60000.0) / 1000.0;

    return `${minutes.toFixed(0)}:${seconds.toFixed(0).padStart(2, '0')}`;
}