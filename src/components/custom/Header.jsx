import React from 'react';
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="p-3 shadow-sm flex justify-between items-center px-5 bg-white">
      <img src="/logo.svg" alt="Logo" className="h-12 md:h-14" />
      <Button className="bg-[#00bd9d] text-white hover:bg-[#00a488]">
  Sign In
</Button>

    </header>
  );
}

export default Header;
