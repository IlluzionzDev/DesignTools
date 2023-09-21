import { MainNav } from '@components/nav/main-nav';
import styles from './index.module.scss';
import {
    Body,
    Button,
    Container,
    Flex,
    Heading,
    Label,
} from '@illuzionz-studios/design-system';
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
                    <Flex gap={2} direction="column">
                        <Heading variant="heading-1" element="h2">
                            Current Tools
                        </Heading>
                        <Label variant="xl" color="neutral800">
                            Explore currently available design tools
                        </Label>
                    </Flex>

                    <Flex direction="column" marginTop={6}>
                        <Link href="/shade-generator" passHref>
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
                                        Use this tool to quickly generate
                                        different colour palletes to use in your
                                        designs
                                    </Body>
                                </Flex>
                            </Flex>
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </>
    );
}
