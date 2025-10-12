import { Platform } from '../interfaces/Platform'; // ← You'll create this

const usePlatforms = () => {
  const platforms: Platform[] = [
    { slug: 'pc', name: 'PC' },
    { slug: 'web', name: 'Web' },
  ];

  return { platforms };
};

export default usePlatforms;
