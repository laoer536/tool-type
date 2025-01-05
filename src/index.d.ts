type GetKeys<T> = T extends Record<infer U, any> ? U : never
