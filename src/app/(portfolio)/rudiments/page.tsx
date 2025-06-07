import Layout from "@/components/Layout";
import { getRudiments } from "@/sanity/lib/resolvers";
import { Rudiment } from "@/types/Rudiment";
import { PortableText } from "@portabletext/react";

type RudimentGroup = {
  title: string;
  items: Rudiment[]
}

export default async function Rudiments(){

  const rudiments = await getRudiments();

  const groupByCategory = (rudiments: Rudiment[]): RudimentGroup[] => {
    return Object.values(
      rudiments.reduce((acc, rudiment: Rudiment) => {
        if(!acc[rudiment.category]) {
          acc[rudiment.category] = { title: rudiment.category, items: []}
        }
        acc[rudiment.category].items.push(rudiment);

        return acc;
      },{} as Record<string, RudimentGroup>)
    )
  }

  const rudimentsByCategory = groupByCategory(rudiments);

  return (
    <Layout>
      <span className="mx-auto px-3 rounded-full text-center text-sm border bg-amber-700/20 text-amber-700 border-amber-700/30">under construction</span>
      <header className="max-w-2xl">
        <h1 className="flex text-4xl font-bold tracking-tight text-zinc-800 dark:text-white sm:text-5xl"> 
          Rudiments

        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">Fundamental concepts, best practices and &apos;etudes&apos; in web-development that have formed my foundation</p>
      </header>

      <div className="space-y-8 mt-16">
        {rudimentsByCategory.map((category: RudimentGroup, index) => (
          <div className="space-y-4" key={index}>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-600 dark:text-zinc-800 border-b border-zinc-700/40 pb-2">
              {category.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item: Rudiment) => (
                <div className="bg-white dark:bg-zinc-900 backdrop-blur-sm rounded-lg p-4 transition-all group cursor-pointer z-0 hover:scale-105 transition hover:opacity-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50" key={item._id}>

                  <h3 className="font-medium text-zinc-800 dark:text-zinc-100 group-hover:text-orange-500 transition-colors mb-2">
                    {item.name}
                  </h3>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <PortableText value={item.content} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </Layout>
  )
}
