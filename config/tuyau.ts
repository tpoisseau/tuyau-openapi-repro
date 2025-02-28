import { defineConfig } from '@tuyau/core'

const tuyauConfig = defineConfig({
  openapi: {
    provider: 'swagger-ui',
    exclude: ['/wildcard/:category/:id/*'], // exclude bugged route schema
    documentation: {
      info: {
        title: 'AdonisJS API',
        version: '1.0.0',
      },
      // uncomment to fix the servers list
      // servers: [
      //   {
      //     url: '/',
      //     description: 'Development server',
      //   },
      // ],
    },
  },
  codegen: {
    /**
     * Filters the definitions and named routes to be generated
     */
    // definitions: {
    //  only: [],
    // }
    // routes: {
    //  only: [],
    // }
  },
})

export default tuyauConfig
