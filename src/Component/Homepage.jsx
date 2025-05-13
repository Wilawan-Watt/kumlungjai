import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import KLJButton from './KLJ_Button'
import MessageForm from './MessageForm'

import WelcomeImg from '../assets/Kumlungjai.png'
import EncourageImg from '../assets/FB_123456.jpg';
import WishImg from '../assets/FB_IMG_1706276058044.jpg';
import ThankImg from '../assets/FB_IMG_1701615040226.jpg';


function Homepage() {
    const [clickCount, setClickCount] = useState(0);
    const [selectedType, setSelectedType] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (clickCount === 4) {
            navigate('/admin-login');
            setClickCount(0);
        }

        const timeout = setTimeout(() => setClickCount(0), 2000);
        return () => clearTimeout(timeout);
    }, [clickCount, navigate]);

    const handleSecretClick = () => {
        setClickCount(prev => prev + 1);
    };


    const handleSelect = (type) => {
        setSelectedType(type);
    };

    const handleGive = () => setSelectedType('give');

    const imageMap = {
        encouragement: EncourageImg,
        thank: ThankImg,
        wish: WishImg,
        default: WelcomeImg,
    }

    const getImageByType = () => imageMap[selectedType] || imageMap.default;

    return (
        <div className='flex flex-col items-center justify-center my-15'>
            <img src={getImageByType()}
                alt='Welcome'
                className='w-md mx-auto rounded mb-10'
                onClick={handleSecretClick} />

            <h1 className='font-bold text-2xl'>ยินดีต้อนรับสู่ "กำลังใจ" วันนี้คุณอยากได้ข้อความแบบไหนดี...</h1>


            <div className="flex gap-4 items-center mt-5">
                <KLJButton label="รับกำลังใจ"
                    onClick={() => handleSelect('encouragement')}
                    color="color_1" />
                <KLJButton label="ขอบคุณตัวเอง"
                    onClick={() => handleSelect('thank')}
                    color="color_2" />
                <KLJButton label="คำอวยพร"
                    onClick={() => handleSelect('wish')}
                    color="color_3" />
            </div>

            <h2 className='mt-12 mb-5 font-bold text-xl'>ฉันอยากส่งกำลังใจให้กับคนอื่นบ้าง</h2>
            <KLJButton label="ให้กำลังใจผู้อื่น"
                onClick={handleGive}
                color="color_4" />

            <div>
                {selectedType === 'give' && <MessageForm />}
            </div>
        </div>
    );
}

export default Homepage