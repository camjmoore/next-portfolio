import { getProject } from "@/sanity/lib/resolvers";
import { PortableText } from "@portabletext/react";

type Params = Promise<{ project: string }>

export default async function Project({ params }: { params: Params }) {
  const { project } = await params
  const selectedProject = await getProject(project);

  return (
    <div>
      <header>
        <h1>{selectedProject.name}</h1>
      </header>
      <div>
        <PortableText value={selectedProject.content} />
      </div>
    </div>
  );
}

