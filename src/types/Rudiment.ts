import { PortableTextBlock } from "sanity";

export type Rudiment = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  content: PortableTextBlock[];
  category: string;
  tags: string[];
};

export type RudimentArray = Rudiment[]
