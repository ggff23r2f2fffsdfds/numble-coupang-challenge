import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { AiOutlineLock } from 'react-icons/ai';
import { MdPhoneIphone } from 'react-icons/md';
import { RiErrorWarningLine } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Button, Checkbox } from '../../src/components/common';
import {
  EMAIL_REQUIRED_HINT,
  EMAIL_PATTERN_HINT,
  PASSWORD_REQUIRED_HINT,
  PASSWORD_PATTERN_HINT,
  PASSWORD_CONFIRM_HINT,
  USERNAME_REQUIRED_HINT,
  PHONE_REQUIRED_HINT,
} from '../../src/constants/message';

type InputType = {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
  phoneNumber: string;
  selectAll: string;
  sub: string;
};

type TermsTypes = {
  id: number;
  label: string;
  isChecked: boolean;
  required: boolean;
};

const TERMS_CHECK_ALL_MESSAGE: string =
  '동의에는 필수 및 선택 목적(광고성 정보 수신 포함)에 대한 동의가 포함되어 있으며, 선택 목적의 동의를 거부하시는 경우에도 서비스 이용이 가능합니다.';

const initialTermsList: TermsTypes[] = [
  {
    id: 0,
    label: '[필수] 만 14세 이상입니다',
    isChecked: false,
    required: true,
  },
  {
    id: 1,
    label: '[필수] 쿠팡 이용약관 동의',
    isChecked: false,
    required: true,
  },
  {
    id: 2,
    label: '[필수] 전자금융거래 이용약관 동의',
    isChecked: false,
    required: true,
  },
  {
    id: 3,
    label: '[필수] 개인정보 수집 및 이용 동의',
    isChecked: false,
    required: true,
  },
  {
    id: 4,
    label: '[필수] 개인정보 제3자 제공 동의',
    isChecked: false,
    required: true,
  },
  {
    id: 5,
    label: '[선택] 광고성 목적의 개인정보 수집 및 이용 동의',
    isChecked: false,
    required: false,
  },
  {
    id: 6,
    label: '[선택] 광고성 정보 수신 동의',
    isChecked: false,
    required: false,
  },
  {
    id: 7,
    label: '[선택] 이메일 수신 동의',
    isChecked: false,
    required: false,
  },
  {
    id: 8,
    label: '[선택] SMS,MMS 수신 동의',
    isChecked: false,
    required: false,
  },
  {
    id: 9,
    label: '[선택] 앱 푸시 수신 동의',
    isChecked: false,
    required: false,
  },
];

