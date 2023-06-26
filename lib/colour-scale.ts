import Values from 'values.js';

// Take a base colour and define a 100-900 colour scale with this colour as 500
export default function createColourScale(baseColour: string): string[] {
    const defaultColour = new Values(baseColour);

    const tints: Values[] = defaultColour.tints(20);
    const shades: Values[] = defaultColour.shades(20);

    return [
        tints[3].hexString(),
        tints[2].hexString(),
        tints[1].hexString(),
        tints[0].hexString(),
        baseColour,
        shades[0].hexString(),
        shades[1].hexString(),
        shades[2].hexString(),
        shades[3].hexString(),
    ];
}
