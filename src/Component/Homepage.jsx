import KLJButton from './KLJ_Button'
import Welcome from '../assets/KumlungJai.png'


function Homepage() {
    const handleEncouragement = () => {
        console.log("รับข้อความกำลังใจ")
    };

    const handleThank = () => {
        console.log("ขอบคุณตัวเอง")
    };

    const handleWish = () => {
        console.log("คำอวยพร")
    };

    const handleGive = () => {
        console.log("ให้กำลังใจผู้อื่น")
    };
    

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <img src={Welcome} alt='Welcome' className='w-xs mb-2' />

            <h1 className='font-bold text-2xl'>ยินดีต้อนรับสู่ "กำลังใจ" วันนี้คุณอยากได้ข้อความแบบไหนดี...</h1>


            <div className="flex gap-4 items-center mt-5">
                <KLJButton label="รับข้อความกำลังใจ" onClick={handleEncouragement} color="color_1" />
                <KLJButton label="ขอบคุณตัวเอง" onClick={handleThank} color="color_2" />
                <KLJButton label="คำอวยพร" onClick={handleWish} color="color_3" />
            </div>

            <h2 className='mt-12 mb-5 font-bold text-xl'>ฉันอยากส่งกำลังใจให้กับคนอื่นบ้าง</h2>
            <KLJButton label="ให้กำลังใจผู้อื่น" onClick={handleGive} color="color_4" />
        </div>
    );
}

export default Homepage