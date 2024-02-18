/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */



module.exports = (sequelize, dataTypes) => {
    let alias= "Candidate";

    let cols= {
       id:{
            type: dataTypes.INTEGER, //SIEMPRE
            primaryKey: true,
            autoIncrement: true
       },

       DNI:{
            type: dataTypes.BIGINT
       },

       name: {
        type: dataTypes.STRING
       },

       last_name:{
            type: dataTypes.STRING
       },

       email:{
            type: dataTypes.STRING
       },

       phone:{
            type: dataTypes.BIGINT
       },

       perfil_LNK:{
            type: dataTypes.STRING
       },

       birth_date:{
            type: dataTypes.DATE
       },

       genre:{
         type: dataTypes.STRING
       },

       image:{
            type: dataTypes.STRING
       }

    }

    let config = {
        tableName: 'candidate', //aca va el nombre de la tabla como sale en la base de datos 
        timestamps: false //crea marcas de tiempo cuando haces creacion y modificacion de registros, obligatorio en caso de no haber createAdate updateADate
    };

    const Candidate = sequelize.define(alias, cols, config ) // aca hay que completar los 3 parametros 

    Candidate.associate = function(models) {
        // Un aspirante puede aspirar a muchas profesiones
        Candidate.belongsToMany(models.Profession, {
          as: "professionCand",
          through: models.Candidate_Profession,
          foreignKey: 'candidate_id',
          otherKey: 'profession_id',
          timestamps: false
        });
    
        
      };
     

    return Candidate
    
}