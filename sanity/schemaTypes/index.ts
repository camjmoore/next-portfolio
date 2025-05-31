import project from "./project-schema";
import post from "./post-schema";
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, post],
}
