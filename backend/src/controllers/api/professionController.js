const {Profession}= require("../../database/models"); 

let professionController= {
	all: async (req, res) => {
        try {
            const products = await Profession.findAll({
                include: ["professionCand"]
            })
            .then(professions => {
                let respuesta = {
                    meta: {
                        status : 200,
                        total: professions.length,
                        url: '/professions'
                    },
                    data: professions
                }
                    res.json(respuesta);
                })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

}

module.exports= professionController;