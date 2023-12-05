import React from 'react'
import { Routes, Route } from 'react-router-dom'
import VisitorForm from '../Components/VisitorForm'
import VisitingCard from '../Components/VisitingCard'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<VisitorForm />} />
        <Route path="/card" element={<VisitingCard />} />
      </Routes>
    </div>
  )
}

export default MainRoutes