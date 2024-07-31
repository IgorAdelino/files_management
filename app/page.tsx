'use client'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Home() {
  const [file, setFile] = useState(null)

  const handleFileChange = (event: { target: any }) => {
    const selectedFile = event.target.files[0]

    if (selectedFile.size > 5242880) {
      alert('The file size exceeds 5MB. Please select a file less than 5MB.')
      return
    }
    setFile(selectedFile)
  }

  const handleUpload = () => {
    if (!file) {
      alert('Please select a file first.')
      return
    }

    // Handle the file upload logic here
    alert('File uploaded successfully!')
  }

  return (
    <main className="bg-black h-screen w-full flex flex-col items-center overflow-hidden">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-orange-500 text-white py-2 px-4 rounded"
          >
            Select File
          </label>
          {file && (
            <Button
              variant="default"
              onClick={handleUpload}
              className="ml-4 bg-green-500 text-white py-2 px-4 rounded"
            >
              Upload
            </Button>
          )}
        </div>
      </div>
    </main>
  )
}
