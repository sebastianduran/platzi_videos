const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

function validate(data, schema){
    const { error } = joi.object(schema).validate(data);
    return error;
}

function validationHandler( schema, check = "body"){
    return async (req, res, next)=>{
        try {
            const error = validate(req[check], schema);
            next();
        }
        catch(err){
            next(boom.badRequest(err))
        }
    };
}

module.exports = validationHandler;