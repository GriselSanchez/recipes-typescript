import React from 'react'

export default function Label({ name, onLabelChange }: any) {
    return (
        <label>
            {name}
            <input type="checkbox" value={name} name={name} onChange={onLabelChange} />
        </label>
    )
}

