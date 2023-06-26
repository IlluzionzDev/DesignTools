// Import SCSS utils
import '@illuzionz-studios/design-system/styles';
import '@styles/globals.scss';

import { ThemeProvider } from '@lib/design-system';

// Font stlying
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

export const metadata = {
    title: 'Design Tools',
    description: 'An app that provides a set of handy design tools',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // useEffect(() => {
    //     // Set var(--vh) to actual view height of viewport
    //     const setHeight = () => {
    //         document.documentElement.style.setProperty(
    //             '--vh',
    //             window.innerHeight + 'px'
    //         );
    //     };

    //     // Update viewport on resize
    //     window.addEventListener('resize', setHeight);
    //     setHeight();
    // }, []);

    return (
        <html lang="en">
            <ThemeProvider>
                <body>{children}</body>
            </ThemeProvider>
        </html>
    );
}
