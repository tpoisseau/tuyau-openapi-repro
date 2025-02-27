import vine from '@vinejs/vine'

export const howToDescribeParams = vine.compile(
  vine.object({
    /**
     * Parsable query
     * @example 'foo:bar'
     * @example 'baz:>0'
     */
    query: vine.string().trim().optional(),
  })
)
