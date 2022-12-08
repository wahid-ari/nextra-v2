import { useState } from "react";
import axios from "axios";
import formatHighlight from 'json-format-highlight';

export default function ApiPlayground({ method, endpoint, children }) {
  const [fetched, setFetched] = useState(false)
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  async function handleFetch() {
    setLoading(true)
    setFetched(false)
    try {
      const res = await axios.get(`${process.env.API_URL}/api/${endpoint}`)
      setData(res.data)
      setFetched(true)
    } catch (error) {
      console.error(error)
    } finally {
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
      <div className="flex items-center gap-4 -mb-2">
        <div className="font-medium px-1.5 text-green-600 bg-green-200 border border-green-500 rounded-lg">
          {method}
        </div>
        <p className="font-medium text-neutral-700 dark:text-neutral-200 m-0">{process.env.API_URL}/api/{endpoint}</p>
      </div>

      {children}

      <button onClick={handleFetch} className={`flex items-center gap-2 ${children !== undefined ? "mt-4" : "mt-8"} text-sm font-medium px-2.5 py-1 bg-green-600 hover:bg-green-700 transition-all duration-300 text-white rounded`}>
        <svg className="fill-white h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"></path></svg>
        {!loading ? "Send Request" : "Sending..."}
      </button>

      {fetched ?
        <div className="Code border-t dark:border-t-neutral-800 mt-4">
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