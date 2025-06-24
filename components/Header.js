import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1>Clickang의 개발 블로그</h1>
      <nav>
        <Link href="/">홈</Link> | <Link href="/posts">포스트</Link> | <Link href="/about">About Me</Link>
      </nav>
    </header>
  );
}
