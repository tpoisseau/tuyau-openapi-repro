import type { HttpContext } from '@adonisjs/core/http'
import { wildcardParams } from '#validators/wildcard_params'

export default class WildcardController {
  wildcardRoute({ request }: HttpContext) {
    return request.validateUsing(wildcardParams)
  }
}
