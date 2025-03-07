"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"

const resources = [
  {
    id: 1,
    title: "Learning Materials",
    subTopics: [
        { id: 1, title: "Chapter 01: World History", description: "Covers the all world history like World Wars, Civil Wars." },
        { id: 2, title: "Chapter 02: Civilizations", description: "Disscusses about every civilizations." },
        { id: 3, title: "Chapter 03: Sri Lankan Ancient Kingdoms", description: "Covers the Sri Lankan kings, their kingdoms and insidents." },
        { id: 4, title: "Chapter 04: Sri Lankan Political System", description: "Covers the Sri Lankan political parties, PrimeMinisters and Presidents." },
    ],
  },
  {
    id: 2,
    title: "Past Papers",
    content:
      "Atomic structure refers to the organization and composition of atoms, including protons, neutrons, and electrons, which form the basic building blocks of matter.",
  },
  {
    id: 3,
    title: "Model Papers",
    content:
      "Cell theory states that all living things are composed of cells, cells are the basic unit of structure and function in living things, and all cells arise from pre-existing cells.",
  },
]

export default function HistoryResources() {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedSubTopic, setSelectedSubTopic] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 md:p-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl pl-4" style={{ color: "#5d98c6" }}>
            Science
          </h1>
          <Link href="/" className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 transition-colors">
            Back to Subjects
          </Link>
        </div>

        <div className="relative mt-16">
          {/* Main Topic List */}
          {!selectedTopic && (
            <div className="space-y-6 transition-all duration-500">
              {resources.map((resource) => (
                <button
                  key={resource.id}
                  onClick={() => setSelectedTopic(resource)}
                  className="group relative block w-full overflow-hidden rounded-xl bg-green-400 p-6 text-left transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-white md:text-xl">{resource.title}</h2>
                    <ArrowRight className="size-6 transform text-white opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Topic Content Panel */}
          {selectedTopic && (
            <div className="w-full transition-all duration-500">
              <div className="rounded-xl bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedTopic.title}</h2>
                  <button
                    onClick={() => {
                      setSelectedTopic(null)
                      setSelectedSubTopic(null)
                    }}
                    className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100"
                  >
                    <X className="size-6" />
                  </button>
                </div>
                <p className="text-gray-600">{selectedTopic.content}</p>

                {/* Sub-Topic Boxes */}
                {selectedTopic.subTopics && !selectedSubTopic && (
                  <div className="mt-6 space-y-4">
                    {selectedTopic.subTopics.map((subTopic) => (
                      <button
                        key={subTopic.id}
                        onClick={() => setSelectedSubTopic(subTopic)}
                        className="block w-full rounded-xl bg-green-300 p-4 text-left transition-all duration-300 hover:bg-green-400 hover:shadow-lg"
                      >
                        <h3 className="text-lg font-semibold text-white">{subTopic.title}</h3>
                      </button>
                    ))}
                  </div>
                )}

                {/* Sub-Topic Content */}
                {selectedSubTopic && (
                  <div className="mt-6 rounded-xl bg-gray-100 p-4">
                    <h3 className="text-lg font-bold text-gray-800">{selectedSubTopic.title}</h3>
                    <p className="text-gray-600">{selectedSubTopic.description}</p>
                    <button
                      onClick={() => setSelectedSubTopic(null)}
                      className="mt-4 rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition hover:bg-gray-300"
                    >
                      Back to Topics
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

