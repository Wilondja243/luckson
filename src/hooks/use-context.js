import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export function UseContext({ children }) {
    const [search, setSearch] = useState('');
    const [whiteMood, setWhiteModd] = useState(false);

    const valueState = {
        search,
        whiteMood,
        setSearch,
        setWhiteModd,
    };

    return (
        <MyContext.Provider value={valueState}>{children}</MyContext.Provider>
    );
}
