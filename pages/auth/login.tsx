import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { AiOutlineLock } from 'react-icons/ai';

import { Input, Button } from '../../src/components/common';

export default function LoginPage() {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit = () => {};

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
          <Input
            label="email"
            register={register}
            placeholder={'아이디(이메일)'}
            icon={<MdOutlineLocalPostOffice size={24} />}
          />
          <Input
            label="password"
            register={register}
            placeholder={'비밀번호'}
            icon={<AiOutlineLock size={24} />}
          />
          <Button type="submit" color="blue">
            로그인
          </Button>
          <Link href="/auth/signup">
            <a>
              <Button color="white">회원가입</Button>
            </a>
          </Link>
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
  width: 500px;
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
  width: 100%auto;
  display: flex;
  gap: 12px 0;
  flex-direction: column;
`;
