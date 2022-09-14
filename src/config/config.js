const dotenv = require('dotenv');
const path = require("path");
const Joi = require("joi");
dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = Joi.object()
  .keys({
    PORT: Joi.number().default(5000),
    mongoUri: Joi.string().required().description('Mongo DB url'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  port: envVars.PORT,
  url: envVars.mongoUri + (envVars.NODE_ENV === 'test' ? '-test' : ''),
  origin: envVars.origin,
};