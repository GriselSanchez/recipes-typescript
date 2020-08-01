import React from 'react'

export default function Label({ name, onLabelChange }: any) {

    const formatString = (str: string) => {
        let words: string[] = str.replace('-', ' ').split(' ');
        let formatted: string[] = [];

        for (let word of words) formatted.push(word[0].toUpperCase() + word.slice(1));

        return formatted.join(' ');
    }

    return (
        <label htmlFor={name}>
            {formatString(name)}
            <input type="checkbox" value={name} name={name} onChange={onLabelChange} />
        </label>
    )
}

