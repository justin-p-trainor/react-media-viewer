import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Track } from './Track';

export default {
    title: 'Track',
    component: Track
} as ComponentMeta<typeof Track>;

const Template: ComponentStory<typeof Track> = (args) => <Track {...args} />;

export const PrincessDawn = Template.bind({});
PrincessDawn.args = {
    trackName: 'Princess of the Dawn',
    artistName: 'Accept',
    albumName: 'Restless and Wild',
    milliseconds: 375418,
    bytes: 6290521
}

export const SlowDawn = Template.bind({});
SlowDawn.args = {
    trackName: 'Slow Dawn',
    artistName: 'Smashing Pumpkins',
    albumName: 'Judas 0: B-Sides and Rarities',
    milliseconds: 192339,
    bytes: 6269057
}