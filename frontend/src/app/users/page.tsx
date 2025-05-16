"use client"

import { useState } from "react"
import { FaChevronDown, FaChevronRight } from "react-icons/fa"

// Define the data type
export interface DataItem {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address1?: string
  address2?: string
  phoneFormatted?: string
}

export default function Home() {
  // Sample data
  const data: DataItem[] = [
    { id: "0001", firstName: "Duggal", lastName: "Burgen", email: "Duggal@gmail.com", phone: "0001893" },
    { id: "0002", firstName: "Duggal", lastName: "Burgen", email: "Duggal@gmail.com", phone: "0001894" },
    { id: "0003", firstName: "Duggal", lastName: "Burgen", email: "Duggal@gmail.com", phone: "0001895" },
    { id: "0004", firstName: "Duggal", lastName: "Burgen", email: "Duggal@gmail.com", phone: "0001896" },
    { id: "0005", firstName: "Duggal", lastName: "Burgen", email: "Duggal@gmail.com", phone: "" },
    { id: "0006", firstName: "Duggal", lastName: "Burgen", email: "Duggal@gmail.com", phone: "0001898" },
    { id: "0007", firstName: "Duggal", lastName: "Burgen", email: "Duggal@gmail.com", phone: "0001899" },
    { id: "0008", firstName: "Duggal", lastName: "Burgen", email: "Duggal@gmail.com", phone: "0001900" },
    {
      id: "0009",
      firstName: "Duggal",
      lastName: "Burgen",
      email: "Duggal@gmail.com",
      phone: "0001901",
      address1: "779 Reserve Road",
      address2: "Room 1455",
      phoneFormatted: "604-848-8755",
    },
    { id: "0010", firstName: "Duggal", lastName: "Burgen", email: "Duggal@gmail.com", phone: "" },
  ]

  // State for selected item
  const [selectedItem, setSelectedItem] = useState<DataItem>(data[8])
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="min-h-screen bg-[#007aff] p-6 flex flex-col items-center justify-center gap-8">
      <div className="w-full max-w-5xl grid grid-cols-1 gap-6">
        {/* Main Data Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f5f5f5] text-[#575f6e] border-b border-[#d4d4d4]">
                  <th className="px-4 py-2 text-left font-medium text-sm whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <span>First Name</span>
                      <FaChevronDown />
                    </div>
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-sm whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <span>Last Name</span>
                      <FaChevronDown />
                    </div>
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-sm whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <span>Email</span>
                      <FaChevronDown />
                    </div>
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-sm whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <span>Phone</span>
                      <FaChevronDown />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.id}
                    className="py-2 hover:bg-[#f5f5f5] cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <td className="px-4 py-3 text-[#242731] text-sm">{item.id}</td>
                    <td className="px-4 py-3 text-[#242731] text-sm">{item.firstName}</td>
                    <td className="px-4 py-3 text-[#242731] text-sm">{item.email}</td>
                    <td className="px-4 py-3 text-[#242731] text-sm">{item.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between px-4 py-2 bg-white border-t border-[#d4d4d4]">
            <div className="flex items-center gap-2 text-sm text-[#575f6e]">
              <span>Items per page:</span>
              <div className="flex items-center gap-1 cursor-pointer">
                <select name="" defaultValue={itemsPerPage}>
                  <option value={'5'}>5</option>
                  <option value={'10'}>10</option>
                  <option value={'20'}>20</option>
                  <option value={'50'}>50</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                className="h-8 w-8 flex items-center justify-center rounded border border-[#d4d4d4] bg-[#007aff] text-white text-sm"
                onClick={() => setCurrentPage(1)}
              >
                1
              </button>
              <button
                className="h-8 w-8 flex items-center justify-center rounded border border-[#d4d4d4] bg-white text-[#575f6e] text-sm"
                onClick={() => setCurrentPage(2)}
              >
                2
              </button>
              <button
                className="h-8 w-8 flex items-center justify-center rounded border border-[#d4d4d4] bg-white text-[#575f6e] text-sm"
                onClick={() => setCurrentPage(3)}
              >
                3
              </button>
              <span className="px-1">...</span>
              <button
                className="h-8 w-8 flex items-center justify-center rounded border border-[#d4d4d4] bg-white text-[#575f6e] text-sm"
                onClick={() => setCurrentPage(10)}
              >
                10
              </button>
              <button
                className="h-8 w-8 flex items-center justify-center rounded border border-[#d4d4d4] bg-white text-[#575f6e] text-sm"
                onClick={() => setCurrentPage(11)}
              >
                11
              </button>
              <button
                className="h-8 w-8 flex items-center justify-center rounded border border-[#d4d4d4] bg-white text-[#575f6e] text-sm"
                onClick={() => setCurrentPage(12)}
              >
                12
              </button>
              <button className="h-8 w-8 flex items-center justify-center rounded border border-[#d4d4d4] bg-white text-[#575f6e] text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Go to page */}

            <div className="flex items-center gap-1">
              <p className="text-gray-400">Go to page</p>
              <input type="text" name="pageNo" className="border-b border-b-gray-400" />
              <FaChevronRight className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
