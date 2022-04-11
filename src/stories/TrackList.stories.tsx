import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TrackList } from './TrackList'

export default {
    title: 'TrackList',
    component: TrackList
} as ComponentMeta<typeof TrackList>;

const Template: ComponentStory<typeof TrackList> = (args) => <TrackList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    tracks: [],
    loading: false
}

export const Loading = Template.bind({});
Loading.args = {
    tracks: [],
    loading: true
}

export const WithTracks = Template.bind({});
WithTracks.args = {
    tracks: [
        {
            id: 1,
            trackName: 'Princess of the Dawn',
            artistName: 'Accept',
            albumName: 'Restless and Wild',
            milliseconds: 375418,
            bytes: 6290521
        },
        {
            id: 2,
            trackName: 'Slow Dawn',
            artistName: 'Smashing Pumpkins',
            albumName: 'Judas 0: B-Sides and Rarities',
            milliseconds: 192339,
            bytes: 6269057
        },
        {
            id: 3,
            "trackName": "Blind Man",
            "artistName": "Aerosmith",
            "albumName": "Big Ones",
            "milliseconds": 240718,
            "bytes": 7877453
        },
        {
            id: 4,
            "trackName": "Man In The Box",
            "artistName": "Alice In Chains",
            "albumName": "Facelift",
            "milliseconds": 286641,
            "bytes": 9310272
        },
        {
            id: 5,
            "trackName": "Enter Sandman",
            "artistName": "Apocalyptica",
            "albumName": "Plays Metallica By Four Cellos",
            "milliseconds": 221701,
            "bytes": 7286305
        },
    ],
    loading: false
}