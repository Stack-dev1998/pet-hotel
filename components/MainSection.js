import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Chart from "chart.js/auto";
import searchIcon from "../public/icons/searchIcon.svg";
import img1 from "../public/images/Img1.png";
import img2 from "../public/images/Img2.png";
import img3 from "../public/images/Img3.png";
let data = [
  { name: "Lilliana M.", price: "$150", btnText: "grooming", img: img1 },
  { name: "Lilliana C.", price: "$130", btnText: "Daycare", img: img2 },
  { name: "Lilliana M.", price: "$150", btnText: "grooming", img: img3 },
  { name: "Lilliana C.", price: "$130", btnText: "Daycare", img: img2 },
  { name: "Lilliana M.", price: "$150", btnText: "grooming", img: img1 },
  { name: "Lilliana C.", price: "$130", btnText: "Daycare", img: img3 },
];

function MainSection(props) {
  return (
    <div className="flex">
      <LeftSide />
      <div className=" w-3/5 bg-[#FFEDF1] relative px-4 py-3">
        <CustomCalender />

        <p className="font-bold my-auto mt-5">Analytics</p>
        <div className="flex items-center">
          <div class="circular mt-4">
            <div class="inner"></div>
            <div class="number flex flex-col justify-center items-center text-center font-bold">
              100%
              <span className=" text-xs text-black opacity-50 font-normal">
                Occupancy rate
              </span>
            </div>
            <div class="circle">
              <div class="bar left">
                <div class="progress"></div>
              </div>
              <div class="bar right">
                <div class="progress"></div>
              </div>
            </div>
          </div>
          <div className="ml-5">
            <p>
              <span>Occupancy rate: </span>{" "}
              <span className="text-[#910707] font-bold">75%</span>
            </p>
            <p>
              <span>Vacancy: </span>{" "}
              <span className="text-[#910707] font-bold">25%</span>
            </p>
          </div>
        </div>
        <p className="font-bold my-auto mt-5"> Monthly Revenue </p>
        <ChartComponent />
      </div>
    </div>
  );
}

export default MainSection;

