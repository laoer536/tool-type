import { describe, expectTypeOf, it } from 'vitest'

describe('tool-type', () => {
  it('GetKeys', () => {
    const obj = { name: 'laoer536', height: 173 }
    const array = [1, 2, 3, 4, 5]
    const num = 3
    expectTypeOf<GetKeys<typeof obj>>().toMatchTypeOf<'name' | 'height'>()
    expectTypeOf<GetKeys<typeof array>>().toMatchTypeOf<number>()
    expectTypeOf<GetKeys<typeof num>>().toMatchTypeOf<never>()
  })
})
