import { useContext, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { DonateCardComponent } from '../context/cardContext';
import { MyDatas } from '../database/Datas';

export const Statistics = () => {
  const { donate, setDonate } = useContext(DonateCardComponent);
  const [finalDatas, setFinalDatas] = useState(MyDatas);

  const myPercentage = (donate.length / finalDatas.length) * 100;
  const totalPercentage = 100 - myPercentage;

  const data01 = [
    { name: 'Total Donation', value: totalPercentage },
    { name: 'Your Donation', value: myPercentage }
  ];
  const COLORS = ['#ff2323', '#10c6a8'];

  return (
    <div className="max-w-[1300px] overflow-hidden mx-auto flex flex-col items-center">
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className='flex-col flex md:flex-row justify-center md:space-x-10'>
        <p className='flex text-lg items-center'><span className='w-10 rounded-lg h-5 mr-2 bg-[#ff2323] block'>
        </span> Total Donation : <span className='ml-1'> {totalPercentage.toFixed(1)} %</span></p>
        <p className='flex text-lg items-center'><span className='w-10 rounded-lg h-5 mr-2 bg-[#10c6a8] block'>
        </span> Your Donation : <span className='ml-1'> {myPercentage.toFixed(1)} %</span> </p>
        

      </div>
      {/* comment--------------------> */}
      <small className='text-[12px] mt-10'><span className='text-red-600 text-xl font-bold'>*</span>This graph not support toFixed() method during initialize the state value ,<br /> which value will be the value of pie chart data's value</small>
        {/* comment--------------------> */}
    </div>
  );
};
