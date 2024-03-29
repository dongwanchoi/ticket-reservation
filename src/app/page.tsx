import Head from "next/head";
import Layout from "./components/layout";

import Image from 'next/image';
import MaryShelley from '../../public/images/MaryShelley.svg';
import SisterAct from '../../public/images/SisterAct.svg';
import Agatha from '../../public/images/Agatha.svg';

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <Layout>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-indigo-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">오늘의 추천 공연</h1>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                <Image alt="content" className="object-cover object-center h-full w-full" src={MaryShelley} />
                
                  
                  
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">메리셸리</h2>
                <p className="text-base leading-relaxed mt-2">가난한 집안 환경 속에서도 문학에 천부적인 재능을 가진 메리는 지식에 대한 끊임없는 갈증을 가지고 있다. 그녀는 자신의 지적 갈증을 채워주던 아버지의 제자, 낭만파 시인 퍼시 셸리와 사랑에 빠지고 주변의 만류에도 불구하고 사랑의 도피를 떠난다.</p>
                <a className="text-indigo-500 inline-flex items-center mt-3">예매하러 가기
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  {/* <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504" /> */}
                  <Image alt="content" className="object-cover object-center h-full w-full" src={SisterAct} />
                
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">시스터 액트</h2>
                <p className="text-base leading-relaxed mt-2">재미와 웃음, 신나는 음악까지 '시스터 액트'가 코미디를 책임진다. 우피 골드버그가 갱단을 피해 수녀원에 숨어든 별 볼 일 없는 라운지 가수 들로리스로 연기했다. 수녀로 위장해 말썽만 부리던 그녀가 성가대의 지휘봉을 잡으면서 침체된 수녀원 분위기가 활기차게 살아난다. 하지 만 성가대가 매스컴의 주목을 받으면서 그녀가 수녀원에 은신해 있다는 사실이 갱단에게 알려지는데... 하비 케이틀과 캐시 나지미 등 스타 배우까지 출연, 신나는 60년대 흑인 음악까지 합세하여 탄생한 중독성 있는 코미디 영화.</p>
                <a className="text-indigo-500 inline-flex items-center mt-3">예매하러 가기
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  {/* <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505" /> */}
                  <Image alt="content" className="object-cover object-center h-full w-full" src={Agatha} />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">아가사</h2>
                <p className="text-base leading-relaxed mt-2">아가사 크리스티. 당대 최고의 여류 추리소설 작가이나, 애크로이드 살인사건 발간 후 혹평에 시달리던 어느 날 의문의 실종 사건을 겪고 11일 후 그간의 기억을 잃은 채 다시 세상에 나타난다. 실종 사건 27년 후에는 '추리소설의 여왕'이라 불리는 대작가가 되어 60번째 장편소설 출간을 기념하는 파티를 열고, 그 파티장에 레이몬드가 'R'이라는 가명으로 보낸 편지 한 통이 날아오는데…</p>
                <a className="text-indigo-500 inline-flex items-center mt-3">예매하러 가기
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>

    </>
  );
}
