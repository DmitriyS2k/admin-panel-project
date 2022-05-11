import * as React from 'react';

function DashBoardComponent({ itemData, index }) {
  const [dataCount, setDataCount] = React.useState(0);

  const time = (index + 0.5) * 1000;
  const step = 1;

  function outNum(num) {
    let n = 0;
    const t = Math.round(time / (num / step));
    const interval = setInterval(() => {
      n += step;
      if (n === num) {
        clearInterval(interval);
      }
      setDataCount(n);
    }, t);
  }

  React.useEffect(() => outNum(itemData.data), []);

  return (
    <div className="dashboard-item shadow-container">
      <h3 className="dashboard-name">{itemData.fieldName}</h3>
      <p className="dashboard-data">{dataCount}</p>
    </div>
  );
}

export default DashBoardComponent;
