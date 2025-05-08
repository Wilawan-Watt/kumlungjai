import { useState } from 'react'
import KLJButton from './KLJ_Button';

function MessageForm() {
    const [message, setMessage] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleSubmit = () => {
        if (!message && !imageFile) {
            alert("กรุณาใส่ข้อความหรือเพิ่มภาพก่อนส่งกำลังใจ");
            return;
        }

        console.log("ข้อความ:", message);
        console.log("ไฟล์ภาพ:", imageFile);
        alert("ส่งกำลังใจเรียบร้อยแล้ว! 🤗 รอแอดมินตรวจสอบ (ยังไม่ได้เชื่อมหลังบ้านนะ!!!)");

        setMessage('');
        setImageFile(null);
    };

    return (
        <div className='mt-10 text-center'>
            <h3 className='font-bold'>ส่งกำลังใจให้คนอื่น <br /> โดยเลือก "พิมพ์ข้อความ" หรือ "เพิ่มภาพให้กำลังใจ" <br /> 
            <span className='text-red-500'>อย่างใดอย่างหนึ่งนะคะ 😊</span>
            </h3>

            <textarea placeholder='พิมพ์ข้อความให้กำลังใจ... เช่น อย่าลืมใจดีกับตัวเองนะ'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='border rounded p-2 mt-5 w-120 h-30'
                disabled = {!!imageFile} />

            <div className='m-3'>
                <label htmlFor='upload-image'
                    className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">+ เพิ่มภาพให้กำลังใจ</label>

                <input id='upload-image'
                    type='file'
                    accept='image/*'
                    onChange={(e) => setImageFile(e.target.files[0])}
                    className='hidden'
                    disabled = {!!message} />
            </div>

            {imageFile && (
                <>
                    <p className="text-sm text-gray-600 mb-2">ไฟล์ที่เลือก: {imageFile.name}</p>
                    <img src={URL.createObjectURL(imageFile)}
                        alt="preview"
                        className='w-32 rounded shadow' />
                </>
            )}

            <KLJButton label="ส่งกำลังใจ"
                onClick={handleSubmit}
                color="color_1" />
        </div>
    );
}

export default MessageForm