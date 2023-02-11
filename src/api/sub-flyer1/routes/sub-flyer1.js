'use strict';

/**
 * sub-flyer1 router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::sub-flyer1.sub-flyer1');
module.exports = {
routes: [
    { 
      method: 'POST',
      path: '/sub-flyer1', 
      handler: 'sub-flyer1.create',
      policies: []
    },
    { 
      method: 'GET',
      path: '/sub-flyer1', 
      handler: 'sub-flyer1.find',
      policies: []
    },
    {
      method: 'GET',
      path: '/sub-flyer1/:id', 
      handler: 'sub-flyer1.findOne',
      policies: []
    },
    { 
      method: 'PUT',
      path: '/sub-flyer1/:id', 
      handler: 'sub-flyer1.update',
      policies: []
    },
    { 
      method: 'DELETE',
      path: '/sub-flyer1/:id', 
      handler: 'sub-flyer1.delete',
      policies: []
    },

  
 
  ]
}