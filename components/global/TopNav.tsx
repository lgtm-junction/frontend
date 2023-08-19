import Image from "next/image";

export const TopNav = () => {
  return (
    <div className="h-16 border flex justify-between p-4">
      <Image width={110} height={29} src="Logo.svg" alt="romakase" />
      <div>logout?</div>
    </div>
  );
};