export default function SignupPage() {
  const [termsList, setTermsList] = useState<TermsTypes[]>(initialTermsList);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputType>();

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch('password');

  const emailRegister = {
    ...register('email', {
      required: { value: true, message: EMAIL_REQUIRED_HINT },
      pattern: { value: /^\S+@\S+$/i, message: EMAIL_PATTERN_HINT },
    }),
  };

  const passwordRegister = {
    ...register('password', {
      required: { value: true, message: PASSWORD_REQUIRED_HINT },
      pattern: {
        value:
          /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?=[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{10,}$/i,
        message: PASSWORD_PATTERN_HINT,
      },
      minLength: { value: 8, message: PASSWORD_PATTERN_HINT },
      maxLength: { value: 20, message: PASSWORD_PATTERN_HINT },
    }),
  };

  const confirmPasswordRegister = {
    ...register('confirmPassword', {
      required: { value: true, message: PASSWORD_REQUIRED_HINT },
      validate: (value) =>
        value === passwordRef.current || PASSWORD_CONFIRM_HINT,
    }),
  };

  const userNameRegister = {
    ...register('userName', {
      required: { value: true, message: USERNAME_REQUIRED_HINT },
    }),
  };

  const phoneNumberRegister = {
    ...register('phoneNumber', {
      required: { value: true, message: PHONE_REQUIRED_HINT },
    }),
  };

  const handleChange = (event: React.MouseEvent<HTMLElement>) => {
    const { id, checked, name } = event.target as HTMLInputElement;

    if (name === 'selectAll') {
      const newTermsList = termsList.map((terms) => ({
        ...terms,
        isChecked: checked,
      }));
      setTermsList(newTermsList);
      return;
    }

    const newTermsList = termsList.map((terms) =>
      terms.id === parseInt(id) ? { ...terms, isChecked: checked } : terms
    );
    setTermsList(newTermsList);
  };

  const onSubmit: SubmitHandler<InputType> = (data) => console.log(data);

  return (
    <Container>
      <Wrapper>
        <Header>
          <h1>
            <Image
              src={'/images/logo_coupang.png'}
              alt="Logo"
              width={200}
              height={50}
            />
          </h1>
        </Header>
        <Content>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InfoWrap>
              <Title>회원정보를 입력해주세요</Title>
              <InputWrap>
                <Input
                  type="email"
                  label="email"
                  register={emailRegister}
                  errors={errors}
                  placeholder={'아이디(이메일)'}
                  icon={<MdOutlineLocalPostOffice size={24} />}
                />
                <Input
                  type="password"
                  label="password"
                  register={passwordRegister}
                  errors={errors}
                  placeholder={'비밀번호'}
                  icon={<AiOutlineLock size={24} />}
                />
                <Input
                  type="password"
                  label="confirmPassword"
                  register={confirmPasswordRegister}
                  errors={errors}
                  placeholder={'비밀번호 확인'}
                  icon={<AiOutlineLock size={24} />}
                />
                <Input
                  type="text"
                  label="userName"
                  register={userNameRegister}
                  errors={errors}
                  placeholder={'이름'}
                  icon={<FaRegUser size={24} />}
                />
                <Input
                  type="text"
                  label="phoneNumber"
                  register={phoneNumberRegister}
                  errors={errors}
                  placeholder={'휴대폰 번호'}
                  icon={<MdPhoneIphone size={24} />}
                />
              </InputWrap>
            </InfoWrap>
            <TermsWrap>
              <Title>쿠팡 서비스약관에 동의해주세요</Title>
              <Checkbox
                checked={termsList.every((terms) => terms.isChecked === true)}
                register={register('selectAll')}
                label={'모두 동의합니다.'}
                fontSize={'16px'}
                bold={true}
                name={'selectAll'}
                onClick={(event) => handleChange(event)}
                description={TERMS_CHECK_ALL_MESSAGE}
              />
              {errors && errors.sub && (
                <CheckboxErrorHint>
                  <RiErrorWarningLine color={'#cb1400'} />
                  <span>필수 항목에 모두 동의해주세요.</span>
                </CheckboxErrorHint>
              )}
              <Terms>
                {termsList.map((terms, index) => (
                  <Checkbox
                    register={register('sub', {
                      required: terms.required,
                    })}
                    checked={terms.isChecked}
                    key={index}
                    id={index}
                    name={'sub'}
                    onClick={(event) => handleChange(event)}
                    label={terms.label}
                  />
                ))}
              </Terms>
            </TermsWrap>
            <ButtonWrap>
              <Button color="blue" type="submit">
                동의하고 가입하기
              </Button>
            </ButtonWrap>
          </Form>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 460px;
  margin: 0 auto;
`;

const Header = styled.header`
  width: 100%;
  margin-bottom: 30px;
  text-align: center;
  h1 {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 100%auto;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  width: 100%;
`;

const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const InputWrap = styled.div`
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  padding: 20px 0 10px 0;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.29;
  letter-spacing: normal;
`;

const TermsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Terms = styled.ul`
  margin-top: 16px;
  padding: 18px 16px;
  border: 1px solid #ccc;
  width: 100%;
  overflow: hidden;
  gap: 30px;
  row-gap: 20px;
`;

const ButtonWrap = styled.div`
  width: 100%;
`;

const CheckboxErrorHint = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  span {
    font-size: 12px;
    line-height: 1.25;
    color: #cb1400;
    padding-left: 4px;
  }
  svg {
    width: 12px;
    height: 12px;
  }
`;
