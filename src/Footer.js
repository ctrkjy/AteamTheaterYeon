import img1 from "./AteamLogo.png";

//메인홈 하단 안내정보가 담긴 footer부분 컴포넌트입니다. 

function Footer() {
    return(

        <footer className="footer">
                <a className="scrollup" href="#top">
                  TOP↑
                </a>
                <div className="footerBox">
                  <img src={img1} className="footerLogo"></img>
                  <div className="footerInfo">
                    <div className="footerInfoLink" >
                      <a>고객센터</a> | <a>자주묻는질문</a> | <a>1:1문의</a> | <a>법적고지</a> | <a>회사소개</a> | <a>인재채용</a> | <a>이용약관</a> | <a>개인정보처리방침</a>
                    </div>
                    <br/><br/>
                      에이팀씨어터 안내 : 고객 센터로 전화 또는 이메일 문의를 주실 경우 상담을 도와 드리도록 하겠습니다 Tel:010 - 5872 - 6303 | E-mail:ctrkjy@naver.com <br/>
                      현금 등 구매에 관하여 구매안전(에스크로)서비스에 가입하여 고객님의 안전한 거래를 보장하고 있습니다.<br/>
                      경기도 안산시 상록구 한양대학로 55 학연산클러스터지원센터 Tel.031-400-4677 <br/>
                      대표자명 김정연 · 개인정보보호책임자 김정연 · 사업자등록번호 2001-12-26 · 통신판매업신고번호 제 1004호<br/>
                      COPYRIGHT © AteamTheater, Inc. All rights reserved
                  </div>
                </div>
        </footer>

    );

}



export default Footer;