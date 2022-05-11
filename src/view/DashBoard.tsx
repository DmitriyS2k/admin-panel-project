import * as React from 'react';
import DashBoardComponent from '../components/DashBoardComponent';

function DashBoard() {
  const dataObject = [{ fieldName: 'Количество юзеров', data: 50 },
    { fieldName: 'Средний возраст', data: 25 },
    { fieldName: 'Количество мужчин', data: 72 },
    { fieldName: 'Количество женщин', data: 28 },
    { fieldName: 'Еще статистика', data: 157 },
    { fieldName: 'Еще статистика', data: 288 },
    { fieldName: 'Еще статистика', data: 1104 },
    { fieldName: 'Еще статистика', data: 378 }];

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="dashboard-content">
        {dataObject.map((item, i) => (
          <DashBoardComponent
            itemData={item}
            index={i}
            key={item.fieldName}
          />
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
