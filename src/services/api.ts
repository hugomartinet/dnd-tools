import axios, { type AxiosRequestConfig } from 'axios'
import { QueryClient, useMutation, useQuery, type UseMutationOptions, type UseQueryOptions } from 'react-query'

import { API_URL } from '../config'

const client = axios.create({ baseURL: API_URL })
export const queryClient = new QueryClient()

type RequestConfig = AxiosRequestConfig | string

const getAxiosConfig = (config: RequestConfig) => (typeof config === 'string' ? { url: config } : config)

const getQueryKey = (axiosConfig: AxiosRequestConfig) => {
  const queryKey = [axiosConfig.url]
  if (axiosConfig.params !== undefined) queryKey.push(axiosConfig.params)
  return queryKey
}

export const useAPIQuery = <TData = void>(config: RequestConfig, options?: UseQueryOptions<TData, Error>) => {
  const axiosConfig = getAxiosConfig(config)
  const queryKey = options?.queryKey ?? getQueryKey(axiosConfig)
  const queryFn = () => client.request<TData>(axiosConfig).then(res => res.data)
  return useQuery<TData, Error>(queryKey, queryFn, options)
}

interface UseAPIMutationOptions<TData, TError, TVariables> extends UseMutationOptions<TData, TError, TVariables> {
  invalidateQueries?: string[]
}
export const useAPIMutation = <TData = void, TVariables = void>(
  config: RequestConfig,
  options?: UseAPIMutationOptions<TData, Error, TVariables>
) => {
  const axiosConfig = getAxiosConfig(config)
  const mutationFn = (variables: TVariables) =>
    client.request<TData>({ ...axiosConfig, data: variables }).then(res => res.data)
  return useMutation<TData, Error, TVariables>(mutationFn, {
    ...options,
    onSuccess: async (...args) => {
      if (options?.invalidateQueries !== undefined) await queryClient.invalidateQueries(options.invalidateQueries)
      if (options?.onSuccess !== undefined) await options.onSuccess(...args)
    },
  })
}
