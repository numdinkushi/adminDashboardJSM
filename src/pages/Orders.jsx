import React from 'react'
import {GridComponent, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, ColumnDirective} from "@syncfusion/ej2-react-grids";
import {ordersData,  ordersGrid} from "../data/dummy";
import { Header } from '../components';
import { ColumnsDirective } from '@syncfusion/ej2-react-charts';

export const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="orders"/>
      <GridComponent 
      id='gridcomp'
      dataSource={ordersData}
      allowPaging
      allowSorting
      >
        <ColumnsDirective >
        {ordersGrid?.map((item, index)=>{
          return (
            <ColumnDirective key={index} {...item}/>
          )
        })}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}/>
      </GridComponent>
      </div>
  )
}

