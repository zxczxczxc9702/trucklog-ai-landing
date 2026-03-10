import React from 'react';

export const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-white overflow-hidden scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            차량 정보만 넣어도 <span className="text-brand-600">이런 글</span>이 나옵니다
          </h2>
          <p className="text-lg text-slate-600">
            딜러가 직접 쓰지 않아도, 고객이 읽고 문의하도록 설계된 판매형 원고를 자동으로 생성합니다.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            예시 화면입니다. 실제 서비스에서는 차량 스펙 입력 후 바로 생성됩니다.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden">
            {/* Mock Browser Header */}
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center space-x-2">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 text-center text-xs text-slate-500 font-medium font-mono">
                blog.naver.com/truck-dealer/1234
              </div>
            </div>

            {/* Mock Blog Content */}
            <div className="p-8 md:p-12 bg-white h-[800px] overflow-y-auto scrollbar-hide">
              {/* Title Area */}
              <div className="mb-8 border-b border-slate-100 pb-6">
                <p className="text-sm text-slate-500 mb-3">중고화물차 매매</p>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                  [특급매물] 현대 포터2 윙바디 20년식, "돈 벌어다 주는 차는 엔진 소리부터 다릅니다" (실주행 5만km/무사고)
                </h3>
                <div className="flex items-center text-slate-400 text-sm">
                  <span>2024. 2. 10. 14:30</span>
                  <span className="mx-2">·</span>
                  <span>트럭마스터 김대표</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="space-y-8 text-slate-700 leading-relaxed text-lg">
                <p>
                  안녕하십니까. 화물차 외길 20년, <strong>'진심을 파는 딜러' 대박트럭 김철수 대표</strong>입니다.<br/><br/>
                  화물차는 승용차와 다릅니다. 단순한 이동 수단이 아니라, 사장님의 소중한 생계이자 사업 파트너이기 때문입니다. 그렇기에 저는 당장의 마진보다는, 사장님께서 가져가셔서 수리비 걱정 없이 돈 벌어다 줄 <strong>'효자 차량'</strong>만 엄선해서 소개합니다. 저 김철수가 이름 석 자 걸고 추천하는 매물입니다.
                </p>

                <p>
                  오늘 보여드릴 녀석은 시장에 나오자마자 딜러들 사이에서도 탐내고 있는 <strong>현대 포터2 1톤 윙바디</strong>입니다. 신차 출고 대기가 길어 답답하셨던 사장님들께, 신차급 컨디션을 즉시 운행할 수 있는 최고의 대안이 될 것입니다.
                </p>

                <div className="border-y border-slate-200 py-6 space-y-3 text-base md:text-lg">
                  <h4 className="font-bold text-slate-900">차량 핵심 제원</h4>
                  <p><span className="font-medium text-slate-900">차량명</span> 현대 포터2 슈퍼캡 윙바디</p>
                  <p><span className="font-medium text-slate-900">최초등록</span> 2020년 6월식</p>
                  <p><span className="font-medium text-slate-900">주행거리</span> 52,300km (100% 실주행)</p>
                  <p><span className="font-medium text-slate-900">미션/연료</span> 오토 / 디젤</p>
                  <p><span className="font-medium text-slate-900">사고유무</span> 완전 무사고 (단순교환 X)</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900">1. 엔진 및 미션 컨디션 "최상"</h4>
                  <p>
                    제가 매입하러 가서 시동을 걸자마자 <strong>"아, 이건 됐다"</strong> 싶었습니다. 디젤 특유의 진동도 거의 느껴지지 않을 만큼 정숙합니다. 전 차주분께서 시내 가전 배송 용도로만 가볍게 타셨고, 5,000km마다 꼬박꼬박 합성유로 관리해주신 덕분입니다. 엔진룸 열어서 누유 한 방울 없는 것 확인했습니다.<br/><br/>
                    특히 오토 미션이라 막히는 시내 주행이나 골목길 배송 하시는 사장님들 무릎 걱정 덜어드립니다. 변속 충격 전혀 없이 아주 부드럽게 치고 나갑니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900">2. 윙바디 및 적재함 상태</h4>
                  <p>
                    중고 윙바디 보실 때 가장 중요한 게 <strong>'작동 상태'</strong>와 <strong>'누수 여부'</strong>죠. 제가 직접 고압 세차기로 물 뿌려가며 테스트 마쳤습니다. 비 한 방울 새는 곳 없이 짱짱합니다.<br/><br/>
                    윙 모터 힘도 좋아서 스위치만 누르면 시원시원하게 올라갑니다. 적재함 바닥은 철판 보강 작업이 되어 있어 무거운 짐을 실어도 끄떡없습니다. 추가 비용 들이실 필요 없이 바로 현장 투입 가능합니다.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-slate-900">딜러의 솔직한 한마디</h4>
                  <p>
                    솔직히 말씀드리면, 이 정도 연식에 이 주행거리, 그리고 이렇게 병적으로 관리된 차량은 1년에 몇 대 안 들어옵니다. <strong>감가상각 다 맞은 가격에 신차급 성능</strong>을 가져가시는 겁니다. 기름만 넣고 타시면 됩니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900">3. 하체 및 타이어 상태</h4>
                  <p>
                    화물차의 생명은 프레임입니다. 리프트 띄워서 하부까지 꼼꼼하게 확인했습니다. 염화칼슘 흔적이나 부식 전혀 없이 아주 깨끗합니다. 판스프링 상태도 짱짱합니다.<br/><br/>
                    <strong>타이어 트레드는 앞뒤 모두 80% 이상</strong> 남아있습니다. 향후 1년 이상은 소모품 걱정 없이 운행하실 수 있습니다. (방문하시면 리프트 띄워서 직접 눈으로 확인시켜 드립니다!)
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900">4. 구입 방법 및 금융 혜택</h4>
                  <p>
                    사업자등록증 있으신 사장님들은 <strong>부가세 환급</strong> 가능하며, 전액 세금계산서 발행해드립니다. 초기 자금이 부족하시더라도 걱정 마세요. 제휴 캐피탈사를 통해 <strong>최저 금리 전액 할부(최장 60개월)</strong> 진행 도와드립니다.<br/>
                    기존에 타시던 차량 대차(최고가 매입)도 가능하니 부담 없이 문의주세요.
                  </p>
                </div>

                <div className="pt-2">
                  <p className="font-semibold text-slate-900">
                    성능점검기록부 100% 원본 보유, 침수차일 시 100% 전액 환불 보장합니다.
                  </p>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <p className="text-xl font-bold text-slate-900 mb-3">망설이는 순간 계약됩니다</p>
                  <p className="text-base text-slate-700 mb-4">
                    좋은 차는 주인을 오래 기다려주지 않습니다.<br/>
                    부담 없이 문의를 남기시면, <strong>차량 영상통화</strong>와 도입 안내를 빠르게 받아보실 수 있습니다.
                  </p>
                  <a href="#apply" className="text-brand-700 underline underline-offset-4">
                    도입 상담 신청하기
                  </a>
                </div>

                <div className="pt-2 text-base text-slate-500">
                  #중고화물차 #포터2윙바디 #1톤용달 #개별화물창업 #중고트럭매매 #무사고트럭 #화물차할부 #내차팔기
                </div>
              </div>
            </div>
            
            {/* Scroll indicator overlay */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none flex items-end justify-center pb-8">
              <span className="text-sm font-medium text-slate-400 animate-bounce">
                아래로 스크롤하여 전체 원고 확인
              </span>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-slate-500">
              실제 서비스에서는 제목, 본문, 후킹 문구까지 자동 생성됩니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
