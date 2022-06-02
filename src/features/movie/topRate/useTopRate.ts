import { useQuery } from 'react-query';
import { topRatedApi } from '../../../apis/movieApi';
import {AxiosError, AxiosResponse} from "axios";
import {MovieDetail, ListResponse} from "../../../types";

const useTopRate = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('topRate', topRatedApi);
}

export default useTopRate;