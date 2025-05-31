import { groq } from "next-sanity";

export const projectQuery = groq`
  *[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
  }
`;

export const postQuery = groq`
  *[_type == "post"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    content,
    tags
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    content,
    tags
  }
`;
