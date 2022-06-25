import { useRef, useContext, useCallback, useEffect } from 'react';
import { PropsContext } from '../templates/ApiUpdate';

// interface ScrollContext {
//   setPage: (prev: any) => number;
//   loading: boolean;
//   setIsScrolling: (type: boolean) => boolean;
//   isEnd: boolean;
// }

const useInfinityScroll = () => {
  const { setPage, loading, setIsScrolling, isEnd } =
    useContext<any>(PropsContext);

  const observer = useRef<IntersectionObserver | null>();

  const handleObserver = useCallback(
    (node: HTMLElement) => {
      if (loading || isEnd) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsScrolling(true);

            setPage((prev: number) => prev + 1);
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [setPage, setIsScrolling, isEnd]
  );

  return [handleObserver];
};

export default useInfinityScroll;
