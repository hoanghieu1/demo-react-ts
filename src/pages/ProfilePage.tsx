

const ProfilePage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
  <div className="max-w-md w-full">
    <div className="bg-white p-8 border-t-4 border-blue-500 rounded-lg shadow-lg">
      <div className="relative mb-8">
        <div className="h-20 w-20 bg-cover bg-center rounded-full overflow-hidden border-4 border-white">
          <img className="w-full h-full" src="./public/img.jpg" alt="" />
        </div>
        <div className="absolute bottom-0 right-0 h-6 w-6 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      <div className="text-center text-black"> {/* Thay đổi màu chữ thành đen */}
        <h2 className="text-2xl font-semibold mb-2">
          HOÀNG XUÂN HIẾU<br />
          <span className="text-sm">Web Developer</span>
        </h2>
        <div className="text-sm mb-4">
          <div>
            <span className="font-semibold">20</span> Tuổi
          </div>
          <div>
            <span className="font-semibold">Lạng Sơn</span> Quê Quán
          </div>
          <div>
            <span className="font-semibold">Lập Trình Viên</span> Định Hướng
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Follow</button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full">Message</button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default ProfilePage;
