import React from 'react';
import './searchbar.css';

interface SearchBarProps {
    placeholder: string;

    inputHandler: (input: string) => void;
}

export const SearchBar = ({
    placeholder,
    inputHandler
}: SearchBarProps) => {
    function onInput(e: React.FormEvent<HTMLInputElement>) {
        inputHandler(e.currentTarget.value);
    };

    return (
        <input type="text"
            className="search-bar"
            placeholder={placeholder}
            onInput={onInput} />
    );
};