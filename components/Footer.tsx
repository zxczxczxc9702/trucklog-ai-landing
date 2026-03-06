import React from 'react';
import { Truck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center text-white mb-4">
              <Truck className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">TruckLog AI</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              중고 트럭/화물차 딜러님들을 위한 AI 자동 매물 홍보 솔루션입니다.
              복잡한 블로그 마케팅은 저희에게 맡기시고, 사장님은 판매에만 집중하세요.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400">기능 소개</a></li>
              <li><a href="#" className="hover:text-brand-400">요금제</a></li>
              <li><a href="#" className="hover:text-brand-400">이용 가이드</a></li>
              <li><a href="#" className="hover:text-brand-400">딜러 등록 문의</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">고객지원</h4>
            <ul className="space-y-2 text-sm">
              <li>전화: 1588-0000</li>
              <li>이메일: dealer@trucklogai.com</li>
              <li>운영시간: 평일 09:00 - 18:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2024 TruckLog AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#apply" className="hover:text-white">도입 문의</a>
            <a href="#privacy" className="hover:text-white">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
