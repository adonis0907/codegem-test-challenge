const Feedback = require("../models/feedback");
const Tag = require("../models/tag");
const Mood = require("../models/mood");

class FeedbackTransformer {
    static requestToModel({ id, feedback, moods, tags, source }) {
        return new Feedback(id, feedback, tags.map(f => new Tag(null, f.name, null)), moods.map(m => new Mood(null, m, null)), source);
    }
}

module.exports = FeedbackTransformer;