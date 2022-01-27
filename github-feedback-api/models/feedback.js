class Feedback {
    constructor(id, feedback, tags, moods, source) {
        this.feedback = feedback;
        this.tags = tags;
        this.moods = moods;
        this.id = id;
        this.source = source;
    }
}

module.exports = Feedback;