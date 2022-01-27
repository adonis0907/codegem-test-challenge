const FeedbackRepository = require("../repositories/feedback");
const TagRepository = require("../repositories/tag");
const MoodRepository = require("../repositories/mood");
const FeedbackTransformer = require("../transformers/feedback");

class FeedbackService {
    constructor() {
        this.repository = new FeedbackRepository();
        this.moodRepository = new MoodRepository();
        this.tagRepository = new TagRepository();
    }

    saveFeedback(feedbackRequest) {
        let feedback = FeedbackTransformer.requestToModel(feedbackRequest);

        return this.repository.saveFeedback(feedback).then(id => {
            return Promise.all([this.moodRepository.saveMoods(feedback.moods.map(m => { 
                                    m.feedbackId = id;
                                    return m;
                                })),
                                this.tagRepository.saveTags(feedback.tags.map(f => { 
                                    f.feedbackId = id;
                                    return f; 
                                }))])
                    .then(results => ({ id }));
        });
    }
}

module.exports = FeedbackService;