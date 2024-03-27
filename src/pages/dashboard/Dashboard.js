import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Card from "../../component/card/Card";
import { MdPeopleAlt } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { UserData } from "../../data/Data";
import LineChart from "../../component/Chart/LineChart";
import BarChart from "../../component/Chart/BarChart";
import PieCharts from "../../component/Chart/PieChart";

export default function Dashboard() {
  const [dataNumber, setDataNumber] = useState([]);
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "Pendapatan",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    if (UserData) {
      setUserData({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Pendapatan Tahunan",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    }
  }, [UserData]);

  const Data = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: 500,
      delay: 250,
      config: { mass: 1, tension: 20, friction: 10 },
    });

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  };
  const borrowedAssets = dataNumber.filter((asset) => asset.is_borrowed);
  const borrowedAssetsCount = borrowedAssets.length;
  const itemCount = dataNumber.length - borrowedAssetsCount;

  const cardData = [
    {
      icon: <GrMoney size={50} color="white" />,
      tag: "Jumlah Pendapatan",
      data: <Data n={`Rp${itemCount}`} />,
    },
    {
      icon: <MdPeopleAlt size={50} color="white" />,
      tag: "Jumlah Antrian",
      data: <Data n={itemCount} />,
    },
  ];
  return (
    <aside className="w-[77rem] h-[51.563rem] bg-white mt-[1.5rem] rounded-xl shadow-2xl z-0">
      <h1 className="text-[2rem] pl-[1.875rem] pt-[2.125rem] font-semibold">
        Dashboard
      </h1>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex gap-4 pl-[1.875rem] pt-[1.625rem]">
            {cardData.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                tag={card.tag}
                data={card.data}
              />
            ))}
          </div>
          <div className="w-[35.5rem] h-[33.563rem] ml-[1.875rem] mt-[1.875rem] bg-[#EEEEEE] shadow-lg border-2 rounded-xl">
            <h1 className="ml-[1.475rem] mt-[0.575rem] font-bold">
              Grafik Arus Antrian
            </h1>
            <div className="ml-[1.975rem] mt-[2rem]">
              <PieCharts />
            </div>
            <div className="flex flex-col gap-3 ml-[1.875rem] mb-[2rem]">
              <div className="flex flex-row gap-2">
                <div className="w-[25px] h-[25px] bg-[#4C97F8] rounded-md" />
                <h1 className="font-normal text-[1rem]">Dine In</h1>
              </div>
              <div className="flex flex-row gap-2">
                <div className="w-[25px] h-[25px] bg-[#4FB0AE] rounded-md" />
                <h1 className="font-normal text-[1rem]">Take Away</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="w-[35.5rem] h-[20.563rem] ml-[1.875rem] mt-[1.875rem] bg-[#EEEEEE] shadow-lg border-2 rounded-xl">
            <h1 className="ml-[1.475rem] mt-[0.575rem] font-bold">
              Grafik Pendapatan
            </h1>
            <div className="w-[32.5rem] ml-[1.475rem]">
              <LineChart chartData={userData} />
            </div>
          </div>
          <div className="w-[35.5rem] h-[20.563rem] ml-[1.875rem] mt-[1.875rem] bg-[#EEEEEE] shadow-lg border-2 rounded-xl">
            <h1 className="ml-[1.475rem] mt-[0.575rem] font-bold">
              Grafik Pemesanan
            </h1>
            <div className="w-[32.5rem]  ml-[1.475rem]">
              <BarChart chartData={userData} />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
