import { describe, expectTypeOf, it } from 'vitest'

interface User {
  name: string
  age: number
}

type Users = User[]

describe('tool-type', () => {
  it('GetKeys', () => {
    const obj = { name: 'laoer536', height: 173 }
    const array = [1, 2, 3, 4, 5]
    const num = 3
    expectTypeOf<GetKeys<typeof obj>>().toMatchTypeOf<'name' | 'height'>()
    expectTypeOf<GetKeys<User>>().toMatchTypeOf<'name' | 'age'>()
    expectTypeOf<GetKeys<typeof array>>().toMatchTypeOf<number | keyof []>()
    expectTypeOf<GetKeys<typeof num>>().toMatchTypeOf<keyof Number>()
  })
  it('GetItemType', () => {
    const array = [1, 2, 3, 4, 5]
    const arrayObj = [
      { name: 'laoer536', height: 173 },
      { name: 'Neo Liu', height: 180 },
    ]
    const num = 3
    expectTypeOf<GetItemType<typeof array>>().toMatchTypeOf<number>()
    expectTypeOf<GetItemType<typeof arrayObj>>().toMatchTypeOf<{ name: string; height: number }>()
    expectTypeOf<GetItemType<Users>>().toEqualTypeOf<User>()
    expectTypeOf<GetItemType<typeof num>>().toMatchTypeOf<never>()
  })
})
