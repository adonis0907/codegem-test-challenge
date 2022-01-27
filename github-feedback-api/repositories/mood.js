const DatabaseFactory = require("../providers/database");

class MoodRepository {
    constructor() {
        this.dbProvider = DatabaseFactory.getDatabaseProvider();
        this.tableName = "mood";
    }

    saveMood(mood) {
        return this.dbProvider.add(this.tableName, this._getInsertOrUpdateEntity(mood));
    }

    saveMoods(moods) {
        return this.dbProvider.addMany(this.tableName, moods.map(mood => this._getInsertOrUpdateEntity(mood)));
    }

    _getInsertOrUpdateEntity({ feedbackId, id, ...props }) {
        let result = {feedback_id: feedbackId, ...props};

        if (id !== null) {
            result.id = id;
        }

        return result;
    }
}

module.exports = MoodRepository;