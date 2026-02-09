import React from 'react';

export default function UserEmpathyMap() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-white">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-2 font-medium">
          GoFlow User Empathy Map: SMB Ops/RevOps Operator
        </h1>
        <p className="text-sm md:text-base text-gray-500">
          Confidence from reversibility, not simplicity
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 text-black">
        <div className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 border border-blue-300 rounded text-xs md:text-sm">
          <span className="font-semibold">Persona:</span> SMB
          Ops/RevOps Operator
        </div>
        <div className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 border border-blue-300 rounded text-xs md:text-sm">
          <span className="font-semibold">Company Size:</span>{" "}
          20-250 employees
        </div>
        <div className="px-3 md:px-4 py-1.5 md:py-2 bg-yellow-100 border border-yellow-400 rounded text-xs md:text-sm">
          <span className="font-semibold">Tech Literacy:</span>{" "}
          Beginner → Intermediate
        </div>
      </div>

      {/* Empathy Map Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
        {/* FEELS */}
        <div className="bg-pink-100 border-2 border-pink-300 rounded-lg p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3 md:mb-4">
            FEELS
          </h2>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>Anxious before hitting Run</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>Overwhelmed by technical jargon</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>Responsible for data integrity</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>Frustrated when integrations break</span>
            </li>
          </ul>
        </div>

        {/* SAYS */}
        <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3 md:mb-4">
            SAYS
          </h2>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>
                "I need to sync data between tools without
                breaking anything"
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>"Our tools don't talk to each other"</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>"I don't have time to learn code"</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>"What if I delete the wrong records?"</span>
            </li>
          </ul>
        </div>

        {/* DOES */}
        <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3 md:mb-4">
            DOES
          </h2>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>
                Manually copy-paste data between systems (4-8
                hours/week)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>
                Tests integrations in separate sandbox
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>Exports files with dummy data</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>Checks logs after runs</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>But can't undo mistakes</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>Calls developer when something breaks</span>
            </li>
          </ul>
        </div>

        {/* THINKS */}
        <div className="bg-pink-100 border-2 border-pink-300 rounded-lg p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3 md:mb-4">
            THINKS
          </h2>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>
                "This should just work, but what if I mess up?"
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>
                My boss needs this working by tomorrow
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>
                I can't undo data changes – they'll blame me
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>
                Will my team blame me if integration fails?
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* User Quote - Center */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          {/* Quote Box */}
          <div className="bg-yellow-200 border-2 border-yellow-400 rounded-lg p-3 md:p-4 max-w-lg md:max-w-sm mx-auto">
            <p className="text-xs md:text-sm text-gray-700 text-center font-medium">
              User Quote:
              <br />
              "I get it. I don't know how to undo this if
              it goes wrong."
            </p>
          </div>
          {/* Arrow */}
          <div className="flex justify-center mt-2">
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Section - Pain Points and Gains */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
        {/* PAIN POINTS */}
        <div className="bg-pink-100 border-2 border-pink-300 rounded-lg p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3 md:mb-4">
            PAIN POINTS
          </h2>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>Fear of irreversible data mistakes</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>
                No clear recovery path if execution fails
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>Hidden/unclear error states</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>Can't see blast radius of operations</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>Lack of hands-on technical training</span>
            </li>
          </ul>
        </div>

        {/* GAINS */}
        <div className="bg-green-200 border-2 border-green-400 rounded-lg p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3 md:mb-4">
            GAINS
          </h2>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>
                Visibility into what will happen before
                execution
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>One-click undo capability</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>Clear error logs and documentation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>
                Self-service recovery without developer
                escalation
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">●</span>
              <span>
                Time savings from reduced manual reconciliation
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Stakes */}
      <div className="bg-white border-2 border-pink-400 rounded-lg p-3 md:p-4 mb-4">
        <p className="text-xs md:text-sm text-gray-700 text-center">
          <span className="font-semibold">Stakes:</span>{" "}
          Revenue-critical systems: CRM, Finance sync, Customer
          data accuracy, Process automation
        </p>
      </div>

      {/* Confidence Scale */}
      <div className="flex items-center justify-between text-xs md:text-sm px-4">
        <span className="text-red-500 font-medium">
          ← Anxious
        </span>
        <span className="text-green-600 font-medium">
          Confident →
        </span>
      </div>
    </div>
  );
}