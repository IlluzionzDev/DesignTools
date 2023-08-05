'use client';

import {
    Button,
    CheckboxInput,
    Flex,
    Label,
    TextField,
} from '@lib/design-system';
import { useState } from 'react';
import { ShadeDisplay } from './shade-display';
import styles from './shade-generator.module.scss';
import { HexColorPicker } from 'react-colorful';

function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

export const ShadeGenerator: React.FC = () => {
    const [mainShade, setMainShade] = useState('#6c6bd1');
    const [mainShadeUse, setMainShadeUse] = useState('#6c6bd1');
    const [copyUseHash, setCopyUseHash] = useState(true);

    const rgb = hexToRgb(mainShade);

    const onSetShades = () => {
        if (mainShade.match('#{1}[0-9A-Fa-f]{6}')) {
            setMainShadeUse(mainShade);
        }
    };

    return (
        <Flex direction="column" gap={6}>
            <HexColorPicker
                className={styles.colorPicker}
                color={mainShade}
                onChange={(color) => {
                    setMainShade(color);
                }}
                style={{
                    boxShadow: rgb
                        ? '10px -15px 30px -7px rgba(' +
                          rgb['r'] +
                          ', ' +
                          rgb['g'] +
                          ', ' +
                          rgb['b'] +
                          ', 0.4)'
                        : undefined,
                    borderRadius: '12px',
                }}
            />

            <TextField
                id="mainShade"
                name="mainShade"
                value={mainShade}
                maxLength={7}
                onChange={(e) => setMainShade(e.currentTarget.value)}
            />
            <Flex direction="row" gap={2} alignItems="center">
                <CheckboxInput
                    id="use-hash"
                    name="use-hash"
                    checked={copyUseHash}
                    onChange={(e) => setCopyUseHash((prev) => !prev)}
                />
                <Label variant="md">
                    Include &apos;#&apos; when copying hex value
                </Label>
            </Flex>

            <Flex justifyContent="center">
                <Button
                    variant="primary"
                    onClick={onSetShades}
                    size="lg"
                    fullWidth
                >
                    Generate Shades
                </Button>
            </Flex>

            <ShadeDisplay mainShade={mainShadeUse} copyHash={copyUseHash} />
        </Flex>
    );
};
