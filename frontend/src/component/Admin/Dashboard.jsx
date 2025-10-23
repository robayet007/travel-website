import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CategorySection from './CategorySection';

const Dashboard = () => {
  const categories = [
    { id: 1, name: 'Holly Hajj', value: 'holy-hajj' },
    { id: 2, name: 'Holly Umrah Hajj', value: 'holy-umrah-hajj' },
    { id: 3, name: 'International Tour', value: 'international-tour' },
    { id: 4, name: 'Domestic Tour', value: 'domestic-tour' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {categories.map(category => (
              <CategorySection 
                key={category.id} 
                category={category}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;