import { useRef, useContext, useCallback } from 'react';
import { PropsContext } from '../templates/ApiUpdate';

interface ScrollTypes {
  setPage: (prev: React.SetStateAction<number>) => number;
  loading: boolean;
  isEnd: boolean;
}

const useInfinityScroll = () => {
  const { setPage, loading, isEnd } = useContext<ScrollTypes>(PropsContext);

  const observer = useRef<IntersectionObserver | null>();

  const handleObserver = useCallback(
    (node: HTMLElement) => {
      if (loading || isEnd) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage((prev: number) => prev + 1);
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [setPage, isEnd, loading]
  );

  return [handleObserver];
};

export default useInfinityScroll;
