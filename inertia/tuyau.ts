import { api } from '../.adonisjs'
import { createTuyau } from '@tuyau/client'

export const tuyau = createTuyau({
  api,
  baseUrl: 'http://localhost:3333',
})

async function testTypes() {
  const response = await tuyau['return-types']['enrich-model'].$get()
  const data = response.data
  if (!data) return

  const { usersBuggy, usersFixed, users, serializedUsers } = data
  // @ts-ignore
  type UserBuggy = (typeof usersBuggy)[number] // {}
  // @ts-ignore
  type UserFixed = (typeof usersFixed)[number] // expanding correctly, all props of User + mailto
  // @ts-ignore
  type User = (typeof users)[number] // ModelObject (not very usefully)
  // @ts-ignore
  type SerializedUser = (typeof serializedUsers)[number] // ModelObject (not very usefully)
  /*
   * reminder of Lucid ModelObject interface
   *
   * interface ModelObject {
   *  [key: string]: any;
   * }
   */
}

void testTypes().catch(() => {})
