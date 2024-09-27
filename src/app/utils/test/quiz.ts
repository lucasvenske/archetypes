import { Question } from "./question.interface";

export class Quiz {
    private questions: Question[];
    private selectedAnswers: { [archetype: string]: number } = {};
    private currentQuestionIndex: number = 0;

    constructor(questions: Question[]) {
        this.questions = questions;
    }

    get getQuestions() { return this.questions }

    getCurrentQuestion(): Question {
        return this.questions[this.currentQuestionIndex];
    }

    submitAnswer(archetype: string): void {
        if (!this.selectedAnswers[archetype]) {
            this.selectedAnswers[archetype] = 0;
        }
        this.selectedAnswers[archetype]++;
        this.currentQuestionIndex++;
    }

    isQuizFinished(): boolean {
        return this.currentQuestionIndex >= this.questions.length;
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