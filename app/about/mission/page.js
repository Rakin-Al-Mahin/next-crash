import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import thumb from "@/public/images/thumb.png";

export default function Mission() {
  return (
    <main className="mt-10">
      <div>
        Mission page, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eius corporis omnis repudiandae. Laudantium doloremque quo provident
        voluptatibus quibusdam aliquid voluptas minus velit cum itaque. Harum,
        odio? Ducimus saepe porro iusto.
      </div>

      <div className="w-[400px]">
        <Image placeholder="blur" src={thumb} alt="Thumb image" />
      </div>

      <Button />
    </main>
  );
}
