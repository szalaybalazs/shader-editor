import mysql from 'serverless-mysql';

const url = new URL(process.env.DATABASE_URL);

const db = mysql({
  config: {
    ssl: { rejectUnauthorized: true },
    host: url.host,
    port: Number(url.port),
    database: url.pathname.replace('/', ''),
    user: url.username,
    password: url.password,
  },
});

export const query = async <T>(query: string, values: any[] = []): Promise<T[]> => {
  try {
    const results = await db.query(query, values);
    await db.end();

    return results as T[];
  } catch (error) {
    throw error;
  }
};
