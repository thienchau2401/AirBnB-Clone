import React, { useEffect, useState } from 'react'
import { Radio, Tabs, Input } from 'antd';
import { arrdataHeader } from './dataHeader'
import { Cascader, InputNumber, Select, Space } from 'antd';

const onChange = (key) => {
  // console.log(key);
};



const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState(false);

  const timKiem = () => {
    setSearch(true);
  }

  const items = [
    {
      key: '1',
      label: 'Chỗ ở',
      children: <>
        <div className='absolute z-10 -left-44  bg-gray-200 rounded-full shadow hover:shadow-md'>
          <span className='inline-flex items-center'>
            <button className='py-3 px-9 text-left w-[350px] focus:bg-white focus:rounded-full focus:shadow-lg'>
              <span className='text-xs font-bold block'>Địa điểm</span>
              <input placeholder="Tìm kiếm điểm đến" className='border-0 p-0 text-sm bg-inherit'></input>
            </button>
            <div className={`absolute top-[100%] p-5 w-[500px] bg-white rounded-3xl mt-4 ${search ? '' : 'hidden'}`}>
              <h5 className='text-black text-left mb-5 font-medium text-sm'>Tìm kiếm theo khu vực</h5>
              <div className='grid grid-cols-3 gap-4'>
                {arrdataHeader.map((item, index) => {
                  return (
                    <div>
                      <img src={`/image/${item.tenHinhAnh}.jpg`} className='w-100'></img>
                      <p className='text-center mt-4'>{item.ten}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <span className='h-6 w-[1px] bg-[#DDDDDD]'></span>
            <button className='py-3 px-4 w-36 hover:bg-gray-300 focus:shadow-lg hover:rounded-full focus:bg-white focus:rounded-full'>
              <span className='text-xs font-bold block'>Nhận phòng</span>
              <span className='text-sm font-normal'>Thêm ngày</span>
            </button>
            <span className='h-6 w-[1px] bg-[#DDDDDD]'></span>
            <button className='py-3 px-4 w-36 hover:bg-gray-300 focus:shadow-lg hover:rounded-full focus:bg-white focus:rounded-full'>
              <span className='text-xs font-bold block'>Trả phòng</span>
              <span className='text-sm font-normal'>Thêm ngày</span>
            </button>
            <span className='h-6 w-[1px] bg-[#DDDDDD]'></span>
            <button className='inline-flex px-3 py-3 w-[210px] text-center focus:shadow-xl hover:rounded-full hover:bg-gray-300 focus:bg-white focus:rounded-full '>
              <div className='pt-[3px] ml-1'>
                <span className='text-xs font-bold block text-left'>Khách</span>
                <span className='text-sm'>Thêm khách</span>
              </div>
              <div className='ml-3'>
                <button className='items-center bg-red-400 rounded-full w-[95px] py-2 px-2'>
                  <i className="mr-2 fa-solid fa-magnifying-glass text-sm text-white inline-block leading-6" />
                  Tìm kiếm
                </button>
              </div>
            </button>
            <div className='absolute top-[100%] pt-1 px-5 w-[350px] bg-white rounded-3xl mt-4 right-0 hidden'>
              <div className='p-4'>
                <div className='flex justify-between items-center border-b py-4'>
                  <div className='text-left'>
                    <h5 className='block text-base font-semibold'>Người lớn</h5>
                    <p className='block text-sm'>Từ 13 tuổi trở lên</p>
                  </div>
                  <InputNumber addonBefore="+" addonAfter="-" defaultValue={0} className='w-[100px] text-center' />
                </div>
                <div className='flex justify-between items-center border-b py-4'>
                  <div className='text-left'>
                    <h5 className='block text-base font-semibold'>Trẻ em</h5>
                    <p className='block text-sm'>Độ tuổi 2-12</p>
                  </div>
                  <InputNumber addonBefore="+" addonAfter="-" defaultValue={0} className='w-[100px] text-center' />
                </div>
                <div className='flex justify-between items-center border-b py-4'>
                  <div className='text-left'>
                    <h5 className='block text-base font-semibold'>Em bé</h5>
                    <p className='block text-sm'>Dưới 2 tuổi</p>
                  </div>
                  <InputNumber addonBefore="+" addonAfter="-" defaultValue={0} className='w-[100px] text-center' />
                </div>
                <div className='py-4'>
                  <div className='text-left'>
                    <h5 className='block text-base font-semibold'>Thú cưng</h5>
                    <a href='#' className='block text-sm underline decoration-1 hover:text-black hover:underline'>Bạn sẽ mang theo động vật phục vụ?</a>
                  </div>
                  <div className='text-left mt-3'>
                    <InputNumber addonBefore="+" addonAfter="-" defaultValue={0} className='w-[100px] ' />
                  </div>

                </div>
              </div>

            </div>
          </span>
        </div>
      </>,
    },
    {
      key: '2',
      label: 'Trải nghiệm',
      children: <>
        <div className=' absolute z-10 -left-44  bg-gray-200 rounded-full shadow hover:shadow-md'>
          <span className='inline-flex items-center'>
            <button className='py-3 px-9 text-left w-[350px] focus:bg-white focus:rounded-full'>
              <span className='text-xs font-bold block'>Địa điểm</span>
              <input placeholder="Tìm kiếm điểm đến" className='border-0 p-0 text-sm bg-inherit'></input>
            </button>
            <div className='absolute top-[100%] p-5 w-[500px] bg-white rounded-3xl mt-4 hidden'>
              <h5 className='text-black text-left mb-5 font-medium text-sm'>Tìm kiếm theo khu vực</h5>
              <div className='grid grid-cols-3 gap-4'>
                {arrdataHeader.map((item, index) => {
                  return (
                    <div>
                      <img src={`/image/${item.tenHinhAnh}.jpg`} className='w-100'></img>
                      <p className='text-center mt-4'>{item.ten}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <span className='h-6 w-[1px] bg-[#DDDDDD]'></span>
            <button className='py-3 px-4 text-left w-[261px] hover:bg-gray-300 hover:rounded-full focus:bg-white focus:rounded-full'>
              <span className='text-xs font-bold block'>Trả phòng</span>
              <span className='text-sm font-normal'>Thêm ngày</span>
            </button>
            <span className='h-6 w-[1px] bg-[#DDDDDD]'></span>
            <button className='inline-flex px-3 py-3 w-[240px] text-center justify-between hover:rounded-full hover:bg-gray-300 focus:bg-white focus:rounded-full '>
              <div className='pt-[3px] ml-1'>
                <span className='text-xs font-bold block text-left'>Khách</span>
                <span className='text-sm'>Thêm khách</span>
              </div>
              <div className='ml-3'>
                <button className='items-center bg-red-400 rounded-full w-[95px] py-2 px-2'>
                  <i className="mr-2 fa-solid fa-magnifying-glass text-sm text-white inline-block leading-6" />
                  Tìm kiếm
                </button>
              </div>
            </button>
            <div className='absolute top-[100%] pt-1 px-5 w-[350px] bg-white rounded-3xl mt-4 right-0 hidden'>
              <div className='px-4 py-2 '>
                <div className='flex justify-between items-center border-b py-4'>
                  <div className='text-left'>
                    <h5 className='block text-base font-semibold'>Người lớn</h5>
                    <p className='block text-sm'>Từ 13 tuổi trở lên</p>
                  </div>
                  <InputNumber addonBefore="+" addonAfter="-" defaultValue={0} className='w-[100px] text-center' />
                </div>
                <div className='flex justify-between items-center border-b py-4'>
                  <div className='text-left'>
                    <h5 className='block text-base font-semibold'>Trẻ em</h5>
                    <p className='block text-sm'>Độ tuổi 2-12</p>
                  </div>
                  <InputNumber addonBefore="+" addonAfter="-" defaultValue={0} className='w-[100px] text-center' />
                </div>
                <div className='flex justify-between items-center py-4'>
                  <div className='text-left'>
                    <h5 className='block text-base font-semibold'>Em bé</h5>
                    <p className='block text-sm'>Dưới 2 tuổi</p>
                  </div>
                  <InputNumber addonBefore="+" addonAfter="-" defaultValue={0} className='w-[100px] text-center' />
                </div>
              </div>
            </div>
          </span>
        </div>
      </>,
    },
    {
      key: '3',
      label: <>
        <a href='http://localhost:3000/'>Trải nghiệm trực tuyến</a>
      </>,
      children: '',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  return (
    <div style={{ position: 'fixed', top: '0', right: '0', left: '0', background: 'white', zIndex: '7', textAlign: 'center' }} className={scrolled ? 'scrolled' : ''}>
      <header className='px-[80px]' >
        <nav className="bg-white dark:bg-gray-800 relative ">
          <div className="flex flex-wrap justify-center items-center py-3 max-w-screen-2xl mx-auto border-gray-200 ">
            <a href="http://localhost:3000/" className="flex items-center w-1/3 ">
              <i className="fa-brands fa-airbnb text-4xl text-[#FF385C] mr-2 font-medium pt-1"></i>
              <span className="self-center text-2xl font-bold whitespace-nowrap text-[#FF385C]">airbnb</span>
            </a>
            <div className="flex items-center lg:order-2 text-right justify-end w-1/3 ">
              <button className="mr-1 text-black font-semibold text-sm hover:bg-gray-100 p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200">Cho thuê chỗ ở qua Airbnb</button>
              <a className="hover:bg-gray-100 px-2 py-1 rounded-full focus:outline-none" href="#"><i className="fa-solid fa-globe" /></a>
              <button className="ml-3 border px-4 py-1 rounded-full items-center flex hover:shadow-md">
                <i className="fa-solid fa-bars mr-3" ></i>
                <i className="fa-solid fa-circle-user text-2xl" ></i>
              </button>
              <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="hidden justify-between items-center w-1/3 text-right lg:flex lg:w-1/3 lg:order-1" id="mobile-menu-2">
              <div className={`${search ? 'hidden' : ''} border rounded-full shadow hover:shadow-md`}>
                <span className='inline-flex items-center'>
                  <button onClick={timKiem} className='py-3 px-4 text-sm font-medium'>
                    Địa điểm bất ngờ
                  </button>
                  <span className='h-6 w-[1px] bg-[#DDDDDD]'></span>
                  <button onClick={timKiem} className='py-3 px-4 text-sm font-medium'>
                    Tuần bất kỳ
                  </button>
                  <span className='h-6 w-[1px] bg-[#DDDDDD]'></span>
                  <button className='inline-flex '>
                    <span className='pt-4 pb-3 pl-4 pr-2 text-sm '>Thêm khách</span>
                    <div className='pr-4 py-3'>
                      <span className='items-center'>
                        <i className="ml-3 fa-solid fa-magnifying-glass text-xs text-white h-7 w-7 rounded-full bg-red-400 inline-block leading-7" />
                      </span>
                    </div>
                  </button>
                </span>
              </div>
              <div className={`${search ? '' : 'hidden'}`}>
                <Tabs defaultActiveKey="1" centered items={items} size='large' onChange={onChange} />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className='px-0 w-[full] bg-gray-200 h-[1px]'></div>
    </div >
  )
}

export default Header