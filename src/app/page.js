import Image from "next/image";
import Ethereum from "public/image-equilibrium.jpg";
import IconETH from "public/icon-ethereum.svg";
import Clock from "public/icon-clock.svg";
import Avatar from "public/image-avatar.png";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-indigo-950">
      <div className="h-[575px] w-[375px] bg-gray-900 rounded-2xl p-8">
        <div className="flex justify-center items-center">
          <Image
            className="h-64 w-full object-cover rounded-2xl hover:hue-rotate-180 ease-in-out duration-300"
            src={Ethereum}
          ></Image>
        </div>
        <section className="w-full">
          <h1 className="font-semibold text-white text-xl my-8 hover:text-green-600 ease-in-out duration-200 cursor-pointer">
            Equilibrium #3429
          </h1>
          <p className="text-gray-500 text-md">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex justify-between my-4 border-b-2 border-gray-600 pb-4">
            <div className="flex gap-4">
              <Image className="h-[24px] w-[18px]" src={IconETH}></Image>
              <p className="text-green-600 font-bold">0,041 ETH</p>
            </div>
            <div className="flex gap-2">
              <Image className="h-[24px] w-[24px]" src={Clock}></Image>
              <p className="text-gray-500">3 days left</p>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <Image
              className="h-12 w-12 border-white border-2 rounded-full"
              src={Avatar}
            ></Image>
            <p className="text-gray-500 font-semibold">Creation of</p>
            <p className="text-white font-bold hover:text-green-600 ease-in-out duration-200 cursor-pointer">
              Jules Wyvern
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
