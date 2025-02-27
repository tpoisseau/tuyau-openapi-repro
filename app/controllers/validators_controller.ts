import type { HttpContext } from '@adonisjs/core/http'
import { howToDescribeParams } from '#validators/how_to_describe_param'

export default class ValidatorsController {
  howToDescribeParams({ request }: HttpContext) {
    return request.validateUsing(howToDescribeParams)
  }
}
