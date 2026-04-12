'use client';

import { createContext, useContext, useState, ReactNode, useSyncExternalStore } from 'react';
import { translations } from '@/data/translations';

type Language = 'RU' | 'EN';
type TranslationDictionary = typeof translations.EN;

type Join<K, P> = K extends string
    ? P extends string
        ? `${K}.${P}`
        : never
    : never;

type Paths<T> = T extends readonly unknown[]
    ? never
    : T extends object
        ? {
            [K in Extract<keyof T, string>]:
            T[K] extends readonly unknown[]
            ? K
            : T[K] extends object
                ? K | Join<K, Paths<T[K]>>
                : K
        }[Extract<keyof T, string>]
        : never;

type PathValue<T, P extends string> = P extends `${infer K}.${infer Rest}`
    ? K extends keyof T
        ? PathValue<T[K], Rest>
        : never
    : P extends keyof T
        ? T[P]
        : never;

export type TranslationPath = Paths<TranslationDictionary>;

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: <K extends TranslationPath>(key: K) => PathValue<TranslationDictionary, K>;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const emptySubscribe = () => () => { };

function getInitialLanguage(): Language {
    if (typeof window === 'undefined') {
        return 'EN';
    }

    const savedLang = localStorage.getItem('preferred_lang');
    if (savedLang === 'RU' || savedLang === 'EN') {
        return savedLang;
    }

    return navigator.language.startsWith('ru') ? 'RU' : 'EN';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Language>(getInitialLanguage);
    const isHydrated = useSyncExternalStore(emptySubscribe, () => true, () => false);

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem('preferred_lang', newLang);
    };

    const t = <K extends TranslationPath>(path: K): PathValue<TranslationDictionary, K> => {
        let result: unknown = translations[lang];
        const keys = path.split('.');

        for (const key of keys) {
            if (typeof result === 'object' && result !== null && key in result) {
                result = (result as Record<string, unknown>)[key];
                continue;
            }

            throw new Error(`Missing translation for path: ${path}`);
        }

        return result as PathValue<TranslationDictionary, K>;
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
