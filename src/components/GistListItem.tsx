import React, { useContext } from 'react';
import { GistContext } from '../contexts/GistContext';
import { GitContextType } from '../contexts/GistContextType';
import { Snippet } from '../models/snippet';

interface GistListItemProps {
    gist: Snippet
}

const GistListItem = (props: GistListItemProps) => {
    const {removeGit, toggle} = useContext<GitContextType>(GistContext)

    const onRemove = (snippet: Snippet) =>{
        removeGit(snippet);
    }

    const handleChange = (event: any) =>{
        toggle(props.gist);
    }

    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox" type="checkbox" checked={props.gist.done} onChange={handleChange} />
                </label>

            </td>
            <td className="uk-width-expand">{props.gist.title}</td>
            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger" uk-icon="trash" onClick={() => onRemove(props.gist)}></button>
            </td>
        </tr>
    );
}

export default GistListItem;

//Criando um componente para adicionar item a lista. 