import vine from '@vinejs/vine'

export const wildcardParams = vine.compile(
  vine.object({
    params: vine.object({
      'category': vine.string(),
      'id': vine.number({ strict: false }),
      '*': vine.array(vine.string()),
    }),
  })
)
