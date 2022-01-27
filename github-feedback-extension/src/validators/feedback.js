export default class FeedbackValidator {
    static validate(feedback, moods, tags) {
        let feedbackValid = FeedbackValidator.feedbackValid(feedback);
        let moodsValid = FeedbackValidator.moodsValid(moods);

        return {
            feedback: feedbackValid,
            moods: moodsValid,
            tags: true,
            valid: feedbackValid && moodsValid
        };
    }

    static feedbackValid(feedback) {
        return !!feedback && feedback.length > 0;
    }

    static moodsValid(moods) {
        return !!moods && moods.length > 0;
    }
}