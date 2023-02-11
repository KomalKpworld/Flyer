'use strict';

/**
 * flyer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flyer.flyer');
