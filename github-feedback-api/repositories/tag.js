const DatabaseFactory = require("../providers/database");

class TagRepository {
    constructor() {
        this.dbProvider = DatabaseFactory.getDatabaseProvider();
        this.tableName = "tag";
    }

    saveTag(tag) {
        return this.dbProvider.add(this.tableName, this._getInsertOrUpdateEntity(tag));
    }

    saveTags(tags) {
        return this.dbProvider.addMany(this.tableName, tags.map(tag => this._getInsertOrUpdateEntity(tag)));
    }

    _getInsertOrUpdateEntity({ feedbackId, id, ...props }) {
        let result = {feedback_id: feedbackId, ...props};

        if (id !== null) {
            result.id = id;
        }

        return result;
    }
}

module.exports = TagRepository;