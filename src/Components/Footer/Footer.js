import React from 'react'
import useResponsive from "../../hook/useResponsive";

const Footer = () => {
  const windowSize = useResponsive();

  return (
    <div className={`bg-[#F7F7F7] ${windowSize.widthWindow <= 1024 ? 'px-[40px]' : 'px-[80px]'}`}>
      <div className=' w-full max-w-screen-2xl pt-4 '>
        <footer>
          <div className=" w-full max-w-screen-2xl ">
            <div className="grid grid-cols-1 gap-8 py-5 lg:py-8 md:grid-cols-3 ">
              <div >
                <h2 className="mb-4 text-sm font-semibold text-gray-900  dark:text-white">Hỗ trợ</h2>
                <ul className="text-black  dark:text-gray-400 text-sm font-normal">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">Trung tâm trợ giúp</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">AirCover</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Chống phân biệt đối xử</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Hỗ trợ người khuyết tật</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Các tùy chọn hủy</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Báo cáo lo ngại của khu dân cư</a>
                  </li>
                </ul>
              </div>
              <div >
                <h2 className="mb-4 text-sm font-semibold text-gray-900  dark:text-white">Đón tiếp khách</h2>
                <ul className="text-black  dark:text-gray-400 text-sm font-normal">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Cho thuê nhà trên Airbnb</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">AirCover cho Chủ nhà</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Tài nguyên về đón tiếp khách</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Diễn đàn cộng đồng</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Đón tiếp khách có trách nhiệm</a>
                  </li>
                </ul>
              </div>
              <div >
                <h2 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">Airbnb</h2>
                <ul className="text-black  dark:text-gray-400 text-sm font-normal">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Trang tin tức</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Tính năng mới</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Cơ hội nghề nghiệp</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Nhà đầu tư</a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Chỗ ở khẩn cấp Airbnb.org</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={` ${windowSize.widthWindow <= 768 ? '' : 'flex items-center justify-between flex-row-reverse'}  mt-0 border-t py-5 `}>
              <div className={`flex mt-4 justify-center space-x-5 ${windowSize.widthWindow <= 768 ? 'mb-4' : ''}`}>
                <div>
                  <span className='space-x-2'>
                    <i class="fa-solid fa-globe"></i>
                    <a href='#'>Tiếng Việt (VN)</a>
                  </span>
                </div>
                <div>
                  <span className='space-x-2'>
                    <i class="fa-solid fa-dollar-sign"></i>
                    <a href='#'>USD</a>
                  </span>
                </div>
                <a href='#'>
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href='#'>
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href='#'>
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className={`text-sm text-black text-center `}>
                <span>© 2023 <a href="https://flowbite.com/">Airbnb, Inc.</a>
                </span>
                <a className='ml-5' href='#' >Quyền riêng tư</a>
                <a className='ml-5' href='#' >Điều khoản</a>
                <a className='ml-5' href='#' >Sơ đồ trang web</a>
              </div>
            </div>
          </div>
        </footer>
      </div >
    </div >
  )
}

export default Footer