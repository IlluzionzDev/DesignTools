import { MainNav } from '@components/nav/main-nav';
import styles from './page.module.css';
import {
    Body,
    Box,
    Container,
    Flex,
    Heading,
    Label,
    Nav,
    TextButton,
} from '@lib/design-system';
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

                <Flex
                    background="color-elevation-primary-2"
                    radius="lg"
                    padding={4}
                    marginTop={12}
                    direction="row"
                >
                    <Flex padding={8} gap={2} direction="column">
                        <Heading element="h5" variant="heading-2">
                            Shade Generator
                        </Heading>
                        <Label variant="lg">
                            Generate shades to use in a color scheme, verified
                            by WCAG AA Standard.
                        </Label>
                    </Flex>
                    <Flex></Flex>
                </Flex>
            </Container>
        </>
    );
}
