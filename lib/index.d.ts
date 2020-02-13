import { Color } from 'ora';
import { SpinnerName } from 'cli-spinners';
interface HookConfig {
    name: string;
    buildStart(): void;
    transform(code: string, id: string): null;
    renderStart(): void;
    writeBundle(): void;
}
interface Options {
    spinner?: SpinnerName;
    color?: Color;
    indent?: number;
    width?: number;
}
export default function loading(options?: Options): HookConfig;
export {};
