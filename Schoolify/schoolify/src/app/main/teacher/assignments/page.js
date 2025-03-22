"use client"

import { ArrowRight, X, Plus, MoreVertical } from "lucide-react"
import { useState } from "react"

const resources = [
  {
    id: 1,
    title: "Learning Materials",
    subTopics: [
      { id: 1, title: " Chapter 01: ", description: "Explains Newton's first, second, and third laws." },
      { id: 2, title: " Chapter 02: ", description: "Covers the effects of gravity and objects in free fall." },
      { id: 3, title: " Chapter 03: ", description: "Discusses how friction and air resistance affect motion." },
    ],
  },
  {
    id: 2,
    title: "Past Papers",
    subTopics: [
      { id: 1, title: " 2021 PastPaper" },
      { id: 2, title: " 2022 PastPaper" },
    ],
  },
  {
    id: 3,
    title: "Model Papers",
    content:
      "Cell theory states that all living things are composed of cells, cells are the basic unit of structure and function in living things, and all cells arise from pre-existing cells.",
  },
]

export default function ScienceResources() {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedSubTopic, setSelectedSubTopic] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 md:p-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <h1
            className="text-4xl font-bold tracking-tight text-custom-blue md:text-5xl lg:text-6xl pl-4"
            style={{ color: "#5d98c6", float: "left" }}
          >
            Science
          </h1>
        </div>

        <div className="relative">
          {/* Main Topic List */}
          {!selectedTopic && (
            <div className="space-y-6 transition-all duration-500">
              {resources.map((resource) => (
                <button
                  key={resource.id}
                  onClick={() => setSelectedTopic(resource)}
                  className="group relative block w-full overflow-hidden rounded-xl bg-blue-400 p-6 text-left transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1"
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
            <div className="absolute left-0 top-0 w-full transition-all duration-500 opacity-100 translate-x-0">
              <div className="rounded-xl bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedTopic.title}</h2>
                  <div className="flex items-center gap-2">
                    {selectedTopic.title === "Past Papers" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          // Add your action here
                        }}
                        className="rounded-full w-8 h-8 bg-blue-500 border-2 border-dotted border-blue-300 flex items-center justify-center transition-all hover:bg-blue-600 hover:scale-110"
                      >
                        <Plus className="w-5 h-5 text-white" />
                      </button>
                    )}
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
                </div>
                <p className="text-gray-600 text-center">{selectedTopic.content}</p>

                {/* Sub-Topic Boxes */}
                {selectedTopic.subTopics && !selectedSubTopic && (
                  <div className="mt-6 space-y-4">
                    {selectedTopic.subTopics.map((subTopic) => (
                      <button
                        key={subTopic.id}
                        onClick={() => setSelectedSubTopic(subTopic)}
                        className="block w-full rounded-xl bg-blue-300 p-4 text-left transition-all duration-300 hover:bg-blue-400 hover:shadow-lg"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white">{subTopic.title}</h3>
                          <MoreVertical className="w-5 h-5 text-white opacity-75 hover:opacity-100" />
                        </div>
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

