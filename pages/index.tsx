import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Tab } from '@headlessui/react'

const inter = Inter({ subsets: ['latin'] })

const tabs = [
  {
    key: 'all',
    display: 'All',
  },
  {
    key: 'oceans',
    display: 'Oceans'
  },
  {
    key: 'forests',
    display: 'Forests'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-[url('/photography-bg.webp')] bg-cover bg-top">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between items-center h-[90px] px-6">
        <div>Photography Portfolio</div>
        <Link href="#" className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90">
          Get in touch
        </Link>
      </header>
      <main className="grow">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) =>
                <Tab key={tab.key} className="p-2">{({ selected }) => <span className={selected ? 'text-white' : 'text-stone-600'}>{tab.display}</span>}</Tab>
              )}
            </Tab.List>
            <Tab.Panels className="h-full bg-stone-900/80 max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel className="">All Photos</Tab.Panel>
              <Tab.Panel>Oceans</Tab.Panel>
              <Tab.Panel>Forests</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
      <footer className="flex justify-center items-center h-[60px]">
        <p>Photography Portfolio</p>
      </footer>
    </div>
  )
}
