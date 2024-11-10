import { Archetypes } from "../archetypes.enum";

export interface Question {
    id: number;
    text: string;
    answer: Archetypes | null;
    options: Option[];
    theme: Archetypes;
}

export interface Option {
    text: string;
    archetype: Archetypes;
    selected: boolean;
}

export interface ArchetypesResult {
    id: Archetypes;
    title: string;
    text: string;
    image: string;
    icon: string;
}