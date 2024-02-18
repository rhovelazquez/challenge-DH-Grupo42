/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */

module.exports = (sequelize, dataTypes) => {
    let alias= "Candidate_Profession"

    let cols= {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        candidate_id:{
            type: dataTypes.INTEGER
        },

        profession_id:{
            type: dataTypes.INTEGER
        }
        
    }

    let config = {
        tableName: 'candidate_profession', //aca va el nombre de la tabla como sale en la base de datos 
        timestamps: false //crea marcas de tiempo cuando haces creacion y modificacion de registros, obligatorio en caso de no haber createAdate updateADate
    };

    const Candidate_Profession= sequelize.define(alias, cols, config) // aca hay que completar los 3 parametros 
      
    return Candidate_Profession
}