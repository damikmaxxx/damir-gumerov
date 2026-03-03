'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/data/translations';

type Language = 'RU' | 'EN';

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Language>('EN');
    const [isHydrated, setIsHydrated] = useState(false);
    useEffect(() => {
        const savedLang = localStorage.getItem('preferred_lang') as Language;
        if (savedLang) {
            setLangState(savedLang);
        } else {

            const browserLang = navigator.language.startsWith('ru') ? 'RU' : 'EN';
            setLangState(browserLang);
        }
        setIsHydrated(true);
    }, []);

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem('preferred_lang', newLang);
    };

    const t = (path: string): any => {

        const currentDict = (translations as any)[lang];
        if (!currentDict) return path;
        const keys = path.split('.');
        let result = currentDict;
        for (const key of keys) {
            if (result && result[key] !== undefined) {
                result = result[key];
            } else {
                return path;
            }
        }
        return result;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            <div style={{ visibility: isHydrated ? 'visible' : 'hidden' }}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function LanguageWrapper({ children }: { children: ReactNode }) {
    const { lang } = useLang();
    return (
        <div data-lang={lang} style={{ display: 'contents' }}>
            {children}
        </div>
    );
}

export const useLang = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLang must be used within LanguageProvider");
    return context;
};