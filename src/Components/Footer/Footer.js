import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-[#F7F7F7] px-[80px]'>
      <div className=' w-full max-w-screen-2xl pt-5 '>
        <footer>
          <div className=" w-full max-w-screen-2xl ">
            <div className="grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-3 ">
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
            <div className=" flex sm:justify-center md:mt-0 border-t space-x-5  rtl:space-x-reversepx-4 py-6  md:flex md:items-center md:justify-between">
              <div className='space-x-5 text-sm text-black sm:text-center'>
                <span >© 2023 <a href="https://flowbite.com/">Airbnb, Inc.</a>
                </span>
                <a href='#' >Quyền riêng tư</a>
                <a href='#' >Điều khoản</a>
                <a href='#' >Sơ đồ trang web</a>
              </div>
              <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
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
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer