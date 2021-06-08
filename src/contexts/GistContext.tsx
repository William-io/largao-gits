import { title } from 'process';
import React, { createContext, useState, useEffect } from 'react';
import { Snippet } from '../models/snippet';
import { GitContextType } from './GistContextType';

export const GistContext = createContext<GitContextType>({
    gits: [],
    addGit: () => { },
    removeGit: () => { },
    toggle: () => { },
});

const GistProvider = (props: any) => {
    const gits: Snippet[] = [
        { id: 1, title: 'Imprimir na tela', description: 'https://www.google.com', done: true }

    ];

    const addGit = (title: string) => {
        console.log('Adicionou' + title);
    }

    const removeGit = (gits: Snippet) => {
        console.log('Removeu' + gits.title)
    }

    const toggle = (gits: Snippet) => {
        console.log('Alterou' + gits.title)
    }

    return (
        <GistContext.Provider value={{ gits, addGit, removeGit, toggle }}>
            {props.children}
        </GistContext.Provider>
    )
}

export default GistProvider;