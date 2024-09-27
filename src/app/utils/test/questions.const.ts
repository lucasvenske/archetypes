import { Archetypes } from "../archetypes.enum";
import { Question } from "./question.interface";

export const questions: Question[] = [
    {
        id: 1,
        text: 'Which of these activities do you prefer?',
        theme: Archetypes.Lover,
        options: [
            { text: 'Discover new places', archetype: Archetypes.Maiden, selected: false },
            { text: 'Organize a family gathering', archetype: Archetypes.Mother, selected: false },
            { text: 'Meditate or practice yoga', archetype: Archetypes.Mystic, selected: false },
            { text: 'Read a book', archetype: Archetypes.Sage, selected: false },
            { text: 'Cook a special meal', archetype: Archetypes.Lover, selected: false },
            { text: 'Plan a Spontaneous trip', archetype: Archetypes.Warrior, selected: false },
            { text: 'Plan a party', archetype: Archetypes.Queen, selected: false },
        ]
    },
    {
        id: 2,
        text: 'What is your biggest fear?',
        theme: Archetypes.Mother,
        options: [
            { text: 'Losing my freedom', archetype: Archetypes.Maiden, selected: false },
            { text: 'Failing to care for loved ones', archetype: Archetypes.Mother, selected: false },
            { text: 'Losing touch with my intuition', archetype: Archetypes.Mystic, selected: false },
            { text: 'Being ignored or unheard', archetype: Archetypes.Sage, selected: false },
            { text: 'Losing emotional connection with someone special', archetype: Archetypes.Lover, selected: false },
            { text: 'Losing my independence', archetype: Archetypes.Warrior, selected: false },
            { text: 'Losing control of my life', archetype: Archetypes.Queen, selected: false },
        ]
    },
    {
        id: 3,
        text: 'How do you deal with challenges?',
        theme: Archetypes.Mystic,
        options: [
            { text: 'See them as learning opportunities.', archetype: Archetypes.Maiden, selected: false },
            { text: 'Seek support from family and friends.', archetype: Archetypes.Mother, selected: false },
            { text: 'Trust my intuition to find solutions.', archetype: Archetypes.Mystic, selected: false },
            { text: 'Organize a detailed plan and lead the execution.', archetype: Archetypes.Queen, selected: false },
            { text: 'Confront them head-on, without hesitation.', archetype: Archetypes.Warrior, selected: false },
            { text: 'Analyze carefully before taking action.', archetype: Archetypes.Sage, selected: false },
            { text: 'Approach them with passion and creativity.', archetype: Archetypes.Lover, selected: false },
        ]
    },
    {
        id: 4,
        text: 'Which of these qualities do you value most in yourself?',
        theme: Archetypes.Queen,
        options: [
            { text: 'Optimism and enthusiasm', archetype: Archetypes.Maiden, selected: false },
            { text: 'Patience and reliability', archetype: Archetypes.Mother, selected: false },
            { text: 'Creativity and intuition', archetype: Archetypes.Mystic, selected: false },
            { text: 'Strength and resilience', archetype: Archetypes.Queen, selected: false },
            { text: 'Courage and determination', archetype: Archetypes.Warrior, selected: false },
            { text: 'Wisdom and clarity', archetype: Archetypes.Sage, selected: false },
            { text: 'Passion and charisma', archetype: Archetypes.Lover, selected: false },
        ]
    },
    {
        id: 5,
        text: 'How do your friends and family usually describe you?',
        theme: Archetypes.Maiden,
        options: [
            { text: 'Cheerful and full of life', archetype: Archetypes.Maiden, selected: false },
            { text: 'Affectionate and warm', archetype: Archetypes.Mother, selected: false },
            { text: 'Mysterious and wise', archetype: Archetypes.Mystic, selected: false },
            { text: 'Authoritative and fair', archetype: Archetypes.Queen, selected: false },
            { text: 'Brave and tireless', archetype: Archetypes.Warrior, selected: false },
            { text: 'Reflective and intellectual', archetype: Archetypes.Sage, selected: false },
            { text: 'Passionate and charming', archetype: Archetypes.Lover, selected: false },
        ]
    },
    {
        id: 6,
        text: 'What do you consider your biggest flaw?',
        theme: Archetypes.Sage,
        options: [
            { text: 'Being a bit naive', archetype: Archetypes.Maiden, selected: false },
            { text: 'Forgetting to take care of yourself', archetype: Archetypes.Mother, selected: false },
            { text: 'Being somewhat manipulative', archetype: Archetypes.Mystic, selected: false },
            { text: 'Being controlling', archetype: Archetypes.Queen, selected: false },
            { text: 'Being too aggressive', archetype: Archetypes.Warrior, selected: false },
            { text: 'Being emotionally distant', archetype: Archetypes.Sage, selected: false },
            { text: 'Being jealous and possessive', archetype: Archetypes.Lover, selected: false },
        ]
    },
    {
        id: 7,
        text: 'How do you react to sudden changes?',
        theme: Archetypes.Warrior,
        options: [
            { text: 'See them as new opportunities.', archetype: Archetypes.Maiden, selected: false },
            { text: 'Try to maintain stability and comfort.', archetype: Archetypes.Mother, selected: false },
            { text: 'Get anxious and feel disconnected.', archetype: Archetypes.Mystic, selected: false },
            { text: 'Take control and guide others through the change.', archetype: Archetypes.Queen, selected: false },
            { text: 'Face them with determination, but can be impulsive.', archetype: Archetypes.Warrior, selected: false },
            { text: 'Hesitate and analyze before acting.', archetype: Archetypes.Sage, selected: false },
            { text: 'Worry about the future', archetype: Archetypes.Lover, selected: false },
        ]
    },
    {
        id: 8,
        text: 'Which of these situations would make you happiest?',
        theme: Archetypes.Lover,
        options: [
            { text: 'Exploring a new destination without a defined plan', archetype: Archetypes.Maiden, selected: false },
            { text: 'Gathering my family and friends for a big dinner', archetype: Archetypes.Mother, selected: false },
            { text: 'Discovering a new spiritual or philosophical interest', archetype: Archetypes.Mystic, selected: false },
            { text: 'Being recognized for my leadership work', archetype: Archetypes.Queen, selected: false },
            { text: 'Overcoming a difficult challenge', archetype: Archetypes.Warrior, selected: false },
            { text: 'Solving a complex problem with wisdom', archetype: Archetypes.Sage, selected: false },
            { text: 'Living a passionate and intense romance', archetype: Archetypes.Lover, selected: false },
        ]
    },
    {
        id: 9,
        text: 'Among these animals, which is your favorite?',
        theme: Archetypes.Mother,
        options: [
            { text: 'Butterfly', archetype: Archetypes.Maiden, selected: false },
            { text: 'Bear', archetype: Archetypes.Mother, selected: false },
            { text: 'Snake', archetype: Archetypes.Mystic, selected: false },
            { text: 'Lioness', archetype: Archetypes.Queen, selected: false },
            { text: 'Tiger', archetype: Archetypes.Warrior, selected: false },
            { text: 'Owl', archetype: Archetypes.Sage, selected: false },
            { text: 'Swan', archetype: Archetypes.Lover, selected: false },
        ]
    }
];