import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Menu from "@/components/Menu"

export default function Home() {
  return (
<<<<<<< Updated upstream
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>สวัสดีค่ะ dev2</p>
    </main>
=======
    <div>
      <Menu/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24" style={{ fontFamily: 'Prompt' }}>
        <div className="">
            <p>
              หน้าหลักจ้า
            </p>
        </div>
      </div>
    </div>
>>>>>>> Stashed changes
  )
}
