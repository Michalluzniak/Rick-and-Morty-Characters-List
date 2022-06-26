import { useRef, useContext, useCallback } from 'react';
import { PropsContext } from '../templates/ApiUpdate';
import { IsContextTypes } from '../helpers/interfaces';

const useInfinityScroll = () => {
  const { setPage, loading, isEnd } = useContext<IsContextTypes>(PropsContext);

  const observer = useRef<IntersectionObserver | null>();

  const handleObserver = useCallback(
    (node: HTMLElement) => {
      if (loading || isEnd) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && setPage) {
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
