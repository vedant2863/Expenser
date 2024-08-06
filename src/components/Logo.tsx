import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center mr-10">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.png" alt="Logo" height={28} width={28} />
        <p className="font-semibold text-black dark:text-white ml-2 text-xl">Expensr</p>
      </div>
    </Link>
  );
};

export default Logo;
