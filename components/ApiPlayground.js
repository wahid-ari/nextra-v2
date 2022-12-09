import { useState } from "react";
import cn from "clsx";
import axios from "axios";
import formatHighlight from 'json-format-highlight';

function MethodBadge(method) {
  if (method == "POST") {
    return (
      <div className="font-medium px-1.5 text-blue-600 bg-blue-200 border border-blue-500  rounded-lg">
        {method}
      </div>
    )
  }
  if (method == "GET") {
    return (
      <div className="font-medium px-1.5 text-green-600 bg-green-200 border border-green-500 rounded-lg">
        {method}
      </div>
    )
  }
  if (method == "PUT") {
    return (
      <div className="font-medium px-1.5 text-orange-600 bg-orange-200 border border-orange-500 rounded-lg">
        {method}
      </div>
    )
  }
  if (method == "PATCH") {
    return (
      <div className="font-medium px-1.5 text-yellow-500 bg-yellow-200 border border-yellow-500 rounded-lg">
        {method}
      </div>
    )
  }
  return (
    <div className="font-medium px-1.5 text-red-600 bg-red-200 border border-red-500 rounded-lg">
      {method}
    </div>
  )
}

export default function ApiPlayground({ method, endpoint, children, param = false, paramName = "Param" }) {
  const [fetched, setFetched] = useState(false)
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState("")
  const methodUpperCase = method.toUpperCase()

  async function handleFetch() {
    setLoading(true)
    setFetched(false)
    try {
      const res = await axios.get(`${process.env.API_URL}/api/${endpoint}`, { params: { [paramName]: value } })
      setData(res.data)
    } catch (error) {
      setData(error.response?.data)
      console.error(error)
    } finally {
      setFetched(true)
      setLoading(false)
    }
  }

  const colorOptions = {
    keyColor: '#65a30d',
    numberColor: '#f59e0b',
    stringColor: '#10b891',
    trueColor: '#0284c7',
    falseColor: '#6366f1',
    nullColor: '#ef4444'
  };

  return (
    <div className="border dark:border-neutral-800 p-4 rounded-md mt-8">
      <div className={`flex items-center gap-4 ${param ? "-mb-2" : "mb-4"}`}>
        {MethodBadge(methodUpperCase)}
        <a
          href={`${process.env.API_URL}/api/${endpoint}`}
          target="_blank"
          className="font-medium text-neutral-700 dark:text-neutral-200 m-0 hover:underline transition-all duration-200">
          /api/{endpoint}
        </a>
      </div>

      {param ?
        <div className=" -mb-2 mt-6">
          <div className="border-b dark:border-b-neutral-800 mb-5">
            <button className="pb-2 text-sm text-green-600 font-medium border-b-2 border-b-green-600">Query</button>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <p className="font-medium text-neutral-700 dark:text-neutral-200 m-0">{paramName}</p>
            <input onChange={(e) => setValue(e.target.value)} type="text" className="bg-[#f7f7f7] border border-neutral-300 dark:border-neutral-700 dark:bg-[#111] py-0.5 px-2 rounded-md" />
          </div>
        </div>
        : null
      }

      {children}

      <button onClick={handleFetch} className={cn(`flex items-center gap-2 ${children !== undefined ? "mt-4" : "mt-8"}`,
        "text-sm font-medium px-2.5 py-1 transition-all duration-300 text-white rounded",
        `${methodUpperCase == "GET" ? "bg-green-600 hover:bg-green-700" : ""}`,
        `${methodUpperCase == "POST" ? "bg-blue-600 hover:bg-blue-700" : ""}`,
        `${methodUpperCase == "PUT" ? "bg-orange-600 hover:bg-orange-700" : ""}`,
        `${methodUpperCase == "PATCH" ? "bg-yellow-500 hover:bg-yellow-600" : ""}`,
        `${methodUpperCase == "DELETE" ? "bg-red-600 hover:bg-red-700" : ""}`,
      )}>
        <svg className="fill-white h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"></path></svg>
        {!loading ? "Send Request" : "Sending..."}
      </button>

      {fetched ?
        <div className="Code border-t dark:border-t-neutral-800 mt-5">
          <pre className="pt-3">
            <div dangerouslySetInnerHTML={{ __html: formatHighlight(data, colorOptions) }}>
            </div>
          </pre>
        </div>
        : null
      }

    </div>
  )
}