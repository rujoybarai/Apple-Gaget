import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* <!-- Logo & Contact --> */}
    <div>
       <div className="lg:w-72 lg:h-16 w-full h-12 text-amber-50 font-bold lg:text-3xl text-2xl text-start mt-3">
        Apple <span className="text-amber-600">Gaget</span>
      </div>

      <div className="mb-4">
        <h3 className="text-white font-semibold mb-2">Phone Number</h3>
        <p>09678148148</p>
      </div>

      <div className="mb-6">
        <h3 className="text-white font-semibold mb-2">Email Address</h3>
        <p>contact@gmail.com</p>
      </div>

   
    </div>

    {/* <!-- Location --> */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-6">LOCATION</h3>

      <ul className="space-y-5 text-sm">
        <li>
          <p className="text-white font-medium">Bashundhara City Shopping Complex</p>
          <p className="text-gray-400">Basement 2, Shop 26</p>
        </li>

        <li>
          <p className="text-white font-medium">Bashundhara City Shopping Complex</p>
          <p className="text-gray-400">Level-5, Block-A, Shop-6, 7, 8</p>
        </li>

        <li>
          <p className="text-white font-medium">Jamuna Future Park</p>
          <p className="text-gray-400">Level 4, Zone A (West Court), Shop 28D</p>
        </li>

        <li>
          <p className="text-white font-medium">AG Care | Bashundhara City</p>
          <p className="text-gray-400">Level-3, Block-B, Shop-07</p>
        </li>

        <li>
          <p className="text-white font-medium">AG Care | Jamuna Future Park</p>
          <p className="text-gray-400">Level 4, Zone A (West Court), Shop 16B1</p>
        </li>
      </ul>
    </div>

    {/* <!-- About Us --> */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-6">ABOUT US</h3>
      <ul className="space-y-3 text-sm">
        <li className="hover:text-white cursor-pointer">About Us</li>
        <li className="hover:text-white cursor-pointer">Corporate</li>
        <li className="hover:text-white cursor-pointer">Order Tracking</li>
        <li className="hover:text-white cursor-pointer">Blog</li>
        <li className="hover:text-white cursor-pointer">Press Coverage</li>
        <li className="hover:text-white cursor-pointer">Careers</li>
        <li className="hover:text-white cursor-pointer">Complain / Advice</li>
        <li className="hover:text-white cursor-pointer">Contact Us</li>
        <li className="hover:text-white cursor-pointer">FAQs</li>
      </ul>
    </div>

    {/* <!-- Policy --> */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-6">POLICY</h3>
      <ul className="space-y-3 text-sm">
        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
        <li className="hover:text-white cursor-pointer">EMI and Payment Policy</li>
        <li className="hover:text-white cursor-pointer">Warranty Policy</li>
        <li className="hover:text-white cursor-pointer">Exchange Policy</li>
        <li className="hover:text-white cursor-pointer">Delivery Policy</li>
        <li className="hover:text-white cursor-pointer">Pre-Order Policy</li>
        <li className="hover:text-white cursor-pointer">Refund Policy</li>
        <li className="hover:text-white cursor-pointer">Return Policy</li>
      </ul>
    </div>
  </div>

  {/* <!-- Bottom Section --> */}
  <div className="border-t border-gray-800 mt-12 pt-6">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-sm text-gray-400">
        © 2026 Thanks From Apple Gadgets | All rights reserved
      </p>

      <div className="flex gap-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600">
          WhatsApp
        </button>

        <div className="flex gap-3 text-white text-lg">
          <span className="cursor-pointer hover:text-gray-400">f</span>
          <span className="cursor-pointer hover:text-gray-400">i</span>
          <span className="cursor-pointer hover:text-gray-400">in</span>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}
