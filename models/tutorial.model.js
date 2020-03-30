module.exports = mongoose =>{ 

    let schema = mongoose.Schema(
        {
            title : String,
            description : String,
            published : Boolean
        },
        { timestamps : true}
    );

    // custom object that needs id field
    schema.method("toJson", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Tutorial = mongoose.model(
        "tutorial", 
        schema);
    return Tutorial;
};