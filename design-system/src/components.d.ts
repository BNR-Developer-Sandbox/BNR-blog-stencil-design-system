/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DsForm {
    }
    interface DsHero {
    }
    interface DsShell {
    }
}
declare global {
    interface HTMLDsFormElement extends Components.DsForm, HTMLStencilElement {
    }
    var HTMLDsFormElement: {
        prototype: HTMLDsFormElement;
        new (): HTMLDsFormElement;
    };
    interface HTMLDsHeroElement extends Components.DsHero, HTMLStencilElement {
    }
    var HTMLDsHeroElement: {
        prototype: HTMLDsHeroElement;
        new (): HTMLDsHeroElement;
    };
    interface HTMLDsShellElement extends Components.DsShell, HTMLStencilElement {
    }
    var HTMLDsShellElement: {
        prototype: HTMLDsShellElement;
        new (): HTMLDsShellElement;
    };
    interface HTMLElementTagNameMap {
        "ds-form": HTMLDsFormElement;
        "ds-hero": HTMLDsHeroElement;
        "ds-shell": HTMLDsShellElement;
    }
}
declare namespace LocalJSX {
    interface DsForm {
    }
    interface DsHero {
    }
    interface DsShell {
    }
    interface IntrinsicElements {
        "ds-form": DsForm;
        "ds-hero": DsHero;
        "ds-shell": DsShell;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ds-form": LocalJSX.DsForm & JSXBase.HTMLAttributes<HTMLDsFormElement>;
            "ds-hero": LocalJSX.DsHero & JSXBase.HTMLAttributes<HTMLDsHeroElement>;
            "ds-shell": LocalJSX.DsShell & JSXBase.HTMLAttributes<HTMLDsShellElement>;
        }
    }
}
