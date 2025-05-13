import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import KLJButton from './KLJ_Button';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(!true);
  const [error, setError] =useState('');

  const navigate = useNavigate() ;

  //สำหรับการใช้ทดสอบระบบ ยังไม่ได้เชื่อมต่อระบบหลังบ้าน
  const handleLogin = () => {
    if(!username || !password) {
      setError('กรอกชื่อผู้ใช้และรหัสผ่านก่อนนะคะ 😊');
      return;
    }

    if (username === 'kumlungjai' && password === '123456') {
      navigate('/dashboard');
    } else {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง 🤨');
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className='text-2xl font-bold text-center'>ยินดีต้อนรับเข้าสู่ระบบแอดมิน <br /> "กำลังใจ | KumlungJai 💚"</h1>

      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div className="my-5">
          <label className='font-bold text-xl'
            htmlFor='username'>User:
          </label>
          <input type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="My user"
            className='border rounded w-full p-1'
            style={{ fontFamily: 'Arial' }} />
        </div>

        <div className="my-5 relative">
          <label className='font-bold text-xl' 
            htmlFor='password'>Password:
          </label>
          <input type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='My password'
            className='border rounded w-full p-1 pr-10'
            style={{ fontFamily: 'Arial' }}  />

          <button type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className='text-xl underline absolute right-3 top-9'
            aria-label={showPassword ? "hide password" : "show password"}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>

          {error && (
            <p className='text-center text-red-500 text-sm mt-2'>{error}</p>
          )}
        </div>

        <div className='flex justify-center'>
          <KLJButton label="LogIn" color="color_1" onClick={handleLogin} />
        </div>

        <div className='my-8 text-sm underline text-center'>
          <Link to="/forgot-password">ลืมรหัสผ่าน กดที่นี่</Link>
        </div>

        <div className='text-center mt-5'>
          <Link to="/">กลับหน้าหลัก</Link>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin