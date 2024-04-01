import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import userApis from '../Backend apis/userApis'
import Layout from '../components/Layout'
import { useDispatch } from 'react-redux'
import { updateSearchHistory } from '../store/authSlice'
import UserCard from '../components/UserCard'



function SearchResultPage() {
    const {query} = useParams()
    const [results,setResults] = useState([])
    const [loading,setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(()=>{
        userApis.searchResult(query)
        .then((res)=>{
            console.log(res.data.searchResult)
            setResults(res.data.searchResult)
            dispatch(updateSearchHistory([...res.data.updatedHistory.searchHistory].reverse()))
        })
        .catch(err=>{
            console.log(err)
        })
        .finally(()=>setLoading(false))
    },[query])
  return (
    <Layout>

    <div className='w-full md:w-[80%] lg:w-[70%] mx-auto p-2'>
        {!loading && !results.length && <p className='text-center font-semibold'>No result found</p>}
        {loading && !results.length && <p className='text-center mt-10'>Loading...</p>}
        {results.map(res=><div key={res._id} className='mb-5'><UserCard info={res} isFriend={res.statusWithCurrentUser}/></div>)}
    </div>
    </Layout>
  )
}

export default SearchResultPage