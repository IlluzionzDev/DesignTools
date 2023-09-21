'use client';

import { useScaleContrastChecker } from '@lib/contrast-checker';
import { Box, Flex } from '@illuzionz-studios/design-system';
import styles from './shade-display.module.scss';

export type ShadeDisplayTypes = {
    mainShade: string;
    copyHash: boolean;
};

export const ShadeDisplay: React.FC<ShadeDisplayTypes> = ({
    mainShade,
    copyHash,
}) => {
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
                        textAlign="center"
                        gap={2}
                    >
                        <Flex
                            className={styles.colorDisplay}
                            background={shade.colour}
                            grow="1"
                            paddingTop={4}
                            paddingBottom={4}
                            paddingLeft={2}
                            paddingRight={2}
                            radius="lg"
                            alignItems="center"
                            color={index >= 4 ? 'white' : 'black'}
                            direction="column"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    copyHash
                                        ? shade.colour
                                        : shade.colour.substring(1)
                                );
                            }}
                        >
                            <Flex>{shade.colour}</Flex>
                        </Flex>
                        {/* <Flex>Ratio: {shade.contrast?.ratio}</Flex>
                        <Flex
                            color={
                                shade.contrast?.AA == 'pass' &&
                                shade.contrast?.AALarge == 'pass'
                                    ? 'color-text-success'
                                    : 'color-text-error'
                            }
                        >
                            AA: {shade.contrast?.AA}
                        </Flex> */}
                    </Flex>
                );
            })}
        </Flex>
    );
};
