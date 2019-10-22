import { fileLoader } from 'merge-graphql-schemas';
import * as path from 'path';

export const resolvers = fileLoader(path.join(__dirname, './**/*.resolvers.*'));
