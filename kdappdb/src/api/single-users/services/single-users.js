'use strict';

/**
 * single-users service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single-users.single-users');
