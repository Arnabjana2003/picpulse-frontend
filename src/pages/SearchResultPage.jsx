import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
import userApis from '../Backend apis/userApis'
import ProfileImgIcon from '../components/ProfileImgIcon'
import Layout from '../components/Layout'
import { useDispatch } from 'react-redux'
import { updateSearchHistory } from '../store/authSlice'

function Cards({info}){
return(
    <div className='w-full flex justify-between'>
        <div className='left-part flex'>
            <ProfileImgIcon owner={info} />
            <div>
                <Link to={`/profile/${info._id}`}><h3 className='font-semibold'>{info.fullName}</h3></Link>
                <p className='text-sm capitalize'>{info.gender}</p>
            </div>
        </div>
        <div className='right-part'></div>
    </div>
)
}


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

    <div className='w-full'>
        {!loading && !results.length && <p className='text-center font-semibold'>No result found</p>}
        {loading && !results.length && <p className='text-center mt-10'>Loading...</p>}
        {results.map(res=><div key={res._id} className='mb-2'><Cards info={res}/></div>)}
    </div>
    </Layout>
  )
}

export default SearchResultPage