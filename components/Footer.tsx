import React from 'react';
import { Truck } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
              <li><a href="#features" className="hover:text-brand-400">기능 소개</a></li>
              <li><a href="#demo" className="hover:text-brand-400">생성 예시</a></li>
              <li><a href="#benefits" className="hover:text-brand-400">얼리버드 혜택</a></li>
              <li><a href="#apply" className="hover:text-brand-400">도입 신청</a></li>
            </ul>
          </div>
          <div>
            <a href="mailto:cloudlike958@gmail.com" className="text-sm hover:text-brand-400">
              이메일: cloudlike958@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {currentYear} TruckLog AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#apply" className="hover:text-white">도입 문의</a>
            <a href="#privacy" className="hover:text-white">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
