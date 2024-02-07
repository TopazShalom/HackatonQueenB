import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <Link className="link" href="/map">
          <Image src="/map.png" alt="home" width={25} height={25} />
          <h6>Map</h6>
        </Link>

        <Link className="link" href="">
          <Image src="/user.png" alt="home" width={25} height={25} />
          <h6>Profile</h6>
        </Link>

        <Link className="link" href="">
          <Image
            src="/leaderboard-trophy.png"
            alt="home"
            width={25}
            height={25}
          />
          <h6>League</h6>
        </Link>
      </nav>
    </div>
  );
};
export default Navbar;
