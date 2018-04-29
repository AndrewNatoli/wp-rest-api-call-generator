require('dotenv').config();

const fetch = require('node-fetch');
const getApiSpec = require('./getApiSpec');
const bailFromError = require('./bailFromError');
const buildEndpointList = require('./buildEndpointList');
const handlebars = require('handlebars');
const fs = require('fs');

const API_SPEC_URL = `${process.env.WP_API_URL}${process.env.WP_API_PATH}`;

async function run() {
  try {
    const apiSpec = await getApiSpec(API_SPEC_URL);
    const endpointList = buildEndpointList(apiSpec);
    // console.log(endpointList);
    const templateFile = fs.readFileSync(`${__dirname}/templates/main.handlebars`, 'utf-8');
    const compiledTemplate = handlebars.compile(templateFile);
    console.log(compiledTemplate({ endpoints: endpointList }));
  } catch (err) {
    bailFromError(`Failed to build from ${API_SPEC_URL}`, err);
  }
}

run();
