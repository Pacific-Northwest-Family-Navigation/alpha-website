import Image from "next/image";

export const Logo = ({
  size = 200,
}: {
  size?: number;
}) => {
  return (
    <Image
      src="/logo.png"
      alt="Pacific Northwest Family Navigation Logo"
      width={size}
      height={size}
    />
  );
};
