/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */


module.exports = (sequelize, dataTypes) => {
    let alias= "Profession";

    let cols= {
       id: {
        type: dataTypes.INTEGER, //SIEMPRE
            primaryKey: true,
            autoIncrement: true
       },

       name:{
            type: dataTypes.STRING
       }
    }

    let config = {
        tableName: 'profession', //aca va el nombre de la tabla como sale en la base de datos 
        timestamps: false //crea marcas de tiempo cuando haces creacion y modificacion de registros, obligatorio en caso de no haber createAdate updateADate
    };

    const Profession = sequelize.define(alias, cols, config ) // aca hay que completar los 3 parametros 

    Profession.associate = function(models) {
        // Un aspirante puede aspirar a muchas profesiones
        Profession.belongsToMany(models.Candidate, {
          as: "professionCand",
          through: models.Candidate_Profession,
          foreignKey: 'profession_id',
          otherKey: 'candidate_id',
          timestamps: false
        });
    
      };


    return Profession
}