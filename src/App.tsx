import React, { useState } from 'react';
import './App.css';

import { SearchBar } from './stories/SearchBar'
import { TrackList } from './stories/TrackList'

function App() {
    const [appState, setAppState] = useState({ tracks: [], loading: false });

    function handleSearchInput(input: string) {
        fetch("/" + encodeURIComponent(input))
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status.toString());
                }

                return res.json();
            })
            .then(data => setAppState({ tracks: data, loading: false }))
            .catch(error => setAppState({ tracks: [], loading: false }));
    };

    return (
        <div className="App">
            <SearchBar
                placeholder='Type to learn more about your favorite tracks'
                inputHandler={handleSearchInput} />

            <TrackList
                tracks={appState.tracks}
                loading={appState.loading} />
        </div>
    );
}

export default App;
