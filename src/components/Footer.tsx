import Link from "next/link"

export default function Footer() {
  return (
    <>

    <div className="bg-orange-50 rounded-2xl w-full" style={{ fontFamily: 'Prompt' }}>
        <div className="flex justify-center py-16 px-20 space-x-16">
            <div className="w-80">
                <div className="pb-3.5">
                    <img src="/CreatederLogo.png" alt="Test" />
                </div>
                
                <div className="space-y-4">
                    <p className=" text-base text-neutral-600">บริษัท ครีเอทเดอร์ จำกัด</p>
                    <p className=" text-base text-neutral-600">พวกเราเชี่ยวชาญในอุตสาหกรรม
อสังหาริมทรัพย์</p>
                    <div className="flex space-x-3">
                        <div className="Fb">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#FB923C"/>
                                <path d="M19.439 14.6H18.1992H17.7564V14.1484V12.7484V12.2968H18.1992H19.1291C19.3726 12.2968 19.5719 12.1161 19.5719 11.8452V9.45161C19.5719 9.20323 19.3947 9 19.1291 9H17.5128C15.7638 9 14.5461 10.2645 14.5461 12.1387V14.1032V14.5548H14.1033H12.5978C12.2878 14.5548 12 14.8032 12 15.1645V16.7903C12 17.1065 12.2435 17.4 12.5978 17.4H14.059H14.5018V17.8516V22.3903C14.5018 22.7065 14.7454 23 15.0996 23H17.1807C17.3136 23 17.4243 22.9323 17.5128 22.8419C17.6014 22.7516 17.6678 22.5935 17.6678 22.4581V17.8742V17.4226H18.1328H19.1291C19.4169 17.4226 19.6383 17.2419 19.6826 16.971V16.9484V16.9258L19.9925 15.3677C20.0147 15.2097 19.9925 15.029 19.8597 14.8484C19.8154 14.7355 19.6161 14.6226 19.439 14.6Z" fill="white"/>
                            </svg>
                        </div>
                        
                        <div className="twitter">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 17C1 8.16344 8.16344 1 17 1C25.8366 1 33 8.16344 33 17C33 25.8366 25.8366 33 17 33C8.16344 33 1 25.8366 1 17Z" fill="white" stroke="#E5E5E5" stroke-width="0.5"/>
                                <path d="M22.4419 13.7221L23.3 12.7828C23.5484 12.5284 23.6161 12.3327 23.6387 12.2348C22.9613 12.5871 22.329 12.7045 21.9226 12.7045H21.7645L21.6742 12.6262C21.1323 12.2153 20.4548 12 19.7323 12C18.1516 12 16.9097 13.135 16.9097 14.4462C16.9097 14.5245 16.9097 14.6419 16.9323 14.7202L17 15.1115L16.5258 15.092C13.6355 15.0137 11.2645 12.8611 10.8806 12.4892C10.2484 13.4677 10.6097 14.407 10.9935 14.9941L11.7613 16.09L10.5419 15.5029C10.5645 16.3249 10.9258 16.9706 11.6258 17.4403L12.2355 17.8317L11.6258 18.047C12.0097 19.045 12.8677 19.456 13.5 19.6125L14.3355 19.8082L13.5452 20.2779C12.2806 21.0607 10.7 21.002 10 20.9432C11.4226 21.8043 13.1161 22 14.2903 22C15.171 22 15.8258 21.9217 15.9839 21.863C22.3065 20.5714 22.6 15.6791 22.6 14.7006V14.5636L22.7355 14.4853C23.5032 13.8591 23.8194 13.5264 24 13.3307C23.9323 13.3503 23.8419 13.3894 23.7516 13.409L22.4419 13.7221Z" fill="#525252"/>
                            </svg>
                        </div>

                        <div className="youtube">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.8862 32.7723C25.6598 32.7723 32.7723 25.6598 32.7723 16.8862C32.7723 8.11248 25.6598 1 16.8862 1C8.11248 1 1 8.11248 1 16.8862C1 25.6598 8.11248 32.7723 16.8862 32.7723Z" fill="white" stroke="#E5E5E5" stroke-width="0.5"/>
                                <path d="M23.7065 13.5668C23.5484 12.9447 23.0742 12.4608 22.4645 12.2995C21.3806 12 17 12 17 12C17 12 12.6194 12 11.5355 12.2995C10.9258 12.4608 10.4516 12.9447 10.2935 13.5668C10 14.6959 10 17 10 17C10 17 10 19.3272 10.2935 20.4332C10.4516 21.0553 10.9258 21.5392 11.5355 21.7005C12.6194 22 17 22 17 22C17 22 21.3806 22 22.4645 21.7005C23.0742 21.5392 23.5484 21.0553 23.7065 20.4332C24 19.3272 24 17 24 17C24 17 24 14.6959 23.7065 13.5668ZM15.6 19.1429V14.8571L19.2355 17L15.6 19.1429Z" fill="#525252"/>
                            </svg>
                        </div>
                        <div className="In">
                            <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6584 32.7723C25.4321 32.7723 32.5445 25.6598 32.5445 16.8862C32.5445 8.11248 25.4321 1 16.6584 1C7.88469 1 0.772217 8.11248 0.772217 16.8862C0.772217 25.6598 7.88469 32.7723 16.6584 32.7723Z" fill="white" stroke="#E5E5E5" stroke-width="0.5"/>
                                <path d="M21.9334 11H11.6472C11.1611 11 10.7722 11.3871 10.7722 11.871V22.129C10.7722 22.5935 11.1611 23 11.6472 23H21.8945C22.3806 23 22.7695 22.6129 22.7695 22.129V11.8516C22.8084 11.3871 22.4195 11 21.9334 11ZM14.3306 21.2H12.5611V15.4903H14.3306V21.2ZM13.4361 14.6968C12.8528 14.6968 12.4056 14.2323 12.4056 13.671C12.4056 13.1097 12.8722 12.6452 13.4361 12.6452C14 12.6452 14.4667 13.1097 14.4667 13.671C14.4667 14.2323 14.0389 14.6968 13.4361 14.6968ZM21.039 21.2H19.2695V18.4323C19.2695 17.7742 19.2501 16.9032 18.3362 16.9032C17.4028 16.9032 17.2667 17.6387 17.2667 18.3742V21.2H15.4973V15.4903H17.2278V16.2839H17.2473C17.5 15.8194 18.0639 15.3548 18.9389 15.3548C20.7473 15.3548 21.0779 16.5161 21.0779 18.1032V21.2H21.039Z" fill="#525252"/>
                            </svg>
                        </div>

                       


                    </div>
                </div>
            </div>
            <div className="w-80">
                <div className="pb-7">
                    <h1 className="text-xl text-neutral-800 font-semibold">ทางลัด</h1>
                </div>
                <div className="flex flex-col space-y-3 text-neutral-600">
                    <Link className="hover:text-orange-400" href={""}>หน้าหลัก</Link>
                    <Link className="hover:text-orange-400" href={""}>บริการของเรา</Link>
                    <Link className="hover:text-orange-400" href={""}>ติดต่อเรา</Link>
                    <Link className="hover:text-orange-400" href={""}>บทความ</Link>
                    <Link className="hover:text-orange-400" href={""}>นโยบายความเป็นส่วนตัว</Link>
                </div>
            </div>
            <div className="w-80 ">
                <div className="pb-[26px]">
                    <h1 className="text-xl text-neutral-800 font-semibold">รับข้อมูล และข้อเสนอ</h1>
                </div>
                <div className="space-y-[26px]">
                    <p className=" text-base text-neutral-600">กรอกอีเมลของคุณ เพื่อรับข้อมูลดีๆ จากเรา</p>
                    
                    
                    <div className="flex flex-row divide-x bg-white w-[290px] h-[54px] border rounded-[7px]">
                        <input className="w-[227px] pl-5 border-neutral-200 block focus:outline-none rounded-[7px]" placeholder="Enter your email" style={{ fontFamily: 'Prompt' }} />
                        <div className="flex items-center px-5 divide-x ">
                            <svg width="23" height="16" viewBox="0 0 23 16" className=" " fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.4614 0H2.12681C0.9534 0 0 0.983452 0 2.19385V13.8061C0 15.0165 0.9534 16 2.12681 16H20.4614C21.6348 16 22.5882 15.0165 22.5882 13.8061V2.19385C22.5882 0.983452 21.6348 
                                0 20.4614 0ZM20.4614 1.32388C20.6448 1.32388 20.7914 1.3617 20.9381 1.47518L11.8075 7.18676C11.4775 7.37589 11.1108 7.37589 10.7807 7.18676L1.65011 1.47518C1.79679 1.39953 1.94347 
                                1.32388 2.12681 1.32388H20.4614ZM20.4614 14.6383H2.12681C1.68678 14.6383 1.28342 14.26 1.28342 13.7683V2.79905L10.084 8.32151C10.4507 8.54846 10.8541 8.66194 11.2574 8.66194C11.6608
                                 8.66194 12.0642 8.54846 12.4309 8.32151L21.2315 2.79905V13.7683C21.3048 14.26 20.9015 14.6383 20.4614 14.6383Z" fill="#FDBA74"/>
                            </svg>
                        </div>
                            
                       
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div className="text-center text-base pt-8 pb-12 text-neutral-400" style={{ fontFamily: 'Prompt' }}>
        <p>© 2023 บริษัท ครีเอทเดอร์ จำกัด. สงวนสิทธิ์ทุกประการ</p>
    </div>
    
    </>
  )
}