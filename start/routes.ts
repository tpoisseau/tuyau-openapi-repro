/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const ReturnTypesController = () => import('#controllers/return_types_controller')
const ValidatorsController = () => import('#controllers/validators_controller')

router.on('/').renderInertia('home')
router
  .get('/validators/how_to_describe_params', [ValidatorsController, 'howToDescribeParams'])
  .openapi({
    parameters: [
      {
        name: 'query',
        in: 'query',
        description: 'Parsable query. ex: "foo:bar", "baz:>0"',
        required: false,
        schema: {
          type: 'string',
        },
      },
    ],
  })

router.get('return-types/weird-string-entries', [ReturnTypesController, 'weirdStringEntries'])
