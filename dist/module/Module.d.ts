import { Message } from 'discord.js';
declare type CommandOptions = {
    name: string;
    level: number;
    group: string;
    aliases?: string[];
    owner: boolean;
};
export default abstract class CommandModule {
    private moduleOptions;
    constructor(options: CommandOptions);
    getOptions(): Readonly<CommandOptions> | null;
    abstract run(msg: Message, args?: unknown[]): void;
}
export {};
