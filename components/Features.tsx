import React from 'react';
import { FileText, RefreshCw, Search, Clock, Zap } from 'lucide-react';
import { ServiceFeature } from '../types';

const features: ServiceFeature[] = [
  {
    title: "차량 정보만 넣으면 판매형 글 완성",
    description: "매물 스펙만 입력하면 고객이 읽기 쉽게 정리된 블로그 원고가 바로 완성됩니다.",
    icon: FileText
  },
  {
    title: "네이버 흐름에 맞춘 문장 구성",
    description: "검색 노출에 맞는 제목과 본문 흐름을 반영해 직접 글감을 짜지 않아도 됩니다.",
    icon: RefreshCw
  },
  {
    title: "황금 키워드 매일 제안",
    description: "경쟁은 적고 검색량은 많은 '화물차 키워드'를 매일 확인할 수 있습니다.",
    icon: Search
  },
  {
    title: "예약 발행으로 꾸준한 노출 유지",
    description: "현장에 있어도 포스팅이 끊기지 않도록 미리 저장하고 원하는 시간에 자동 발행할 수 있습니다.",
    icon: Clock
  },
  {
    title: "문의를 부르는 세일즈 카피",
    description: "차량 강점, 구매 포인트, 문의 유도 문구까지 함께 만들어 전환에 집중할 수 있습니다.",
    icon: Zap
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              매물은 올리는데<br />
              왜 문의는 늘지 않을까요?
            </h2>

            <p className="text-lg font-semibold text-slate-800 mb-4">중고트럭 딜러들이 자주 겪는 문제</p>
            <ul className="space-y-3 text-slate-700 mb-8">
              <li className="flex items-start">
                <span className="text-brand-600 font-bold mr-2">•</span>
                <span>매물 설명을 매번 직접 쓰기 버겁습니다</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-600 font-bold mr-2">•</span>
                <span>제목과 키워드를 어떻게 잡아야 할지 막막합니다</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-600 font-bold mr-2">•</span>
                <span>포스팅이 밀리면 노출과 문의도 같이 끊깁니다</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-600 font-bold mr-2">•</span>
                <span>매입, 상담, 현장 응대로 블로그까지 챙길 시간이 없습니다</span>
              </li>
            </ul>

            <p className="text-base text-slate-600 mb-2">결국</p>
            <p className="text-xl md:text-2xl font-bold text-slate-900">
              좋은 매물도 홍보 타이밍을 놓치고 있습니다
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            딜러님은 <span className="text-brand-600">매물 등록</span>에만 집중하세요
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            TruckLog AI가 판매형 블로그 글 작성부터 포스팅 운영까지 대신합니다.<br/>
            매입, 상담, 출고에 집중하면서도 블로그는 꾸준히 돌아가게 만듭니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.filter((feature) => feature.icon !== Search).map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="h-12 w-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-brand-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
