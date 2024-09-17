import {MdLocalMovies} from "react-icons/md";
import React, {useState} from "react";
import {IoMdSearch} from "react-icons/io";
import {FaCaretDown, FaUser} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const Menu = [{
    id: 1, name: "Trang Chủ", link: "/",
}, {
    id: 2, name: "Mua Vé", link: "/Booking",
}, {
    id: 3, name: "Hỗ Trợ", link: "/faq",
},];
const MovieDropdown = [{
    id: 1, name: "Phim Đang Chiếu", link: "/showing",
}, {
    id: 2, name: "Phim Sắp Chiếu", link: "/comming",
},];
const InformationDropdown = [{
    id: 1, name: "Thể Loại Phim", link: "/search-movie",
}, {
    id: 2, name: "Diễn Viên", link: "/actor",
}, {
    id: 3, name: "Đạo diễn", link: "/director",
}, {
    id: 4, name: "Hãng phim", link: "/studio",
},];
let a = null;
const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const [dropdown, setDropdown] = useState(false);


    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search-movie?query=${searchTerm}`);
        }
    };

    return (
        <>
        <div className="shadow-md bg-slate-100 dark:bg-gray-900 dark:text-white relative z-40">
            {/* Upper Navbar */}
            <div className="bg-slate-100 py-3 sm:py-0">
                <div className="container flex justify-between  items-center">
                    <div>
                        <a href="/movie_booking/movie_booking/public" className="font-bold text-xl sm:text-3xl flex items-center ">
                            <MdLocalMovies className=" w-10 h-auto text-red-600 "/>
                            CINEMA
                        </a>
                    </div>
                    {/* Search Bar */}
                    <div>
                        <form className="group relative hidden sm:block" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-700 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                            />
                            <button type="submit">
                                <IoMdSearch
                                    className="text-gray-500 group-hover:text-gray-900 absolute top-1/2 -translate-y-1/2 right-3"/>
                            </button>
                        </form>
                    </div>
                    {/* Button */}
                    {a = !null ? (
                        <div className="min-w-32 flex justify-center items-center gap-1">
                            <div className="flex">
                                <div className="hover:bg-slate-200">
                                    {/* <!-- Dropdown toggle button --> */}
                                    <button
                                        className=" border-blue-300 hover:bg-slate-200 z-10 flex w-[150px] p-2 text-sm text-gray-600 bg-white border-2 border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring  focus:outline-none"
                                        onClick={() => {
                                            setDropdown(!dropdown);
                                        }}
                                    >
                                        <span className="mx-3">Xin Chào!!</span>
                                        <FaUser className="my-1"/>
                                    </button>
                                    <div
                                        onClick={() => {
                                            setDropdown(!dropdown);
                                        }}
                                        className={`${
                                            dropdown ? "" : "hidden"
                                        } absolute right-15 z-20 w-70 py-2 mt-2 overflow-hidden bg-slate-100 rounded-md shadow-xl dark:bg-gray-800`}
                                    >
                                        <div
                                            className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                            <img
                                                className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                                                src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
                                                alt="jane avatar"
                                            />
                                            <div className="mx-1">
                                                {<h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                                    Nguyễn Đức Dũng
                                                </h1>}
                                                {/*<p className="text-sm text-gray-500 dark:text-gray-400">*/}
                                                {/*    {localStorage.getItem("email")}*/}
                                                {/*</p>*/}
                                            </div>
                                        </div>
                                        <hr className="border-gray-200 dark:border-gray-700 "/>
                                        <div
                                            onClick={() => {
                                                navigate("/user/information");
                                            }}
                                            className="cursor-pointer block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-slate-200 "
                                        >
                                            Xem thông tin cá nhân
                                        </div>
                                        <hr className="border-gray-200 dark:border-gray-700 "/>
                                        <div
                                            onClick={() => {
                                                navigate("/user/receipt");
                                            }}
                                            className="cursor-pointer block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-slate-200"
                                        >
                                            Lịch sử đặt vé
                                        </div>

                                        <hr className="border-gray-200 dark:border-gray-700 "/>
                                        <div
                                            onClick={() => {
                                                localStorage.clear();
                                                navigate("/");
                                            }}
                                            className="cursor-pointer block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-slate-200"
                                        >
                                            Đăng xuất
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-between items-center gap-3">
                            <button
                                onClick={() => alert("onclik")}
                                className=" from-primary to-secondary transition-all duration-200 justify-center  text-black py-1 px-4 rounded-full items-center gap-3 group"
                            >
                            <span className=" group-hover:text-blue-400  transition-all duration-300">
                                 Đăng nhập
                            </span>
                            </button>
                            <button
                                onClick={() => alert("onclik")}
                                className=" from-primary to-secondary transition-all duration-200 text-black py-1 px-4 rounded-full items-center gap-3 group"
                            >
                            <span className="group-hover:text-blue-400  transition-all duration-300">
                                Đăng ký
                            </span>
                            </button>
                        </div>
                    )

                    }
                </div>
            </div>
            {/* Lower Navbar */}
            <div className="flex justify-center">
                <ul className="sm:flex hidden items-center gap-5 ">
                    {Menu.map((data) => (<li key={data.id}>
                        <a href={data.link} className="inline-block px-4 hover:text-blue-400 duration-200">
                            {data.name}
                        </a>
                    </li>))}
                    {/* Li movie */}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center gap-[2px] py-2 hover:text-blue-400">
                            Phim
                            <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
              </span>
                        </a>
                        <div
                            className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-slate-200 p-2 text-black">
                            <ul>
                                {MovieDropdown.map((data) => (<li key={data.id}>
                                    <a href={data.link}
                                       className="inline-block w-full rounded-md p-2 hover:text-blue-400">
                                        {data.name}
                                    </a>
                                </li>))}
                            </ul>
                        </div>
                    </li>
                    {/* Li information movie */}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center gap-[2px] py-2 hover:text-blue-400">
                            Góc Điện Ảnh
                            <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
              </span>
                        </a>
                        <div
                            className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-slate-200 p-2 text-black shadow-md">
                            <ul>
                                {InformationDropdown.map((data) => (<li key={data.id}>
                                    <a href={data.link}
                                       className="inline-block w-full rounded-md p-2 hover:text-blue-400">
                                        {data.name}
                                    </a>
                                </li>))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </>);
};

export default Navbar;
