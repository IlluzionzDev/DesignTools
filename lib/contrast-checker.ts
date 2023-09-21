/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from 'swr';
import createColourScale from './colour-scale';

export type ContrastResponse = {
    ratio: number;
    AA: string;
    AALarge: string;
    AAA: string;
    AAALarge: string;
};

// Contains information about the shade and contrast ratios
export type ShadeData = {
    colour: string;
    contrast?: ContrastResponse;
};

export function useContrastChecker(background: string, foreground: string) {
    const { data, error, isLoading } = useSWR(
        `https://webaim.org/resources/contrastchecker/?fcolor=${foreground}&bcolor=${background}&api`,
        (url) => fetch(url).then((r) => r.json())
    );

    return {
        data,
        error,
        isLoading,
    };
}

export type ContrastCheckerResponse = {
    data: ShadeData[];
    error: boolean;
    isLoading: boolean;
};

export function useScaleContrastChecker(
    mainShade: string
): ContrastCheckerResponse {
    // Generate all shades
    const colourScale: string[] = createColourScale(mainShade);

    const tempShades: ShadeData[] = [];
    var loading = false;
    var hasError = true;

    colourScale.forEach((shade, index) => {
        // const { data, error, isLoading } = useContrastChecker(
        //     shade.substring(1, 6),
        //     index >= 4 ? 'FFFFFF' : '000000'
        // );

        // loading = isLoading;
        // hasError = error;
        tempShades.push({
            colour: shade,
            contrast: undefined,
        });
    });

    return {
        data: tempShades,
        error: hasError,
        isLoading: loading,
    };
}
