import React, { useContext } from 'react';
import { GistContext } from '../contexts/GistContext';
import { GitContextType } from '../contexts/GistContextType';
import GistListItem from './GistListItem';

const GistList = () => {
    const { gits } = useContext<GitContextType>(GistContext);

    return (
        <table className="uk-table">
            <caption>Lista de Gist</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Gists</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    gits?.map(
                        gits => (<GistListItem key={gits.id} gist={gits}></GistListItem>)
                    )
                }
            </tbody>
        </table>
    );

}

export default GistList;