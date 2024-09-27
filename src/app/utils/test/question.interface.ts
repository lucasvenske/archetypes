import { Archetypes } from "../archetypes.enum";

export interface Question {
    id: number;
    text: string;
    options: Option[];
    theme: Archetypes;
}

interface Option {
    text: string;
    archetype: Archetypes;
    selected: boolean;
}