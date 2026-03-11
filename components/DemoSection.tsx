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

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-x border-slate-200">
            <div className="p-8 md:p-12 bg-white h-[800px] overflow-y-auto scrollbar-hide">
              {/* Title Area */}
              <div className="mb-8 border-b border-slate-100 pb-6">
                <p className="text-sm text-slate-500 mb-3">대형중고트럭 매매</p>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                  엑시언트 25톤 후축 윙바디 20년식 오토 리타더 중고트럭 확인하세요.
                </h3>
                <div className="flex items-center text-slate-400 text-sm">
                  <span>2026. 3. 11. 10:20</span>
                  <span className="mx-2">·</span>
                  <span>대형트럭 김대표</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="space-y-8 text-slate-700 leading-relaxed text-lg">
                <p>
                  안녕하세요. 대형 상용차 위주로 매입과 판매를 진행해온 트럭마스터 김대표입니다.<br/><br/>
                  오늘 확인하실 차량은 <strong>엑시언트 25톤 후축 윙바디 20년식 오토 리타더</strong> 사양입니다. 이 급의 중고트럭은 단순히 연식과 외관만 보고 접근하면 안 됩니다. 어떤 화물을 어떤 노선에서 운행했는지, 후축과 하체가 안정적인지, 윙바디 작동과 누수 여부는 어떤지, 오토 미션과 리타더가 실제 운행에서 제대로 살아 있는지까지 함께 확인해야 진짜 수익 나는 차량을 고를 수 있습니다.
                </p>

                <p>
                  특히 25톤 후축 윙바디는 공산품, 파렛트 화물, 공장 납품, 장거리 간선 운행처럼 회전율과 적재 효율이 중요한 현장에서 선호도가 높습니다. 여기에 오토와 리타더까지 갖춘 차량은 기사님 피로도 관리와 브레이크 계통 소모 관리 면에서 차이가 분명합니다. 그래서 이 사양은 옵션이 많은 차량이 아니라, <strong>실무에서 효율이 검증된 조합</strong>으로 보셔야 맞습니다.
                </p>

                <div className="border-y border-slate-200 py-6 space-y-3 text-base md:text-lg">
                  <h4 className="font-bold text-slate-900">차량 핵심 제원</h4>
                  <p><span className="font-medium text-slate-900">차량명</span> 현대 엑시언트 25톤 후축 윙바디</p>
                  <p><span className="font-medium text-slate-900">최초등록</span> 2020년식</p>
                  <p><span className="font-medium text-slate-900">주행거리</span> 468,214km</p>
                  <p><span className="font-medium text-slate-900">미션/옵션</span> 오토 / 리타더</p>
                  <p><span className="font-medium text-slate-900">운행 포인트</span> 후축, 윙바디, 장거리 일반화물 대응</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900">1. 왜 25톤 후축 윙바디 사양을 많이 찾는가</h4>
                  <p>
                    25톤 후축 윙바디는 적재 효율과 상하차 편의성 면에서 현장 선호도가 높은 조합입니다. 후축이 들어가면 축중 분산에 유리하고, 상차 이후 차가 한쪽으로 쏠리는 느낌을 줄이는 데 도움이 됩니다. 일반 카고보다 윙바디를 선호하는 이유도 분명합니다. 도크 작업과 지게차 상하차 속도가 빠르고, 날씨 영향을 상대적으로 덜 받으며, 회전율이 중요한 현장에서 작업 효율이 좋기 때문입니다.<br/><br/>
                    여기에 엑시언트급에서 오토와 리타더까지 함께 들어가면 실무 체감이 확실히 달라집니다. 장거리 운행, 정체 구간, 내리막 구간에서 기사님 피로도 차이가 크게 나고, 차주 입장에서는 브레이크 계통 소모 관리도 수월해집니다. 그래서 이 사양은 단순히 옵션이 많은 차가 아니라, 실제 운행 수익성과 유지비를 함께 고려한 조건이라고 이해하시면 됩니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900">2. 엔진, 오토 미션, 리타더 확인 포인트</h4>
                  <p>
                    엑시언트급 중고트럭을 볼 때는 먼저 냉간 시동 반응, 공회전 안정성, 배기색, 누유 흔적, 냉각 계통 상태부터 체크해야 합니다. 이 차급은 단순히 시동만 잘 걸리는지를 보는 수준으로는 부족합니다. 장거리 실운행에서 온도 유지가 안정적인지, 부하가 걸렸을 때 출력이 고르게 이어지는지, 오토 미션이 단수 변경을 지연 없이 매끈하게 가져가는지를 함께 보셔야 실제 운행 품질을 판단할 수 있습니다.<br/><br/>
                    리타더는 특히 중요합니다. 25톤급은 하행 구간과 고속도로 감속 구간이 많기 때문에 보조제동 장치 상태가 좋으면 풋브레이크 의존도가 확실히 줄어듭니다. 브레이크 라이닝과 제동 계통 소모를 줄이는 데 유리하고, 기사님도 긴 내리막에서 훨씬 여유 있게 운전할 수 있습니다. 중고 매물에서는 리타더 단계별 개입감, 계기 경고 유무, 작동 반응을 꼭 확인해야 하는데, 이 부분이 살아 있는 차량은 상품성 차이가 분명합니다.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-slate-900">3. 후축과 윙바디는 어떻게 봐야 하는가</h4>
                  <p>
                    후축 사양은 단순히 축 하나가 더 들어간 차량으로 보시면 안 됩니다. 적재 시 하중 분산, 직진 안정성, 타이어 편마모, 후축 상승·하강 작동 상태까지 같이 봐야 제대로 된 상품 판단이 됩니다. 후축 관련 부싱, 에어 계통, 축 정렬 상태가 흐트러진 차량은 운행 중 피로도가 커지고 타이어 소모도 빨라질 수 있습니다. 그래서 실차 확인 때는 후축 작동성뿐 아니라 하중을 받았을 때 차가 어떻게 서는지도 함께 보시는 것이 좋습니다.<br/><br/>
                    윙바디 역시 겉만 반듯하다고 끝이 아닙니다. 윙 개폐 속도, 문짝 유격, 힌지 상태, 루프와 측면 패널의 누수 흔적, 바닥 철판 보강 상태까지 점검해야 실제 현장에서 바로 쓸 수 있는 차량인지 판단할 수 있습니다. 공산품이나 파렛트 화물을 지속적으로 싣는 분이라면 윙 작동성, 후문 개폐 편의성, 바닥 상태를 꼼꼼히 보셔야 이후 운영 비용을 줄일 수 있습니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900">4. 하체, 타이어, 정비 이력은 반드시 확인해야 합니다</h4>
                  <p>
                    대형트럭은 결국 하체와 프레임이 재산입니다. 프레임 부식, 크로스멤버 상태, 하부 누유, 서스펜션과 판스프링, 킹핀 및 각종 링크류 유격을 체크하지 않으면 겉모습만 보고 판단하는 실수를 하게 됩니다. 특히 중량차는 작은 유격 하나가 장거리 운행에서 큰 피로와 유지비로 돌아오기 때문에, 하체 점검은 선택이 아니라 기본입니다.<br/><br/>
                    타이어는 잔존 트레드만 볼 것이 아니라 제조 시기, 편마모, 축별 마모 편차를 함께 봐야 합니다. 브레이크 계통, 에어 누설, 허브 주변 누유, 배선 정리, 등화류 작동, 윙 전장 상태까지 함께 확인하면 실제 상품 수준이 보입니다. 여기에 정비내역서, 소모품 교환 이력, 성능점검 기록, 사고 이력 확인 가능 여부까지 더해지면 매입 이후 예산 계획을 세우기 훨씬 쉬워집니다. 중고 대형트럭은 싸게 사는 것보다 예상 못한 지출이 적은 것이 더 중요합니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900">5. 최종 판단과 구입 실무 정리</h4>
                  <p>
                    정리하면, 엑시언트 25톤 후축 윙바디 20년식 오토 리타더는 장거리 일반화물과 윙 작업 비중이 높은 분께 실무성이 분명한 조합입니다. 후축, 오토, 리타더가 모두 들어간 차량은 기사 피로도와 소모품 관리 측면에서 강점이 있고, 운행 패턴만 맞으면 바로 현장 투입하기 좋은 조건입니다. 중요한 것은 연식 한 줄보다 실제 관리 상태와 옵션 작동 상태를 얼마나 정확히 확인했느냐입니다.<br/><br/>
                    사업자 운용, 할부 진행, 기존 차량 대차, 세금계산서 발행 등 실무 절차도 함께 검토해야 최종 비용 계산이 정확해집니다. 차량 영상 확인, 하부 점검 포인트, 리타더 작동 확인, 윙 개폐 상태까지 차근차근 보시고 판단하시면 됩니다. 운송업 신규 진입이든 증차 목적이든, 월 납입 부담과 예상 소모품 교체 시점을 같이 계산해보면 판단이 훨씬 선명해집니다. 이런 조건의 중고트럭을 찾고 계셨다면 이번 차량은 충분히 검토해볼 가치가 있는 사양입니다.
                  </p>
                </div>

                <div className="pt-2">
                  <p className="font-semibold text-slate-900">
                    실차 확인 시 후축 작동, 리타더 개입감, 윙 개폐, 하부 상태까지 체크 포인트를 정리해서 안내드릴 수 있습니다.
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
                  #엑시언트 #25톤후축윙바디 #오토리타더 #중고트럭 #대형트럭매매 #윙바디매매 #화물차할부 #엑시언트중고
                </div>
              </div>
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
