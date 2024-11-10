import { Archetypes } from "../archetypes.enum";
import { Question } from "./question.interface";

export class Quiz {
    private questions: Question[];
    public selectedAnswers: { [archetype: string]: number } = {};
    public currentQuestionIndex: number = 0;

    constructor(questions: Question[]) {
        this.questions = questions;
    }

    get getQuestions() { return this.questions }

    getCurrentQuestion(): Question {
        return this.questions[this.currentQuestionIndex];
    }

    submitAnswer(archetype: Archetypes): void {
        var previousAnswer = this.getCurrentQuestion().answer;

        if (previousAnswer) {
            this.selectedAnswers[previousAnswer]--;
        }

        this.getCurrentQuestion().answer = archetype;

        if (!this.selectedAnswers[archetype]) {
            this.selectedAnswers[archetype] = 0;
        }
        this.selectedAnswers[archetype]++;
    }

    isQuizFinished(): boolean {
        return this.currentQuestionIndex + 1 >= this.questions.length;
    }

    getResult(): string {
        let maxArchetype = '';
        let maxCount = 0;

        for (const [archetype, count] of Object.entries(this.selectedAnswers)) {
            if (count > maxCount) {
                maxCount = count;
                maxArchetype = archetype;
            }
        }

        return maxArchetype;
    }
}