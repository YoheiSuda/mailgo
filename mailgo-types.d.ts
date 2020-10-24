// Type definitions for mailgo
// Project: mailgo
// Definitions by: Matteo Manzinello <https://matteomanzinello.com>

declare module "mailgo" {
  export type MailgoConfig = {
    mailto?: boolean; // enable mailgo for mailto, default is obviously true
    tel?: boolean; // enable mailgo for tel, default is true
    sms?: boolean; // enable mailgo for sms, at the moment default is false
    desktop?: boolean; // WIP // enable mailgo for desktop, default true
    mobile?: boolean; // WIP // enable mailgo for mobile, default true
    initEvent?: string; // the event which is attached the mailgo init, default DOMContentLoaded
    listenerOptions?: ListenerOptions | boolean; // the options of the listener if initEvent is specified
    dark?: boolean; // dark mode for mailgo, default false
    lang?: string; // the (forced) lang, default is english
    validateEmail?: boolean; // validate an email, default is true
    validateTel?: boolean; // validate a phone number, default is true
    showFooter?: boolean; // show the footer with link to mailgo.dev, default true, please!
    loadCSS?: boolean; // loadCSS for mailgo, default true
    actions?: MailgoActions; // enable/disable actions, default all trues
  };

  export type MailgoModalType = "mailgo" | "mailgo-tel";

  export type MailgoAction =
    | "gmail"
    | "outlook"
    | "yahoo"
    | "telegram"
    | "whatsapp"
    | "skype"
    | "copy"
    | "default";

  type MailgoActions = {
    [action in MailgoAction]: boolean;
  };

  export type MailgoTranslation = {
    open_in_?: string;
    cc_?: string;
    bcc_?: string;
    subject_?: string;
    body_?: string;
    gmail?: string;
    outlook?: string;
    yahoo?: string;
    telegram?: string;
    whatsapp?: string;
    skype?: string;
    call?: string;
    open?: string;
    _default?: string;
    _as_default?: string;
    copy?: string;
    copied?: string;
    open_in_template?: string;
  };

  // language codes array that follow ISO 639-1 Code
  export type MailgoLanguages = string[];

  export type MailgoTranslations = {
    // language codes array that follow ISO 639-1 Code
    [language: string]: MailgoTranslation;
  };

  export type MailgoI18n = {
    languages: string[];
    translations: MailgoTranslations;
  };

  export type ListenerOptions = {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
  };

  export function getMailgoTypeByElement(
    element: HTMLElement
  ): MailgoModalType | null;

  export function mailgoCheckRender(event: Event): boolean;

  export function mailgoPreRender(
    type: string,
    mailgoElementOrUrl: HTMLLinkElement | string
  ): boolean;

  export function mailgoDirectRender(directUrl: string): boolean;

  export function mailgoRender(type: string): boolean;

  export default function mailgo(mailgoConfig?: MailgoConfig): boolean;
}