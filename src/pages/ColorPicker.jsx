import React from 'react';
import { Header } from '../components';

export const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p=10 bg-white rounded-3xl'>
    <Header  category={"App"}  title="Color Picker"/>
    <div className='tex-center '>
      <div id='preview' />
        <div className='flex  justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPicker id="inline-pallete"
              mode="pallete"
              modeSwitcher = {false}
              inline
              showButtons = {false}
            />
          </div>
        </div>

    </div>
    </div>
  )
}
