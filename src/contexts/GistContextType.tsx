import { Snippet } from "../models/snippet";


export interface GitContextType {
    gits: Snippet[];
    addGit(title: string): void;
    removeGit(git: Snippet): void;
    toggle(git: Snippet): void;
}