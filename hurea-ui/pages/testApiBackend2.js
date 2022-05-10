import { React, useState, useEffect } from "react";

export default function TestApiBackend2() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      fetch('http://localhost:8080/api/v1/users')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
      <div>
        <h1>{data.firstName}</h1>
        {/* <p>{data.lastName}</p> */}
      </div>
    )
  }