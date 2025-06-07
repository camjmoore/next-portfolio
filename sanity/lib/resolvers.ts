import { Post } from "@/types/Post";
import { Project } from "@/types/Project";
import { Rudiment } from "@/types/Rudiment";
import { client } from "./client";
import {
  projectQuery, 
  projectBySlugQuery, 
  postQuery, 
  postBySlugQuery,
  rudimentQuery
} from "./queries";

export async function getProjects(): Promise<Project[]> {
  return client.fetch(projectQuery);
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(projectBySlugQuery, { slug });
}

export async function getPosts(): Promise<Post[]> {
  return client.fetch(postQuery);
}

export async function getPost(slug: string): Promise<Post> {
  return client.fetch(postBySlugQuery, { slug });
}

export async function getRudiments(): Promise<Rudiment> {
  return client.fetch(rudimentQuery);
}
