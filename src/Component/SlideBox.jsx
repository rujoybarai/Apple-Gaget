import React from 'react'
import Card from './Card'

export default function SlideBox({scroll}) {
  return (
    <div className=" container mx-auto  w-[90%]  lg:w-full flex justify-baseline items-start  gap-2 lg:gap-5 py-5 " id="slider" ref={scroll}>

        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>


       </div>

  )
}
