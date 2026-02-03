'use client'

export default function home() {
  return (
<div className="flex flex-col text-[15px]">
  <div className="flex bg-gray-900 h-12 p-3 gap-6">
    <div className="text-white font-bold cursor-pointer">OP.GG</div>
    <div className="text-white cursor-pointer hover:underline">전적</div>
    <div className="text-white cursor-pointer hover:underline">리그 오브 레전드</div>
    <div className="text-gray-500 cursor-pointer hover:underline">데스크톱</div>
    <div className="text-gray-500 cursor-pointer hover:underline">게임즈</div>
    <div className="text-gray-500 cursor-pointer hover:underline">Duo</div>
    <div className="text-gray-500 cursor-pointer hover:underline">톡피지지</div>
    <div className="text-gray-500 cursor-pointer hover:underline">이스포츠</div>
    <div className="text-gray-500 cursor-pointer hover:underline">Gigs</div>
    <div className="text-gray-500 cursor-pointer hover:underline">스트리머 오버레이</div>
  </div>
  <div className="bg-blue-400 h-12">
    <div className="flex justify-center h-16 p-3 gap-6">
      <div className="text-white cursor-pointer hover:underline">홈</div>
      <div className="text-white cursor-pointer hover:underline">챔피언 분석</div>
      <div className="text-white cursor-pointer hover:underline">게임 모드</div>
      <div className="text-white cursor-pointer hover:underline">스킨 순위</div>
      <div className="text-white cursor-pointer hover:underline">랭킹</div>
      <div className="text-white cursor-pointer hover:underline">프로 관전</div>
      <div className="text-white cursor-pointer hover:underline">통계</div>
      <div className="text-white cursor-pointer hover:underline">멀티서치</div>
      <div className="text-white cursor-pointer hover:underline">커뮤니티</div>
      <div className="text-white cursor-pointer hover:underline">강의</div>
    </div>
  </div>
  <div className="flex bg-gray-900 h-12"></div>
  
</div>
  );
}

// 1. Position / relative 를 활용하고싶은데 이해가 전혀안감..
//    큰 배경을 먼저 설정하고 탑박스들을 앞으로 빼야하는거 같은데 이해가 안감
//    위 상황에서 큰 박스를 설정하지 못하여서 가장큰 메인 바디 크기가 지정이 안됨

// 2. 탑박스 안에 각 박스에 보더를 깎거나 이미지를 추가하는 방법이 이해가 안감
//    탑박스 justify-between 으로 양옆으로 벌려야 하는거 같은데 까먹은건지 이해가 안되는건지 해결 불가..

// 3. hover:underline 글씨와 선 사이에 갭을 주고싶음

// 4. F12 눌러서 자꾸 뜯어봐야하는 연습 필요

// 5. 헤드 메인?바디? 나누는것도 이해필요 
//    너무 복잡하게 보여서 자꾸 갈아엎음..

// 6. 전체적으로 제대로된 학습 / 복습 필요