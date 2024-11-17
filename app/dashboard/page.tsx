"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplatelistSection from './_components/TemplatelistSection'

function Dashboard() {
  const [UserSearchInput , setUserSearchInput] = useState<string>();
  return (
    <div>
      {/* Search Section */}
      <SearchSection OnSearchInput={(value:string)=>setUserSearchInput(value)}/>

      {/* Template Section */}
      <TemplatelistSection UserSearchInput={UserSearchInput}/>
    </div>
  )
}

export default Dashboard
