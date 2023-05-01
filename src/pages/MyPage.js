import React from "react";
import styled from "styled-components";





const Mypage = () => {

    return(
        <header>
            <div>
                <a href="/">마이페이지</a>
                <a href="/">내 정보 수정</a>
                <a href="/">관심 주유소</a>
                <a href="/">주유비 조회</a>
            </div>

            <div>
                <tr>
                    <th>이름</th>
                    <td></td>
                </tr>
                <tr>
                    <th>아이디</th>
                    <td></td>
                </tr>
                <tr>
                    <th>휴대전화번호</th>
                    <td></td>
                </tr>
                <tr>
                    <th>이메일</th>
                    <td></td>
                </tr>
            </div>
            
        </header>
    );
};
export default Mypage;