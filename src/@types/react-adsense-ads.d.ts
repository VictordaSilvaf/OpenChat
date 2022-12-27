declare const Adsense: React.FunctionComponent<AdsenseProps>;
declare function showAd(): void;
declare module 'react-adsense-ads';

interface AdsenseProps {
    client: string;
    slot: string;
    className: string;
    style: React.CSSProperties;
    layout: string;
    format: string;
    responsive: string;
}