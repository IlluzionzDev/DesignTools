import { MainNav } from '@components/nav/main-nav';
import styles from './index.module.scss';
import { Body, Button, Container, Flex, Heading } from '@lib/design-system';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <MainNav />
            <Container>
                <Flex
                    alignItems="center"
                    paddingTop={12}
                    gap={8}
                    direction="column"
                >
                    <Heading element="h1" variant="hero">
                        Next-Gen Design Tools
                    </Heading>
                    <Body variant="xl" color="color-text-dark">
                        A library of unique and helpful design tools to fast
                        track your designs
                    </Body>
                </Flex>

                <Flex marginTop={12} direction="column">
                    <Heading variant="heading-2" element="h2">
                        Current Tools
                    </Heading>
                    <Flex direction="column" marginTop={6}>
                        <Flex
                            borderColor="neutral100"
                            radius="lg"
                            padding={8}
                            direction="row"
                            justifyContent="space-between"
                            className={styles.tool__card}
                        >
                            <Flex gap={2} direction="column">
                                <Heading element="h5" variant="heading-3">
                                    Shade Generator
                                </Heading>
                                <Body variant="md" color="neutral600">
                                    Generate shades to use in a color scheme,
                                    verified by WCAG AA Standard.
                                </Body>
                            </Flex>
                            <Flex justifyContent="center" alignItems="center">
                                <Link href="/shade-generator" passHref>
                                    <Button variant="primary">
                                        Visit Tool
                                    </Button>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </>
    );
}
