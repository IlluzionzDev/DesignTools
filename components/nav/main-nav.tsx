import {
    Heading,
    Label,
    Nav,
    TextButton,
} from '@illuzionz-studios/design-system';
import Link from 'next/link';
import styles from './main-nav.module.scss';

export const MainNav: React.FC = () => {
    return (
        <Nav
            colorScheme="primary"
            logo={
                <Link href="/" passHref>
                    <Heading variant="heading-3" element="h5">
                        Design Tools
                    </Heading>
                </Link>
            }
            links={[
                <Link key={1} href="/shade-generator" passHref>
                    <Label variant="button" className={styles.link}>
                        Shade Generator
                    </Label>
                </Link>,
            ]}
        />
    );
};
