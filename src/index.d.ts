type GetKeys<T> = T extends Record<infer U, any> ? U : never
type GetItemType<T> = T extends (infer U)[] ? U : never
