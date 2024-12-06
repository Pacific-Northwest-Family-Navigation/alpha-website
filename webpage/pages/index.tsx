import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Image src="/logo.png" alt="Pacific Northwest Family Navigation Logo" width={200} height={200} />
      <h1 className="mt-8 text-4xl font-bold text-center">
        Pacific Northwest Family Navigation
      </h1>
      <p className="mt-4 text-lg text-center">
        Supporting Families, Enriching Lives, Building Communities
      </p>
      <h1 className="mt-8 text-4xl font-bold text-center">Coming Soon</h1>
    </div>
  );
}
