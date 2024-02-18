
const {Candidate}= require("../../database/models"); 

let candidateController= {
	all: async (req, res) => {
        try {
            const products = await Candidate.findAll({
                include: ["professionCand"]
            })
            .then(candidate => {
                let respuesta = {
                    meta: {
                        status : 200,
                        total: candidate.length,
                        url: '/candidate'
                    },
                    data: candidate
                }
                    res.json(respuesta);
                })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

}

module.exports= candidateController;