"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { redirect, useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import { useUser } from "../../utils/hooks/useUser";

export default function QueryLayout({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // onError: queryErrorHandler,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
          mutations: {
            // onError: queryErrorHandler,
            retry: false,
          },
        },
      })
  );

  // const jwt = localStorage.getItem("jwt");

  // const { data } = useUser();

  // useEffect(() => {}, [jwt]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* {product && <ReactQueryDevtools initialIsOpen={false} />} */}
    </QueryClientProvider>
  );
}
