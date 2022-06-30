import { useQuery } from 'react-query';
import { UserService } from '../services';

type Options = {
  refetchInterval?: number;
};

const queryUserService = {
  me: UserService.me,
};

export const useRequest = (
  key: keyof typeof queryUserService,
  options?: Options
) => {
  const { data, isLoading, isError } = useQuery(key, queryUserService[key], {
    ...options,
  });

  return { data, isLoading, isError };
};
