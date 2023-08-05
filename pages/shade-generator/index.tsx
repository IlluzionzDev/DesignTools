import { ShadeGenerator } from '@components/shade-generator';
import {
    Body,
    Box,
    Container,
    Flex,
    Heading,
    Nav,
    TextButton,
} from '@lib/design-system';
import styles from './index.module.scss';
import Link from 'next/link';
import { MainNav } from '@components/nav/main-nav';

export default function Page() {
    return (
        <>
            <MainNav />
            <Container>
                <Flex paddingTop={10} gap={11} direction="column">
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                    >
                        <Heading
                            variant="display"
                            element="h1"
                            className={styles.displayHeading}
                        >
                            Generate Shades in Seconds
                        </Heading>
                        <Body variant="lg" color="color-text-primary">
                            Pick your color and click &quot;Generate
                            Shades&quot; to generate your colors
                        </Body>
                    </Flex>
                    <ShadeGenerator />
                </Flex>
            </Container>
        </>
    );
}
