'use strict';

/**
 * single-users router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::single-users.single-users');
