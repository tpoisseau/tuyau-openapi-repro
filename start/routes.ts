/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const ValidatorsController = () => import('#controllers/validators_controller')

router.on('/').renderInertia('home')
router.get('/validators/how_to_describe_params', [ValidatorsController, 'howToDescribeParams'])
