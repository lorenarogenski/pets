import db from "../config/db.js"

const animalSchema = new db.Schema({
    nome: {
        type: String, 
        required: true,
    },
    raca: {
        type: String,
        required: true,
    },
});

const Animal = db.model("ANimal", animalSchema);

export default Animal