import React, { useState } from "react"
import { useQuery } from "react-apollo"
import  QUERY_VALUE from "../graphql/getDepartmentGroup.graphql"
import { SearchBar } from "vtex.store-components"
import DepartmentGroup from "./DepartmentGroup"


const DepartmentSearch = () => {
  const { data, loading} = useQuery(QUERY_VALUE)
  const [ slug, setSlug] = useState("")
  console.log("mi slug seleccionado", slug)

  return (
    loading
    ?
    <div>Loading....</div>
    :
    <div className="flex">
      <DepartmentGroup
      departments={data?.categories}
      handleSetSlug= {setSlug}
      />
      <SearchBar
          customSearchPageUrl={slug}
          placeholder="¿Que estás buscando?"
          displayMode="search-and-clear-buttons"
      />
    </div>
  )
}

export default DepartmentSearch


