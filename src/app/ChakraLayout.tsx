"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ColorModeScript, ThemeConfig, extendTheme } from "@chakra-ui/react";

import dynamic from "next/dynamic";
const ChakraProvider = dynamic(() =>
  import("@chakra-ui/provider").then((mod) => mod.ChakraProvider)
);

// const BMJUA = localFont({
//   src: [
//     {
//       path: "../../app/font/BMJUA_ttf.ttf",
//       weight: "normal",
//       style: "normal",
//     },
//   ],
// });

export function ChakraLayout({ children }: { children: React.ReactNode }) {
  //   const [mount, setMount] = useState(false);

  //   useLayoutEffect(() => {
  //     setMount(true);
  //   }, []);

  //   if (!mount) {
  //     return <></>;
  //   }

  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <CacheProvider>{children}</CacheProvider>
    </ChakraProvider>
  );
}
