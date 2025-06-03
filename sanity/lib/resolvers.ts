import { Post } from "@/types/Post";
import { Project } from "@/types/Project";
import { client } from "./client";
import {
  projectQuery, 
  projectBySlugQuery, 
  postQuery, 
  postBySlugQuery
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
