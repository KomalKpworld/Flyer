'use strict';

/**
 * sub-flyer1 controller
 */



const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  "api::sub-flyer1.sub-flyer1",
  ({ strapi }) => ({

    async create(ctx) {

 
      let response = await strapi.entityService.create("api::sub-flyer1.sub-flyer1", {
        data: {
            type: ctx.request.body.data.type,
            rotation: ctx.request.body.data.rotation,
            scale: ctx.request.body.data.scale,
            is_flipped: ctx.request.body.data.is_flipped,
            is_lock: ctx.request.body.data.is_lock,
            x: ctx.request.body.data.x,
            y: ctx.request.body.data.y,
            height: ctx.request.body.data.height,
            width: ctx.request.body.data.width,
            order_by: ctx.request.body.data.order_by,
            font: ctx.request.body.data.font,
            font_vertical_spacing: ctx.request.body.data.font_vertical_spacing,
            text: ctx.request.body.data.text,
            image_url: ctx.request.body.data.image_url,
        }

        
      })
      console.log(response.id)
    if(response.text === null){
     await strapi.db
      .query("api::sub-flyer1.sub-flyer1")
      .update({
        where: {
          id: response.id,
        },
        data: {
            type: 2,
          },
      });

      }else{
        await strapi.db
        .query("api::sub-flyer1.sub-flyer1")
        .update({
          where: {
            id: response.id,
          },
          data: {
            type: 1,
            },
        });
      }
   
      return response;
    },




    ///////*

    async update(ctx) {
      const response = await super.update(ctx);
      return response;
    },
    async delete(ctx) {
      const response = await super.delete(ctx);
      return response;
    },
    async find(ctx) {
      ctx.query = { ...ctx.query, local: 'en' };
      const { data, meta } = await super.find(ctx);
      meta.date = Date.now();
      return { data, meta };
    },
    async findOne(ctx) {
      console.log("4")
      const { id } = ctx.params;
      const { query } = ctx;
      const entity = await strapi.service('api::sub-flyer1.sub-flyer1').findOne(id, query);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
      return this.transformResponse(sanitizedEntity);
    },
    
}))











