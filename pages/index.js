import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clickang 블로그</title>
        <meta name="description" content="개발과 일상을 기록하는 블로그" />
      </Head>

      <Header />

      <main>
        <section>
          <h2>최근 포스트</h2>
          <p>포스트 목록은 곧 업데이트될 예정입니다!</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
