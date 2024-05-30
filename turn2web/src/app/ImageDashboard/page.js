import React from 'react'
import ImageCard from '../components/Card'
import BrandImage from "@/app/favicon.ico";

export default function ImageDashboard() {
  return (
    <>
    <ImageCard actionButtons={[{"text": "View", "onClick": ""}, {"text": "Edit", "onClick": ""}]} description={"hello world description text is this one only"} title={"Image Card"} src={BrandImage} />
    </>
  )
}
