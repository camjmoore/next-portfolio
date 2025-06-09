import project from "./project-schema";
import post from "./post-schema";
import rudiment from "./rudiment-schema";
import about from "./about-schema";
import { type SchemaTypeDefinition } from 'sanity'

export const schemaTypes: { types: SchemaTypeDefinition[] } = {
  types: [project, post, rudiment, about],
}
