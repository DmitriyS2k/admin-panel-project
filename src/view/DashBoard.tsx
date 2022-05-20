import * as React from 'react';
import { observer } from 'mobx-react-lite';
import DashBoardItem from '../components/DashBoardItem';
import userStore from '../store/userStore';

function DashBoard() {
  const { getUsersData, usersList } = userStore;

  React.useEffect(() => { getUsersData(); }, []);

  const averageAgeCalc = (): number => {
    // eslint-disable-next-line max-len
    const result = usersList.reduce((previousValue: number, currentValue: any) => currentValue.age + previousValue, 0);
    return Math.floor(result / usersList.length);
  };

  const genderMaleCountCalc = (): number => {
    let count: number = 0;
    usersList.forEach((item: any) => { if (+item.gender) { count += 1; } });
    return count;
  };

  const genderFemaleCountCalc = (): number => usersList.length - genderMaleCountCalc();

  const dateFromProjectStartCalc = (): number => {
    const now = new Date();
    const startDay = new Date(2022, 3, 23);
    const elapsedT = ((now.getTime() - startDay.getTime()) / 1000 / 60 / 60 / 24);
    return Math.floor(elapsedT);
  };

  const data = [{ fieldName: 'Количество юзеров', data: usersList.length },
    { fieldName: 'Средний возраст', data: averageAgeCalc() },
    { fieldName: 'Мужчин', data: genderMaleCountCalc() },
    { fieldName: 'Женщин', data: genderFemaleCountCalc() },
    { fieldName: 'Дней этому проекту', data: dateFromProjectStartCalc() },
    { fieldName: 'Еще счетчик', data: 1042 },
    { fieldName: 'Рост Кецика', data: 158 },
    { fieldName: 'Цена бензина', data: 65 }];

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="dashboard-content">
        {data.map((item, i) => (
          <DashBoardItem
            itemData={item}
            index={i}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
}

export default observer(DashBoard);
