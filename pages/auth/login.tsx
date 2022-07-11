import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { AiOutlineLock } from 'react-icons/ai';

import { Input, Button } from '../../src/components/Common';

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
          <Image
            src={'/images/logo_coupang.png'}
            alt="Logo"
            width={200}
            height={50}
          />
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
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  gap: 12px 0;
  flex-direction: column;
`;
