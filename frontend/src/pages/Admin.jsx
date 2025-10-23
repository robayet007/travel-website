import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../component/Admin/Header'
import Sidebar from '../component/Admin/Sidebar'
import CategorySection from '../component/Admin/CategorySection'

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route index element={<CategoryPage category="holy-hajj" name="Holly Hajj" />} />
            <Route path="holy-hajj" element={<CategoryPage category="holy-hajj" name="Holly Hajj" />} />
            <Route path="holy-umrah-hajj" element={<CategoryPage category="holy-umrah-hajj" name="Holly Umrah Hajj" />} />
            <Route path="international-tour" element={<CategoryPage category="international-tour" name="International Tour" />} />
            <Route path="domestic-tour" element={<CategoryPage category="domestic-tour" name="Domestic Tour" />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

// Category Page Component
const CategoryPage = ({ category, name }) => {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-gray-800">{name} Management</h1>
      <CategorySection category={{ value: category, name: name }} />
    </div>
  )
}

export default Admin