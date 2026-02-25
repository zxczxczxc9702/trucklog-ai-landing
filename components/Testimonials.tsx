import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    name: "최석훈 대표님",
    role: "경기권 대형 트럭 매매상사",
    content: "딜러 생활 10년 차인데 글재주가 없어 항상 고민이었습니다. TruckLog AI 쓰고 나서 문의 전화가 하루 평균 5통 이상 늘었습니다. 정말 물건입니다.",
    rating: 5
  },
  {
    name: "이미란 실장님",
    role: "화물차 직거래 전문",
    content: "매입하러 다니느라 컴퓨터 앞에 앉을 시간이 없었는데, 이동 중에 폰으로 툭툭 입력하면 고퀄리티 홍보글이 나오니 너무 편해요. 시간 절약 최고!",
    rating: 5
  },
  {
    name: "박준형 부장님",
    role: "수출/폐차 및 중고 매매",
    content: "다른 마케팅 대행사에 월 100만원씩 줬었는데 효과가 없었어요. 이 프로그램은 키워드를 기가 막히게 잡아줘서 블로그 상위 노출이 잘 됩니다.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            전국 <span className="text-brand-400">500여 곳</span>의 매매상사가 선택했습니다
          </h2>
          <p className="text-lg text-slate-400">
            현직 딜러분들의 생생한 사용 후기를 확인해보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">"{review.content}"</p>
              <div className="flex items-center mt-auto border-t border-slate-700 pt-4">
                <div>
                  <div className="font-bold text-white">{review.name}</div>
                  <div className="text-sm text-brand-400">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};