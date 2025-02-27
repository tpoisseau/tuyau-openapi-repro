import { defineConfig } from '@tuyau/core'

const tuyauConfig = defineConfig({
  openapi: {
    provider: 'swagger-ui',
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