function LeftSide() {
  return (
    <div className="w-full px-4 mt-4">
      <div className="flex justify-between">
        <p className=" font-bold text-[#920808] my-auto text_shadow">
          Hotel Occupants
        </p>
        <span className=" font-medium rounded-full bg-[#DF8181] py-2 px-3 text-white btn_shadow cursor-pointer">
          + Add Ocupants
        </span>
      </div>

      <div className="flex justify-between my-4">
        <p className="  opacity-30 my-auto text_shadow">
          Search hotel occupants
        </p>
        <span className=" font-medium cursor-pointer">
          <Image src={searchIcon} />
        </span>
      </div>

      <p className=" border-b-2 border-[#df8181] w-full"></p>

      <div className="flex justify-between my-4">
        <p className=" font-bold   my-auto text_shadow">Incoming occupants</p>
        <span className=" font-medium    ">
          <span className=" text-3xl opacity-40">&#8249;</span>
          <span className=" text-3xl ml-1  text-[#df8181]">&#8250;</span>
        </span>
      </div>

      <div className="flex justify-between">
        <div className=" rounded-xl   flex flex-col   items-center w-1/3 p-3 bg-[#df8181] text-center text-white box_shadow">
          <div className=" w-20 h-20 mx-auto">
            <Image src={img2} />
          </div>
          <p className=" font-semibold mt-3">Jonathan D.</p>
          <button className="uppercase px-2 py-1 my-3 rounded-md text-xs font-semibold bg-white text-[#df8181]  s ">
            GROOMING
          </button>
          <p className=" text-xs">Feb 12 - Feb 14</p>
          <p className=" text-sm font-medium mt-3">Unpaid balance: $120</p>

          <button className=" px-4 py-2 my-3 rounded-full text-md font-semibold bg-[#920808] text-white ">
            Send Payment Link
          </button>
        </div>

        <div className=" rounded-xl box_shadow flex flex-col   items-center w-1/3 p-3 bg-white text-center">
          <div className=" w-20 h-20 mx-auto">
            <Image src={img1} />
          </div>
          <p className=" font-semibold mt-3">Jassica P.</p>
          <button className=" uppercase px-2 py-1 my-3 rounded-md text-xs font-semibold bg-[#df8181] text-white ">
            Daycare
          </button>
          <p className=" text-xs opacity-40 mb-3">Feb 12 - Feb 14</p>
          <p className="text-lg font-bold mt-2">$130</p>

          <p className="text-[#3CA683] font-bold text-sm mt-2">Paid</p>
        </div>
      </div>
      <p className="font-bold   my-auto text_shadow mt-6 text-xl tracking-wide">
        Current occupants
      </p>
      <div className="  p-3 h-96 overflow-y-scroll mt-5">
        {data.map((el) => {
          return (
            <div className="flex divide-x divide-[red]   box_shadow rounded-xl mb-5">
              <div className=" w-9/12 flex   items-center p-4 ">
                <div className=" w-20 h-20  ">
                  <Image src={el.img} />
                </div>
                <div className="ml-4">
                  <p className="font-bold">Lilliana M.</p>
                  <button className="uppercase px-2 py-1 my-2 rounded-md text-xs font-semibold bg-[#df8181] text-white">
                    {el.btnText}
                  </button>
                  <p className=" opacity-50">Feb 12 - Feb 14</p>
                </div>
              </div>
              <div className=" w-3/12 flex justify-center items-center p-4 ">
                <div className="text-center">
                  <p className="text-lg font-bold mt-2">{el.price}</p>
                  <p className="text-[#3CA683] font-bold text-sm mt-2">Paid</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CustomCalender() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState(null);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const nextMonth = () => {
    const cYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    const cMonth = (currentMonth + 1) % 12;
    setCurrentMonth(cMonth);
    setCurrentYear(cYear);
  };

  const previousMonth = () => {
    const cYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const cMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    setCurrentMonth(cMonth);
    setCurrentYear(cYear);
  };

  const getSelectedDate = (e) => {
    const day = e.target.getAttribute("data-value");
    const t = new Date(currentYear, currentMonth, parseInt(day));
    setSelectedDay(t.getTime());
  };

  const checkSelectedDay = (day) => {
    const t = new Date(currentYear, currentMonth, parseInt(day));
    if (selectedDay === t.getTime()) {
      return "outline outline-[#DF8181] rounded-md";
    }
    return "";
  };

  useEffect(() => {
    showCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  function showCalendar(month, year) {
    let firstDay = new Date(year, month).getDay();
    let nextMonthDays = 1;
    let previousMonthLastDay = firstDay;
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const totalDaysInMonth = daysInMonth(previousMonth, currentYear);
    const createRow = (i) => {
      let td = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          //show previous month days
          td.push(
            <td className="w-full border-r  flex justify-center  items-center py-2 opacity-40">
              {totalDaysInMonth - previousMonthLastDay + 1}
            </td>
          );
          previousMonthLastDay--;
        } else if (date > daysInMonth(month, year)) {
          //show next month days
          td.push(
            <td className="w-full border-r  flex justify-center items-center py-2 opacity-40">
              {nextMonthDays}
            </td>
          );
          nextMonthDays++;
        } else {
          if (
            date === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth()
          ) {
            td.push(
              <td
                className={`w-full border-r  flex justify-center items-center py-2 text-red bg-[#DF8181]  cursor-pointer ${checkSelectedDay(
                  date
                )}`}
                data-value={date}
                onClick={(e) => getSelectedDate(e)}
              >
                {date}
              </td>
            );
          } else {
            td.push(
              <td
                className={`w-full border-r  flex justify-center items-center py-2 cursor-pointer ${checkSelectedDay(
                  date
                )}`}
                data-value={date}
                onClick={(e) => getSelectedDate(e)}
              >
                {date}
              </td>
            );
          }

          date++;
        }
      }
      return td;
    };
    // creating all cells
    let date = 1;
    const rows = [];
    for (let i = 0; i < 6; i++) {
      rows.push(
        <tr className=" w-full flex justify-around border-b ">
          {createRow(i).map((el) => el)}
        </tr>
      );
    }
    return rows;
  }

  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }
  console.log("rendrdssss");
  return (
    <div className="bg-white rounded-xl  ">
      <div className="flex justify-between items-center p-3 border-b">
        <span
          className="text-3xl text-[red] my-auto opacity-40 cursor-pointer"
          onClick={() => previousMonth()}
        >
          &#60;
        </span>
        <span className=" font-bold text-[#910707]">
          {months[currentMonth]} {currentYear}
        </span>
        <span
          className="text-3xl text-[red] my-auto opacity-40 cursor-pointer "
          onClick={() => nextMonth()}
        >
          &#62;
        </span>
      </div>
      <div className="pb-4">
        <table className="w-full">
          <thead className=" w-full flex justify-around border-b   mt-4">
            <th className="w-10 flex justify-center items-center">Su</th>
            <th className="w-10 flex justify-center items-center">Mo</th>
            <th className="w-10 flex justify-center items-center">Tu</th>
            <th className="w-10 flex justify-center items-center">We</th>
            <th className="w-10 flex justify-center items-center">Th</th>
            <th className="w-10 flex justify-center items-center">Fr</th>
            <th className="w-10 flex justify-center items-center">Sa</th>
          </thead>
          <tbody>
            {showCalendar(currentMonth, currentYear).map((el) => {
              return el;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const ChartComponent = () => {
  const canvasEl = useRef(null);

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    // const ctx = document.getElementById("myChart");

    const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];

    const labels = ["Oct 2021", "Nov 2021", "Dec 2021", "Jan 2022", "Feb 2022"];
    var gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, "rgba(223, 129, 129, 0.8)");
    gradient.addColorStop(1, "#DF81AE");
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          borderWidth: "1px",
          label: "My First Dataset",
          data: weight,
          fill: true,
          borderRadius: 10,
          lineTension: 0.2,
          barThickness: 40,
          pointRadius: 3,
        },
      ],
    };
    const config = {
      type: "bar",
      data: data,
      options: { plugins: { legend: { display: false } } },
    };
    const myLineChart = new Chart(ctx, config);
    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div className="App">
      <div className="relative mt-5">
        <canvas id="myChart" ref={canvasEl} height="200" />
      </div>
    </div>
  );
};
