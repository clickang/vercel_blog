import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Clickang의 블로그</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">
            홈
          </Link>
          <Link href="/posts" className="hover:underline">
            포스트
          </Link>
          <Link href="/about" className="hover:underline">
            About Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
