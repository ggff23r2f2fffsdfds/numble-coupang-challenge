import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { Button } from '../../src/components/Common';

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
          <input {...register('email')} placeholder={'아이디(이메일)'} />
          <input {...register('password')} placeholder={'비밀번호'} />
          <Button type="submit" color="blue">
            로그인
          </Button>
          <Link href="/auth/signup">
            <Button color="white">회원가입</Button>
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
  a {
    display: block;
    width: 100%;
  }
`;
