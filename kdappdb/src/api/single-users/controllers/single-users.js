'use strict';

/**
 *  single-users controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::single-users.single-users');
