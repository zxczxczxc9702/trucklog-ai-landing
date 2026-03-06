import React from 'react';
import { FileText, RefreshCw, Search, Clock, Zap } from 'lucide-react';
import { ServiceFeature } from '../types';

const features: ServiceFeature[] = [
  {
    title: "블로그 원고 자동 완성",
    description: "차량 스펙만 대략적으로 입력하면 상위노출 로직이 적용된 최적의 블로그 원고가 즉시 완성됩니다.",
    icon: FileText
  },
  {
    title: "네이버 로직 맞춤형 업데이트",
    description: "수시로 변하는 네이버 검색 로직(C-Rank, DIA+)에 맞춰 글쓰기 방식이 자동으로 업그레이드됩니다.",
    icon: RefreshCw
  },
  {
    title: "황금 키워드 매일 제안",
    description: "경쟁은 적고 검색량은 많은 '화물차 키워드'를 매일 확인할 수 있습니다.",
    icon: Search
  },
  {
    title: "스마트 예약 & 임시저장",
    description: "미리 작성해둔 글을 원하는 시간에 예약 발행하고, 임시저장 기능으로 언제든 수정할 수 있습니다.",
    icon: Clock
  },
  {
    title: "판매 심리학 카피라이팅",
    description: "고객의 구매 욕구를 자극하는 전문적인 세일즈 멘트를 AI가 자동으로 생성합니다.",
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
              중고트럭 판매<br />
              왜 이렇게 힘들까요?
            </h2>

            <p className="text-lg font-semibold text-slate-800 mb-4">딜러들이 가장 많이 하는 고민</p>
            <ul className="space-y-3 text-slate-700 mb-8">
              <li className="flex items-start">
                <span className="text-brand-600 font-bold mr-2">•</span>
                <span>블로그 글 쓰는 시간이 부족합니다</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-600 font-bold mr-2">•</span>
                <span>네이버 노출이 어렵습니다</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-600 font-bold mr-2">•</span>
                <span>매물은 많은데 문의가 없습니다</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-600 font-bold mr-2">•</span>
                <span>블로그 관리가 너무 번거롭습니다</span>
              </li>
            </ul>

            <p className="text-base text-slate-600 mb-2">그래서 많은 딜러들이</p>
            <p className="text-xl md:text-2xl font-bold text-slate-900">
              매물은 있지만 판매 기회를 놓치고 있습니다
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            딜러님은 <span className="text-brand-600">매입</span>에만 집중하세요
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            복잡한 블로그 로직과 글쓰기는 TruckLog AI가 해결해 드립니다.<br/>
            업계 유일, 네이버 로직 변화에 실시간으로 대응하는 솔루션입니다.
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
