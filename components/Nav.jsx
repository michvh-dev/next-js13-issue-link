"use client";

import Link from "next/link";
import * as React from "react";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/staff-picks">Staff picks</Link>
        </li>
        <li>
          <Link href="/test">Test</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
