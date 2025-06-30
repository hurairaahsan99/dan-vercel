'use client';
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface LanguageContextType {
  language: string;
  toggleLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlLanguage = pathname?.split('/')[1];
      const savedLanguage = localStorage.getItem('language');

      if (urlLanguage === 'en' || urlLanguage === 'ar') {
        setLanguage(urlLanguage);
        localStorage.setItem('language', urlLanguage);
      } else if (savedLanguage) {
        setLanguage(savedLanguage);
        router.replace(`/ar`);
      } else {
        setLanguage('ar');
        localStorage.setItem('language', 'ar');
        router.replace('/ar');
      }

      setIsMounted(true);
    }
  }, [pathname, router]);

  const toggleLanguage = (lang: string) => {
    if (!pathname) return;
    const queryString =
      typeof window !== 'undefined' ? window.location.search : '';
    const currentPathWithoutLang = pathname.split('/').slice(2).join('/');
    const newPath = `/${lang}/${currentPathWithoutLang}${queryString}`;

    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }

    router.push(newPath);
  };

  if (!isMounted || language === null) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
