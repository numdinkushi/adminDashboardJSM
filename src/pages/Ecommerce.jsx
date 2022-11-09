import React from "react"
import { BsCurrencyDollar } from "react-icons/bs"
import { GoPrimitiveDot } from "react-icons/go"
import { Stacked, Pie, Button, SparkLine } from "../components"
import { earningData, SparklineAreaData, ecomPieChartDat } from "../data/dummy"
import { useStateContext } from "../contexts/ContextProvider"

export const Ecommerce = () => {
  const {currentColor} = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-cente r">
        <div
          className=" dark:text-gray-200 dark:bg-secondary-dark-bg h-44 bg-gradient-to-r from-cyan-500 to-blue-500
          rounded-xl w-full lg:w-88 p-8 pt-9 m-3  bg-no-repeat bg-cover bg-center
          "
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-white">Earnings </p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              width="40px"
              size={"md"}
              bgHoverColor="blue.300"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData?.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white dark:text-gray-200  dark:bg-secondary-dark-bg   md:w-56  p-4 pt-9 rounded-2x "
              >
                <button
                  type="button"
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                >
                  {item?.icon}
                </button>
                <p className="mt-33">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>{item?.percentage}</span>
                </p>
                <p className="text-sm text-gray-400 mt-1">{item?.title}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-780 m-3 p-4">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <p>
                <span className="text-3xl  font-semibold ">$68.78</span>
                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                  $8.78%
                </span>
              </p>
              <p className="text-gray-500 mt-1 ">budget</p>
            </div>
            <div className="border-r-1 border-color m-4 pr-10">
              <p>
                <span className="text-3xl  font-semibold ">$78, 785.78</span>
              </p>
              <p className="text-gray-500 mt-1 ">Expense</p>
            </div>
            <div className="mt-5">
            <SparkLine
              currentColor={currentColor}
              id="line-sparkLine"
              type="Line"
              height="80px"
              width="250px"
              data={SparklineAreaData}
              color={currentColor}
            />
            </div>

            <div className="mt-10">
                <Button 
                color="white"
                bgColor={currentColor}
                text="Download Report"
                borderRadius="10px"
                />
            </div>
          <div>
            <Stacked width="320px" height="360px" />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
