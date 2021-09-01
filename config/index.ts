type envType = 'dev' | 'prod' | 'test'

export const env: envType = process.env.ENV as envType
