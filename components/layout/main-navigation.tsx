import Link from "next/link";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const MainNavigation = () => {
  return (
    <header className="main-nav ">
      <ul>
        <li>
          <a href="/" className="icon">
            <img
              src="https://fastwork.co/static-v4/images/logo/fastwork-logo-full-white.svg"
              alt="fastwork icon"
            />
          </a>
        </li>
        <li>
          <div className="search-box _bdw-1px _bdrd-max">
            <input type="text" placeholder=" จ้างฟรีแลนซ์ทำ..." />
            <FontAwesomeIcon color="hsl(216, 15%, 66%)" icon={faSearch} />
          </div>
        </li>
      </ul>
      <nav>
        <ul className="nav-content">
          <li>
            <Link href="/">Fastwork ใช้ยังไง?</Link>
          </li>
          <li>
            <Link href="/">ส่วนลด</Link>
          </li>
          <li>
            <Link href="/">เข้าสู่ระบบ</Link>
          </li>
          <li>
            <Link href="/">สมัครเป็นฟรีแลนซ์</Link>
          </li>
          <li>
            <div className="bio-button -white nav-button">
              <p>หาฟรีแลนซ์เพื่อธุรกิจ</p>
            </div>
          </li>
          <li>
            <img
              src="https://storage.googleapis.com/fastwork-asset/locale/th.png"
              alt="ภาษาไทย"
              width="30px"
              height="30px"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
