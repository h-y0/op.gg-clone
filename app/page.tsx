'use client'
import { IoIosArrowDown } from "react-icons/io"
export default function home() {
  return (
<div className="w-full min-h-screen flex flex-col bg-[#1C1C1F]">
      <div className="w-full h-[48px] bg-[#1C1C1F] px-[24px] flex items-center">
        <div className="w-[90px] h-full pr-[24px] flex items-center cursor-pointer">
          <span className="text-white text-[20px] font-bold">OP.GG</span>
        </div>
        <div className="w-[260.05px] h-full px-[8px] py-[4px] flex items-center gap-[8px]">
          <img src="https://s-opgg-kit.op.gg/gnb/config/images/icon/bfa5abe2f78d6e9a55e81c9988c31442.svg?image=q_auto:good,f_webp,w_24,h_24" alt="" />
          <span className="text-[14px] text-white">전적</span>
          <div className="w-[168.95px] h-full px-[8px] py-[4px] flex items-center gap-[4px] bg-[#424254] rounded-[6px] cursor-pointer">
            <img src="https://s-opgg-kit.op.gg/gnb/config/images/icon/f716f47e658f27f0261febb5fa52260d.svg?image=q_auto:good,f_webp,w_24,h_24" alt="" />
            <span className="text-white text-[14px]">리그 오브 레전드</span>
            <div><IoIosArrowDown className="text-[#ebeef1]" size={14} /></div>
          </div>
        </div>
          <div className="w-[108px] h-full py-[4px] pr-[12px] pl-[8px] flex items-center gap-[8px] cursor-pointer">
            <img src="https://s-opgg-kit.op.gg/gnb/config/images/icon/578ee563211e6ec9586f3d9dee5c55da.svg?image=q_auto:good,f_webp,w_24,h_24" alt="" />
            <span className="text-[14px] text-white">데스크톱</span>
          </div>
          <div className="w-[127.97px] h-full py-[4px] pr-[12px] pl-[8px] flex items-center gap-[8px] ml-[8px] cursor-pointer">
            <img src="https://s-opgg-kit.op.gg/gnb/config/images/icon/a9ec9005c598e9dc644e46835a8170bf.svg?image=q_auto:good,f_webp,w_24,h_24" alt="" />
            <span className="text-[14px] text-white">게임즈</span>
            <span className="text-[8px] bg-[#EB9C00] px-[4px] py-[1px] rounded-[100px]">New</span>
          </div>
          <div className="w-[78px] h-full py-[4px] pr-[12px] pl-[8px] flex items-center gap-[8px] cursor-pointer">
            <img src="https://s-opgg-kit.op.gg/gnb/config/images/icon/a31ab0f891ab2609ac0a9825c03816e6.svg?image=q_auto:good,f_webp,w_24,h_24" alt="" />
            <span className="text-[14px] text-white">Duo</span>
          </div>
          <div className="w-[108px] h-full py-[4px] pr-[12px] pl-[8px] flex items-center gap-[8px] cursor-pointer">
            <img src="https://s-opgg-kit.op.gg/gnb/config/images/icon/f8f51b5a7ef32cf4cdd43545f3ce3574.svg?image=q_auto:good,f_webp,w_24,h_24" alt="" />
            <span className="text-[14px] text-white">톡피지지</span>
          </div>
          <div className="w-[108px] h-full py-[4px] pr-[12px] pl-[8px] flex items-center gap-[8px] cursor-pointer">
            <img src="https://s-opgg-kit.op.gg/gnb/config/images/icon/1f3d8921b286644f2f28a4d4853d8d87.svg?image=q_auto:good,f_webp,w_24,h_24" alt="" />
            <span className="text-[14px] text-white">이스포츠</span>
          </div>
          <div className="w-[80px] h-full py-[4px] pr-[12px] pl-[8px] flex items-center gap-[8px] cursor-pointer">
            <img src="https://s-opgg-kit.op.gg/gnb/config/images/icon/968fbbfb3dbebd05e25545bb2d1d9437.svg?image=q_auto:good,f_webp,w_24,h_24" alt="" />
            <span className="text-[14px] text-white">Gigs</span>
          </div>
          <div className="w-[206.82px] h-full py-[4px] pr-[12px] pl-[8px] flex items-center gap-[8px] cursor-pointer">
            <img src="https://s-opgg-kit.op.gg/gnb/config/images/icon/6cd1996dccd4d60704436a35b7128027.svg?image=q_auto:good,f_webp,w_24,h_24" alt="" />
            <span className="text-[14px] text-white">스트리머 오버레이</span>
            <span className="text-[8px] bg-[#EB9C00] px-[4px] py-[1px] rounded-[100px]">New</span>
          </div>
      </div>
      <div className="w-full h-[45px] bg-[#5383E8] px-[24px] flex flex-col items-center justify-between">
        <div className="w-[1080px] h-[44px] flex items-center gap-[20px]">
          <div className="w-[15px] h-full pt-[12px] pb-[9px] flex items-center gap-[8px] cursor-pointer hover:underline">
            <span className="text-[15px] text-white">홈</span>
          </div>
          <div className="w-[79px] h-full pt-[12px] pb-[9px] flex items-center gap-[8px] cursor-pointer hover:underline">
            <span className="text-[15px] text-white">챔피언 분석</span>
          </div>
          <div className="w-[85px] h-full pt-[12px] pb-[9px] flex items-center gap-[2px] cursor-pointer hover:underline">
            <span className="text-[15px] text-white">게임 모드</span>
            <span className="text-[12px] text-white bg-[#FFB900] px-[4px] py-[1px] rounded-[5px] gap-[5px]">U</span>
          </div>
          <div className="w-[64px] h-full pt-[12px] pb-[9px] flex items-center cursor-pointer hover:underline">
            <span className="text-[15px] text-white">스킨 순위</span>
          </div>
          <div className="w-[30px] h-full pt-[12px] pb-[9px] flex items-center cursor-pointer hover:underline">
            <span className="text-[15px] text-white">랭킹</span>
          </div>
          <div className="w-[64px] h-full pt-[12px] pb-[9px] flex items-center cursor-pointer hover:underline">
            <span className="text-[15px] text-white">프로 관전</span>
          </div>
          <div className="w-[30px] h-full pt-[12px] pb-[9px] flex items-center cursor-pointer hover:underline">
            <span className="text-[15px] text-white">통계</span>
          </div>
          <div className="w-[60px] h-full pt-[12px] pb-[9px] flex items-center cursor-pointer hover:underline">
            <span className="text-[15px] text-white">멀티서치</span>
          </div>
          <div className="w-[60px] h-full pt-[12px] pb-[9px] flex items-center cursor-pointer hover:underline">
            <span className="text-[15px] text-white">커뮤니티</span>
          </div>
          <div className="w-[30px] h-full pt-[12px] pb-[9px] flex items-center cursor-pointer hover:underline">
            <span className="text-[15px] text-white">강의</span>
          </div>
          <div className="w-[107px] h-full pt-[12px] pb-[9px] flex justify-end cursor-pointer hover:underline">
            <span className="text-[15px] text-white">마이페이지</span>
            
          </div>          
        </div>
      </div>
      <div className="w-auto h-full flex items-center justify-center pt-[60px]">
        <img src="https://meta-static.op.gg/logo/image/fb9b3e00610f0467dd615d3395410085.png?image=q_auto:good,f_webp,w_400&v=1769499572" alt="" />
      </div>
      <div className="w-full h-[60px] flex flex-col items-center justify-center bg-gray-0">
        <div className="w-[800] h-[60px] flex items-center justify-center border rounded-[100px]">
          <input type="text" />
        </div>
      </div>
    </div>

  );
}

// 1. 파란 박스안에서 강의와 마이페이지 사이 간격 더 넓히는법

// 2. svg를 img로 변환하여 적용하는 방법

// 3. 보더박스안에 input창 넓히는 방법

// 4. 화면이 반 갈라져서 보더박스 높이를 더 설정하면 잘리는 원인