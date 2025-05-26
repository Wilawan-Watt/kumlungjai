import KLJButton from "./KLJ_Button";

function ForgotPassword() {
    return (
        <div>
            <div>
                <h2>ลืมรหัสผ่าน</h2>
                <p>กรอก User ของคุณ เพื่อแจ้งระบบให้รีเซ็ตรหัสผ่านให้ 😊</p>

                <form>
                    <label className='font-bold text-xl'
                        htmlFor='username'>User:
                    </label>
                    <input type="text"
                        placeholder="My user" />
                </form>

                <KLJButton label="ส่งคำขอ"
                    color="color_3" />
            </div>
        </div>
    );
}

export default ForgotPassword