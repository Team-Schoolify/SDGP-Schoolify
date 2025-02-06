import {tv} from "../utils/tv";

/**
 * Modal **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {base} = drawer({...})
 *
 * <div>
 *    <button>Open Drawer</button>
 *    <div className={base()}>
 *       Drawer Content
 *    </div>
 * </div>
 * ```
 */

const drawer = tv({
  slots: {
    base: [
      "fixed inset-y-0 right-0 w-96 max-w-lg h-full", // ✅ Full height & proper width
      "bg-background text-foreground shadow-lg",
      "transform translate-x-full transition-transform duration-300 ease-in-out", // ✅ Smooth open/close animation
      "data-[open=true]:translate-x-0", // ✅ Opens smoothly
    ],
    backdrop: [
      "fixed inset-0 bg-black/50 backdrop-blur-sm", // ✅ Adds dim background effect
      "opacity-0 transition-opacity duration-300 ease-in-out",
      "data-[open=true]:opacity-100", // ✅ Appears when drawer is open
    ],
    content: [
      "p-6 space-y-4 overflow-y-auto", // ✅ Proper padding & spacing
    ],
    header: [
      "text-lg font-semibold border-b pb-3", // ✅ Makes header bold
    ],
    body: ["text-sm leading-relaxed"], // ✅ Improves text readability
    footer: ["flex items-center justify-end gap-2 border-t pt-3"],
  },

  variants: {
    size: {
      // xs: {
      //   base: "max-w-xs max-h-[20rem]",
      // },
      // sm: {
      //   base: "max-w-sm max-h-[24rem]",
      // },
      // md: {
      //   base: "max-w-md max-h-[28rem]",
      // },

      lg: {
        base: "max-w-lg max-h-[32rem]",
      },

      // xl: {
      //   base: "max-w-xl max-h-[36rem]",
      // },
      // "2xl": {
      //   base: "max-w-2xl max-h-[42rem]",
      // },
      // "3xl": {
      //   base: "max-w-3xl max-h-[48rem]",
      // },
      // "4xl": {
      //   base: "max-w-4xl max-h-[56rem]",
      // },
      // "5xl": {
      //   base: "max-w-5xl max-h-[64rem]",
      // },
      // full: {
      //   base: "max-w-full max-h-full h-[100dvh] !rounded-none",
      // },
    },
    placement: {
      // top: {
      //   base: "inset-x-0 top-0 max-w-[none] rounded-t-none",
      // },

      right: {
        base: "inset-y-0 right-0 max-h-[none] rounded-r-none",
      },

      // bottom: {
      //   base: "inset-x-0 bottom-0 max-w-[none] rounded-b-none",
      // },
      // left: {
      //   base: "inset-y-0 left-0 max-h-[none] rounded-l-none",
      // },
    },
  },
});

export {drawer};