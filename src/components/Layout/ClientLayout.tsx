'use client';

import { usePathname } from 'next/navigation';
import { useIsMobile } from '@/hooks/useIsMobile';
import { LanguageProvider, LanguageWrapper } from '@/context/LanguageContext';
import { AnimationProvider, useAnimationContext } from '@/context/AnimationContext';
import Background from '@/components/Background/Background';
import HeroDecor from '@/components/Hero/HeroDecor';
import NavIcons from '@/components/Navigation/CircularNav';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const isMobile = useIsMobile();

    return (
        <LanguageProvider>
            <LanguageWrapper>
                <AnimationProvider>

                    {!isMobile && <HeroDecor />}

                    <Background />

                    <NavIconsWrapper isMobile={isMobile} />

                    <main className="main-container">{children}</main>

                    <Footer />

                    {isMobile && <Navigation />}

                </AnimationProvider>
            </LanguageWrapper>
        </LanguageProvider>
    );
}

function NavIconsWrapper({ isMobile }: { isMobile: boolean | null }) {
    const pathname = usePathname();
    const { rotation } = useAnimationContext();
    const isHome = pathname === '/';

    if (isHome) return null;
    if (isMobile === null || isMobile) return null;

    return <NavIcons mode="sidebar" activePath={pathname} rotation={rotation} />;
}