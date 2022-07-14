import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { AiOutlineLock } from 'react-icons/ai';

import { Input, Button } from '../../src/components/common';
import {
  EMAIL_REQUIRED_HINT,
  EMAIL_PATTERN_HINT,
  PASSWORD_REQUIRED_HINT,
  PASSWORD_PATTERN_HINT,
} from '../../src/constants/message';

type InputType = { email: string; password: string };

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();

  const onSubmit: SubmitHandler<InputType> = (data) => console.log(data);

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
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          </InputWrap>
          <ButtonWrap>
            <Button type="submit" color="blue">
              로그인
            </Button>
            <Link href="/auth/signup">
              <a>
                <Button color="white">회원가입</Button>
              </a>
            </Link>
          </ButtonWrap>
        </Form>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
