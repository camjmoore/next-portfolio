'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/sanity-studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import { structureTool } from 'sanity/structure'
//import {defineDocumentType} from '@/sanity/typed-document-types'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from '@/sanity/env'
import {schemaTypes} from '@/sanity/schemas'
import {structure} from '@/sanity/structureResolver'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: schemaTypes,
  plugins: [
    structureTool(structure),
    visionTool({defaultApiVersion: apiVersion}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
  ],
})
