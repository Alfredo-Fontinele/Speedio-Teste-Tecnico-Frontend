import * as dotenv from 'dotenv'

dotenv.config()

export const Constants = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    SECRET_KEY: process.env.SECRET_KEY,
}