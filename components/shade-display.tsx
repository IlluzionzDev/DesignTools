'use client';

import { useScaleContrastChecker } from '@lib/contrast-checker';
import { Box, Flex } from '@lib/design-system';
import styles from './shade-display.module.scss';

export type ShadeDisplayTypes = {
    mainShade: string;
};

export const ShadeDisplay: React.FC<ShadeDisplayTypes> = ({ mainShade }) => {
    const { data, error, isLoading } = useScaleContrastChecker(mainShade);

    return isLoading ? (
        <Box>Loading...</Box>
    ) : (
        <Flex
            direction="row"
            className={styles.shadeDisplay}
            justifyContent="space-between"
        >
            {data.map((shade, index) => {
                return (
                    <Flex
                        key={index}
                        direction="column"
                        alignItems="center"
                        inlineStyle={{
                            textAlign: 'center',
                        }}
                        gap={2}
                    >
                        <Flex
                            inlineStyle={{
                                background: shade.colour,
                            }}
                            className={styles.colorDisplay}
                            grow="1"
                            paddingTop={4}
                            paddingBottom={4}
                            paddingLeft={2}
                            paddingRight={2}
                            radius="lg"
                            alignItems="center"
                            color={index >= 4 ? 'white' : 'black'}
                            direction="column"
                            onClick={(e) => {
                                navigator.clipboard.writeText(shade.colour);
                            }}
                        >
                            <Flex>{shade.colour}</Flex>
                        </Flex>
                        <Flex>Ratio: {shade.contrast?.ratio}</Flex>
                        <Flex
                            color={
                                shade.contrast?.AA == 'pass' &&
                                shade.contrast?.AALarge == 'pass'
                                    ? 'color-text-success'
                                    : 'color-text-error'
                            }
                        >
                            AA: {shade.contrast?.AA}
                        </Flex>
                    </Flex>
                );
            })}
        </Flex>
    );
};
