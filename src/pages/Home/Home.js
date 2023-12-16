import React, { useEffect, useState, useRef } from "react";
import { Switch, Carousel } from "antd";
import { arrHome, arrPhoBien, arrVanHoaVaNgheThuat, arrNgoaiTroi, arrNui, arrBien, arrDanhMuc, arrTraiNghiem } from "./dataHome";
import axios from "axios";
import { quanLyPhongServ } from "./../../services/quanLyPhong";
import { Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { nonTimKiem } from './../../redux/slices/sliceHeader'
import useResponsive from "../../hook/useResponsive";


const onChange = (key) => {
  console.log(key);
};

const mapDataFooter = (item, index) => {
  return <>
    <a key={index}>
      <div className='py-3' >
        <h4 className="text-black">{item.ten}</h4>
        <p className='text-black text-opacity-50 line-clamp-1'>{item.moTa}</p>
      </div>
    </a>
  </>
}

const Home = () => {
  const { search } = useSelector((state) => state.sliceHeader);
  const dispatch = useDispatch();
  const [arrPhong, setArrPhong] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const divRef = useRef();
  const windowSize = useResponsive();

  useEffect(() => {
    quanLyPhongServ
      .getPhong()
      .then((res) => {
        // console.log(res);
        setArrPhong(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        dispatch(nonTimKiem());
        setScrolled(true);
        document.getElementById('header-content').style.boxShadow = 'rgb(0 0 0 / 16%) 0 0 calc(2px + 4px)';
      } else {
        setScrolled(false);
        document.getElementById('header-content').style.boxShadow = 'none';
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const handleClickDiv = () => {
    dispatch(nonTimKiem());
  }


  const handleClick = () => {
    setShowMore(!showMore);
  }

  const items = [
    {
      key: '1',
      label: 'Phổ biến',
      children: <>
        <div className='grid grid-cols-5'>
          {arrPhoBien.map((item, index) => {
            return mapDataFooter(item, index);
          })}
        </div>
      </>,
    },
    {
      key: '2',
      label: 'Văn hóa và nghệ thuật',
      children: <div className='grid grid-cols-5'>
        {arrVanHoaVaNgheThuat.map((item, index) => {
          return mapDataFooter(item, index);
        })}
      </div>,
    },
    {
      key: '3',
      label: 'Ngoài trời',
      children: <div className='grid grid-cols-5'>
        {arrNgoaiTroi.map((item, index) => {
          return mapDataFooter(item, index);
        })}
      </div>,
    },
    {
      key: '4',
      label: 'Dãy núi',
      children: <div className='grid grid-cols-5'>
        {arrNui.map((item, index) => {
          return mapDataFooter(item, index);
        })}
      </div>,
    },
    {
      key: '5',
      label: 'Bãi biển',
      children: <div className='grid grid-cols-5'>
        {arrBien.map((item, index) => {
          return mapDataFooter(item, index);
        })}
      </div>,
    },
    {
      key: '6',
      label: 'Danh mục',
      children: <div className='grid grid-cols-5'>
        {arrDanhMuc.map((item, index) => {
          return <a key={index}>
            <div className='py-3' >
              <h4>{item.ten}</h4>
            </div>
          </a>
        })}
      </div>,
    },
    {
      key: '7',
      label: 'Những điều nên trải nghiệm',
      children: <div className='grid grid-cols-5'>
        {arrTraiNghiem.map((item, index) => {
          return mapDataFooter(item, index);
        })}
      </div>,
    },
  ];

  const displayCount = windowSize.widthWindow <= 768
    ? showMore ? arrPhong.length : 4
    : windowSize.widthWindow < 1024
      ? showMore ? arrPhong.length : 6
      : arrHome.length;

  return (
    <div className="relative">
      <div className={`${windowSize.widthWindow <= 1024 ? 'px-[40px]' : 'px-[80px]'} pb-5`}>
        <div id="header-content" style={{ position: 'fixed', top: '78px', right: '0', left: '0', background: 'white', zIndex: '5', boxShadow: 'none' }} className={scrolled ? 'scrolled' : ''}>
          <div className={`mx-auto max-w-screen-2xl mt-3 ${windowSize.widthWindow <= 1024 ? 'px-[40px]' : 'px-[80px]'}`}>
            <div className="flex justify-between items-center ">
              <div className={`${windowSize.widthWindow <= 768 ? 'w-[50%]' : windowSize.widthWindow <= 1024 ? 'w-[65%]' : 'w-3/4'}`}>
                <div className={`h-[78px] ${windowSize.widthWindow <= 768 ? 'grid-cols-4' : windowSize.widthWindow <= 1024 ? 'grid-cols-8' : 'grid-cols-12'} grid truncate`}>
                  {arrHome.slice(0, displayCount).map((item, index) => {
                    return (
                      <div
                        className="my-[11px] py-1 flex flex-col items-center"
                        key={index}
                      >
                        <img
                          src={`/image/${item.hinhAnh}.jpg`}
                          className="inline-block h-6"
                        ></img>
                        <p className="text-xs font-normal mt-1">{item.ten}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <button className="px-4 py-4 border font-medium text-xs rounded-lg">
                  <i className="fa-solid fa-sliders mr-2"></i>
                  Bộ lọc
                </button>
              </div>
              <div className="flex items-center py-4 px-4 gap-2 rounded-lg border ">
                <div className="font-medium text-xs rounded-lg">
                  Hiển thị tổng trước thuế
                </div>
                <Switch defaultChecked={false} onChange={onChange} className="bg-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div className={`my-3 grid gap-5 mt-44 ${windowSize.widthWindow <= 768 ? 'grid-cols-2' : 'grid-cols-4'}`}>
          {arrPhong.slice(0, showMore ? arrPhong.length : 20).map((item, index) => {
            return (
              <div className="pb-1 ">
                <div className="max-w-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#" className="relative">
                    <img
                      className="rounded-lg h-full w-full"
                      src={item.hinhAnh}
                      alt
                    />
                    <button className="absolute top-3 right-4 ">
                      <i className="fa-regular fa-heart text-xl text-gray-100" ></i>
                    </button>
                  </a>
                  <div className="py-2">
                    <a href="#">
                      <h5 className="mb-1 line-clamp-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                        {item.tenPhong}
                      </h5>
                    </a>
                    <p className="line-clamp-2 mb-2"> <span className="font-semibold">Mô tả:</span> {item.moTa}</p>
                    <p className="mb-2 font-normal  ">
                      <span className="font-semibold">Giá tiền:</span> {item.giaTien}$/đêm
                    </p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
        <div className="text-center">
          <button className="btn bg-black px-6 py-3 rounded-lg text-white font-semibold" onClick={handleClick}>{showMore ? 'Ẩn bớt' : 'Hiển thị thêm'}</button>
        </div>
      </div>
      <div className={`bg-[#F7F7F7]  ${windowSize.widthWindow <= 1024 ? 'px-[40px]' : 'px-[80px]'} py-7 mt-5 border-b`}>
        <h2 className='text-2xl py-1 font-semibold'>Nguồn cảm hứng cho những kỳ nghỉ sau này</h2>
        <Tabs
          className='py-1 font-semibold'
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          indicatorSize={(origin) => origin - 16}
        />
      </div>
      <div ref={divRef} onClick={handleClickDiv} className={`absolute top-0 left-0  w-full h-full ${search ? '' : 'hidden'}`} style={{ backgroundColor: 'rgb(0 0 0/25%)' }}></div>
    </div>
  );
};

export default Home;
