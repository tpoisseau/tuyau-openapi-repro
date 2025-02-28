import User from '#models/user'
import type { ModelAttributes } from '@adonisjs/lucid/types/model'

export default class ReturnTypesController {
  async weirdStringEntries() {
    // weird string[] expanding
    const sourceSelectorImplicit = { files: [] as string[] }
    const sourceSelectorExplicit: { files: string[] } = { files: [] }
    // correct type expanding
    const entriesArray: Array<{ relativePath: string }> = []
    const entriesArrayCompact: { relativePath: string }[] = []

    return {
      sourceSelectorImplicit,
      sourceSelectorExplicit,
      entriesArray,
      entriesArrayCompact,
    }
  }

  async enrichModel() {
    const users = await User.all()

    return {
      usersBuggy: users.map(
        (u): EnrichModel => ({
          ...(u.$attributes as ModelAttributes<User>),
          password: null,
          mailto: `${u.fullName} <${u.email}>`,
        })
      ),
      usersFixed: users.map((u) => ({
        ...(u.$attributes as ModelAttributes<User>),
        password: null,
        mailto: `${u.fullName} <${u.email}>`,
      })),
      users,
      serializedUsers: users.map((u) => u.serialize()),
    }
  }
}

type EnrichModel = Omit<ModelAttributes<User>, 'password'> & { mailto: string; password: null }
