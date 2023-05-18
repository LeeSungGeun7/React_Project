import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../layout/Header";
import arrow from "../images/right-arrow.png"
import AxiosApi from "../api/AxiosApi";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import Modal from "react-modal";
// import Post from "./Post";

const Container = styled.div`
	* {
		box-sizing: border-box;
	}
  .container {
    background-color: mintcream ;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
  }
  .signUp {
    width: 450px;
    height: 780px;
    background-color: white;
    padding: 0 50px;
    margin-bottom: 20px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    display: flex;
    flex-direction: column;
  }
  h1 {
    align-self: center;
  }
	.inputBox{
		margin-top: 25px;
	}
	.Name {
		margin-top: 10px;
	}
	label {
		font-weight: bold;
		font-size: 1.2rem;
	}
	.do {
		background-color: #fff;
		color: white;
		margin-bottom: 40px;
		margin-top: auto;
		margin-left: auto;
	}
	.do:hover {
		background-color: #f5f5f5;
	}
	.do:active {
		background-color: #ededed;
	}
	.button {
		width: 60px;
		height: 60px;
		border: none;
		border-radius: 60px;
		font-size: 1.5rem;
	}
	.arrow {
		height: 100%;
		width: 100%;
	}
	.check{
		border: none;
		background-color: #ccc;
		border-radius: 5px;
		box-shadow: 0 2px 3px rgba(0,0,0,0.25), 0 1.5px 1.5px rgba(0,0,0,0.22);
		margin-left: 10px;
		height: 25px;
	}
	.check:active {
		background-color: #b0b0b0;
	}
	.inputInfo {
		width: 80%;
	}
	.btn-confirm {
		height: 45px;
		width: 35%;
		border: none;
		background-color: royalblue;
		color: white;
	}
	.btn-confirm:active {
		background-color: #25a;
	}
	.confirm {
		height: 45px;
		width: 65%;
		padding: 0 2vw;
		outline: none;
		border: none;
		background-color: #eee;
	}
	.success {
    color: royalblue;
		font-size: .5rem;
  }
  .error {
    color: red;
		font-size: .5rem;
  }
	select {
		height: 25px;
		width: 20%;
		outline: none;
		border: none;
		background-color: #f3f3f3;
		margin-right: 7px;
	}
	.tel {
		border: none;
		background-color: #eee;
		width: 25%;
		height: 25px;
		margin: 0 7px;
		outline: none;
		padding: 0 15px;
	}
`
const Input = styled.input`
	width: 100%;
	height: 25px;
	border-left-width: 0;
	border-right-width: 0;
	border-top-width: 0;
	border-bottom-width: 1px;
	outline: none;
	margin-top: 5px;
	font-size: 1rem;
	
`
const SignUp = () => {
	const navigate = useNavigate("");
	// 입력 란
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [gender, setGender] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	// 정규식 유효성 검사
	const [emailReg, setEmailReg] = useState(false);
	const [pwdReg, setPwdReg] = useState(false);

	// 중복 확인
	const [emailConfirm, setEmailConfirm] = useState(false);
	// 발급받은 키 값
	const [keyCode, setKeyCode] = useState("");
	// 키 일치 여부
	const [keyConfirm, setKeyConfirm] = useState(false);


	// 오류메시지
	const [idMessage, setIdMessage] = useState("");
	const [pwMessage, setPwMessage] = useState("");

	const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
	// 전화번호
	// let tel = [];
	const location = useLocation();

	// 이메일 정규식 확인
	const onChangeEmail = (e) => {
		setEmail(e.target.value);
		if (emailRegEx.test(e.target.value)) {
			setEmailReg(true);
		} else {
			setEmailReg(false);
		}
	}
	const onChangeGender = (e) => {
		setGender(e.target.value);
	}

	// 중복확인
	const onClickEmailCheck = async () => {
		const ischeck = (await AxiosApi.getCustomerInfo(email)).data;
		setEmailConfirm(ischeck);
		console.log(ischeck);
		if (emailReg) {
			if (ischeck) setIdMessage("사용 가능한 이메일입니다.");
			else setIdMessage("이미 사용중인 이메일입니다.");
		} else setIdMessage("올바른 형식이 아닙니다.");

		console.log("이메일 형식 : " + emailReg);
		console.log("중복확인 : " + emailConfirm);
	}
	// 인증하기
	const onChangeKey = (e) => {
		if (keyCode === e.target.value) setKeyConfirm(true);
		else setKeyConfirm(false);
		console.log(keyConfirm);
	}

	const onClickGetKey = async () => {
		const key = (await AxiosApi.getKeyCode(email));
		console.log(key.data);
		if (key.status === 200) setKeyCode(key.data);
	}

	const onChangePwd = (e) => {
		const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
		setPwd(e.target.value);
		if (!passwordRegEx.test(e.target.value)) {
			setPwMessage('올바른 형식이 아닙니다')
			setPwdReg(false);
		} else {
			setPwMessage('사용가능한 비밀번호 입니다.')
			setPwdReg(true);
		}
	}

	const onChangePhone = e => {
		e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
		setPhone(e.target.value);
	}
	// const onPhone1st = (e) => {
	// 	tel[0] = e.target.value;
	// 	const PhoneNumber = tel[0] + "-" + tel[1] + "-" + tel[2];
	// 	setPhone(PhoneNumber);
	// }

	// const onPhone2nd = (e) => {
	// 	tel[1] = e.target.value;
	// 	const PhoneNumber = tel[0] + "-" + tel[1] + "-" + tel[2];
	// 	setPhone(PhoneNumber);
	// }

	// const onPhone3rd = (e) => {
	// 	tel[2] = e.target.value;
	// 	const PhoneNumber = tel[0] + "-" + tel[1] + "-" + tel[2];
	// 	setPhone(PhoneNumber);
	// }
	const onChangeAddress = (e) => {
		setAddress(e.target.value);
	}
	const openDaumAddress = () => {
		new window.daum.Postcode({
      oncomplete: function(data) {
        setAddress(data.address);
      },
    }).open();
	}

	const onClickSignUp = async () => {
		const data = {
			nm : name,
			addr: address,
			id: email,
			gend: gender,
			emailRegex: emailReg,
			password: pwd,
			pwdRegex: pwdReg,
			duplicated : emailConfirm,
			Autorized: keyConfirm,
			phoneNumber : phone,

		}
		console.log(data);
		const response = await AxiosApi.signUp(data);
		if (response.data === true) {
      navigate("/Login");
    } else {
      console.log("로그인 에러 !!!");
    }
	}

	// useEffect(() => {
	// 	if(location.state.length > 0) {
	// 		const info = location.state.data;
	// 		setName(info.name);
	// 		setEmail(info.email);
	// 	}
	// }, []);

	return (
		<Container>
			<Header />
			<div className="container">
				<div className="signUp">
					<h1>회원가입</h1>
					<div className="inputBox Name">
						<label id="name">이름</label>
						<Input type="text" placeholder="ex) 홍길동" value={name} onChange={e => { setName(e.target.value) }} />
					</div>
					<div className="inputBox">
						<label id="gender">성별</label>
						<br></br>
						<select onChange={onChangeGender}>
							<option value="">선택</option>
							<option value="M">남자</option>
							<option value="F">여자</option>
						</select>
					</div>
					<div className="inputBox">
						<label id="email">이메일</label><br></br>
						<Input
							className="inputInfo"
							type="text"
							placeholder="ex) example@example.com"
							value={email}
							onChange={onChangeEmail}
						/>
						<button className="check" onClick={onClickEmailCheck}>중복확인</button>
					</div>
					{email.length > 0 && <span className={`${emailReg && emailConfirm ? "success" : "error"}`}>{idMessage}</span>}

					{emailConfirm &&
						<div className="inputBox">
							<input className="confirm" type="text" placeholder="인증번호 입력" onChange={onChangeKey} />
							<button className="btn-confirm" onClick={onClickGetKey}>인증번호 발급</button>
							{/* <button className="check" onClick={onConfirmKeyCode}>인증하기</button>  */}
						</div>
					}
					<div className="inputBox">
						<label id="password">비밀번호</label>
						<Input
							type="password"
							placeholder="영문자, 숫자, 특수문자를 포함한 8~25자"
							value={pwd}
							onChange={onChangePwd}
						/>
						{pwd.length > 0 && <span className={`${pwdReg ? "success" : "error"}`}>{pwMessage}</span>}
					</div>
					<div className="inputBox">
						<label id="phone">전화번호</label>
						<Input type="text" placeholder="'-' 제외하고 입력" value={phone} onChange={onChangePhone}/>
					</div>
					<div className="inputBox">
						<label id="addr">주소</label>
						<br></br>
						<Input className="inputInfo" type="addrdess" placeholder="ex) 서울특별시 강남구 테헤란로" value={address} onChange={onChangeAddress}/>
						<button className="check"  onClick={openDaumAddress}>주소찾기</button>
						{/* <Modal isOpen={true}>
							<Post address={address} setAddress={setAddress} />
						</Modal> */}
					</div>
					<div className="button do" onClick={onClickSignUp}>
						<img className="arrow" src={arrow} alt="right-arrow" />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default SignUp;