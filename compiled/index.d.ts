export declare class PaperSizes implements PaperSizesInterface.PaperSizesClassMethods {
    private convert;
    private info;
    constructor(isoCode: string | null, options: PaperSizesInterface.Options);
    private converter;
    widthToInches(): number;
    widthToPoints(): number;
    widthToMillimeters(): number;
    widthToPixels(): number;
    heightToInches(): number;
    heightToPoints(): number;
    heightToMillimeters(): number;
    heightToPixels(): number;
}
declare const _default: (isoCode: string | null, options?: PaperSizesInterface.Options) => PaperSizesInterface.PaperSizesClassMethods;
export default _default;
