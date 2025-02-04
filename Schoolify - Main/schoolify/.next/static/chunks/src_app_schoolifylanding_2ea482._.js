(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_schoolifylanding_2ea482._.js", {

"[project]/src/app/schoolifylanding/components/NavbarComponent.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AcmeLogo": (()=>AcmeLogo),
    "default": (()=>NavbarComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/use-disclosure/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$KYHJYPPL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_default__as__Navbar$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/navbar/dist/chunk-KYHJYPPL.mjs [app-client] (ecmascript) <export navbar_default as Navbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$XVPKP73N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_brand_default__as__NavbarBrand$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/navbar/dist/chunk-XVPKP73N.mjs [app-client] (ecmascript) <export navbar_brand_default as NavbarBrand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$link$2f$dist$2f$chunk$2d$FGDGYNYV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/link/dist/chunk-FGDGYNYV.mjs [app-client] (ecmascript) <export link_default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$PSG7VTZC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_content_default__as__NavbarContent$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/navbar/dist/chunk-PSG7VTZC.mjs [app-client] (ecmascript) <export navbar_content_default as NavbarContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$MG5LCNUN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_item_default__as__NavbarItem$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/navbar/dist/chunk-MG5LCNUN.mjs [app-client] (ecmascript) <export navbar_item_default as NavbarItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$KMN6V4NS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-KMN6V4NS.mjs [app-client] (ecmascript) <export modal_default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$RE5G2YMK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-RE5G2YMK.mjs [app-client] (ecmascript) <export modal_content_default as ModalContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-EPDLEVDR.mjs [app-client] (ecmascript) <export modal_body_default as ModalBody>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const AcmeLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        fill: "none",
        height: "36",
        viewBox: "0 0 32 32",
        width: "36",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            clipRule: "evenodd",
            d: "M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z",
            fill: "currentColor",
            fillRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
            lineNumber: 19,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
_c = AcmeLogo;
function NavbarComponent() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // Track active link
    // const [menuOpen, setMenuOpen] = useState(false); // Track mobile menu state
    const navLinks = [
        "Features",
        "About Us",
        "Team"
    ]; // Common sections
    const { isOpen, onOpen, onClose } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"])(); // For mobile modal menu
    const handleScroll = (id)=>{
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavbarComponent.useEffect": ()=>{
            const sections = navLinks.map({
                "NavbarComponent.useEffect.sections": (link)=>document.getElementById(link.toLowerCase().replace(" ", "-"))
            }["NavbarComponent.useEffect.sections"]);
            const observerOptions = {
                root: null,
                threshold: 0.2
            };
            const observer = new IntersectionObserver({
                "NavbarComponent.useEffect": (entries)=>{
                    entries.forEach({
                        "NavbarComponent.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setActive(navLinks.find({
                                    "NavbarComponent.useEffect": (link)=>link.toLowerCase().replace(" ", "-") === entry.target.id
                                }["NavbarComponent.useEffect"]));
                            } else {
                                const leavingSection = navLinks.find({
                                    "NavbarComponent.useEffect.leavingSection": (link)=>link.toLowerCase().replace(" ", "-") === entry.target.id
                                }["NavbarComponent.useEffect.leavingSection"]);
                                if (leavingSection === active) {
                                    setActive("");
                                }
                            }
                        }
                    }["NavbarComponent.useEffect"]);
                }
            }["NavbarComponent.useEffect"], observerOptions);
            // Observe each section
            sections.forEach({
                "NavbarComponent.useEffect": (section)=>{
                    if (section) observer.observe(section);
                }
            }["NavbarComponent.useEffect"]);
            return ({
                "NavbarComponent.useEffect": ()=>{
                    sections.forEach({
                        "NavbarComponent.useEffect": (section)=>{
                            if (section) observer.unobserve(section);
                        }
                    }["NavbarComponent.useEffect"]);
                }
            })["NavbarComponent.useEffect"];
        }
    }["NavbarComponent.useEffect"], [
        navLinks,
        active
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$KYHJYPPL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_default__as__Navbar$3e$__["Navbar"], {
                className: "bg-customBlue bg-opacity-60 text-customWhite shadow-md  rounded-2xl",
                isBordered: true,
                shouldHideOnScroll: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$XVPKP73N$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_brand_default__as__NavbarBrand$3e$__["NavbarBrand"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$link$2f$dist$2f$chunk$2d$FGDGYNYV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                            className: "font-bold text-customWhite",
                            href: "/schoolifylanding",
                            onClick: (e)=>{
                                e.preventDefault();
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AcmeLogo, {}, void 0, false, {
                                    fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                    lineNumber: 104,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Schoolify"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                            lineNumber: 93,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$PSG7VTZC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_content_default__as__NavbarContent$3e$__["NavbarContent"], {
                        justify: "center",
                        className: "hidden sm:flex",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$MG5LCNUN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_item_default__as__NavbarItem$3e$__["NavbarItem"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$link$2f$dist$2f$chunk$2d$FGDGYNYV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                    href: `#${link.toLowerCase().replace(" ", "-")}`,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setActive(link);
                                        handleScroll(link.toLowerCase().replace(" ", "-"));
                                    },
                                    className: `relative ${active === link ? "text-black font-bold" : "text-customWhite font-normal"}`,
                                    children: [
                                        link,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-6 bg-black rounded ${active === link ? "block" : "hidden"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                            lineNumber: 128,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                    lineNumber: 113,
                                    columnNumber: 29
                                }, this)
                            }, link, false, {
                                fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                lineNumber: 112,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$PSG7VTZC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_content_default__as__NavbarContent$3e$__["NavbarContent"], {
                        justify: "end",
                        className: "hidden sm:flex",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$MG5LCNUN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_item_default__as__NavbarItem$3e$__["NavbarItem"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                href: "/login",
                                color: "white",
                                variant: "flat",
                                className: "bg-customBlue",
                                children: "Log In"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                lineNumber: 141,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                            lineNumber: 140,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$navbar$2f$dist$2f$chunk$2d$PSG7VTZC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__navbar_content_default__as__NavbarContent$3e$__["NavbarContent"], {
                        className: "sm:hidden flex items-center justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                            isIconOnly: true,
                            variant: "light",
                            // onClick={() => setMenuOpen(!menuOpen)}
                            // aria-label="Toggle menu"
                            className: "ml-24",
                            onPress: onOpen,
                            "aria-label": "Open menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: "1.5",
                                stroke: "currentColor",
                                className: "w-6 h-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M4.5 12h15M4.5 6h15M4.5 18h15"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                    lineNumber: 168,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                lineNumber: 159,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                            lineNumber: 149,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                        lineNumber: 148,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$KMN6V4NS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
                backdrop: "blur",
                isOpen: isOpen,
                onClose: onClose,
                className: "absolute top-4 right-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" // Position the modal at the top-right
                ,
                placement: "top-right" // Enforce top-right placement
                ,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$RE5G2YMK$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                    children: (onClose)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "absolute top-2 right-2 text-gray-400 hover:text-black",
                                    onClick: onClose,
                                    "aria-label": "Close",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "2",
                                        stroke: "currentColor",
                                        className: "w-6 h-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                            lineNumber: 204,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                        lineNumber: 196,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                    lineNumber: 191,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-4",
                                        children: [
                                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$link$2f$dist$2f$chunk$2d$FGDGYNYV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                                    href: `#${link.toLowerCase().replace(" ", "-")}`,
                                                    onPress: ()=>{
                                                        setActive(link); // Update the active link
                                                        handleScroll(link.toLowerCase().replace(" ", "-")); // Scroll to the section
                                                        onClose(); // Close the modal
                                                    },
                                                    className: `relative ${active === link ? "text-black font-bold" : "text-gray-600 font-normal"}`,
                                                    children: [
                                                        link,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-6 bg-black rounded ${active === link ? "block" : "hidden"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                                            lineNumber: 230,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, link, true, {
                                                    fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                                    lineNumber: 215,
                                                    columnNumber: 41
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center gap-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                    as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                                    href: "/login",
                                                    color: "primary",
                                                    variant: "flat",
                                                    className: "bg-customBlue",
                                                    children: "Register"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                                    lineNumber: 238,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                                lineNumber: 237,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                        lineNumber: 213,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                                    lineNumber: 212,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                    lineNumber: 187,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/schoolifylanding/components/NavbarComponent.jsx",
                lineNumber: 180,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(NavbarComponent, "ZdTJUQZW0PyD3ruqUHmsyPvzkfU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"]
    ];
});
_c1 = NavbarComponent;
var _c, _c1;
__turbopack_refresh__.register(_c, "AcmeLogo");
__turbopack_refresh__.register(_c1, "NavbarComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/schoolifylanding/components/Hero.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Hero": (()=>Hero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lottie$2d$react$2f$build$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lottie-react/build/index.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$schoolifylanding$2f$lotti$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/app/schoolifylanding/lotti.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs [app-client] (ecmascript) <export button_default as Button>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
const Hero = (props)=>{
    _s();
    const bookRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleScroll = (id)=>{
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "mt-16 bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-15 rounded-3xl ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid items-center grid-cols-1 gap-12 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-semibold tracking-wider text-blue-600 uppercase",
                                children: "A website for learners"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schoolifylanding/components/Hero.jsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-4 text-2xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl pb-2 bg-gradient-to-r from-customBlue via-customGreen to-customLightBlue bg-clip-text text-transparent ",
                                children: "Connect & Continue your learnings."
                            }, void 0, false, {
                                fileName: "[project]/src/app/schoolifylanding/components/Hero.jsx",
                                lineNumber: 24,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-base text-black lg:mt-8 sm:text-xl",
                                children: "Do your studies with right mentor."
                            }, void 0, false, {
                                fileName: "[project]/src/app/schoolifylanding/components/Hero.jsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$G5TSEPD3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                className: "inline-flex items-center px-6 py-4 h-[50px] mt-6 font-semibold bg-gradient-to-tr from-blue-400 to-yellow-500 text-white shadow-lg",
                                radius: "full",
                                onClick: (e)=>{
                                    handleScroll("features");
                                },
                                children: [
                                    "Learn More",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6 ml-1 -mr-2",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "1.5",
                                            d: "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/schoolifylanding/components/Hero.jsx",
                                            lineNumber: 42,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/schoolifylanding/components/Hero.jsx",
                                        lineNumber: 35,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/schoolifylanding/components/Hero.jsx",
                                lineNumber: 28,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-gray-600",
                                children: [
                                    "Already joined us? ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        title: "",
                                        className: "text-black transition-all duration-200 hover:underline",
                                        children: "Log in"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/schoolifylanding/components/Hero.jsx",
                                        lineNumber: 51,
                                        columnNumber: 78
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/schoolifylanding/components/Hero.jsx",
                                lineNumber: 51,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/schoolifylanding/components/Hero.jsx",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lottie$2d$react$2f$build$2f$index$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            lottieRef: bookRef,
                            loop: true,
                            animationData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$schoolifylanding$2f$lotti$2e$json__$28$json$29$__["default"]
                        }, void 0, false, {
                            fileName: "[project]/src/app/schoolifylanding/components/Hero.jsx",
                            lineNumber: 58,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/schoolifylanding/components/Hero.jsx",
                        lineNumber: 56,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/schoolifylanding/components/Hero.jsx",
                lineNumber: 21,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/schoolifylanding/components/Hero.jsx",
            lineNumber: 20,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/schoolifylanding/components/Hero.jsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
_s(Hero, "woJz71p3MCvDkjmnOxkPJ3xPYX8=");
_c = Hero;
var _c;
__turbopack_refresh__.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/schoolifylanding/components/Features.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Features)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-46NETW2U.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$J333S7JQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-J333S7JQ.mjs [app-client] (ecmascript) <export card_header_default as CardHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$VKW4DPLJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/image/dist/chunk-VKW4DPLJ.mjs [app-client] (ecmascript) <export image_default as Image>");
;
var _s = __turbopack_refresh__.signature();
;
;
function Features() {
    _s();
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Features.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Features.useEffect": (entries)=>{
                    entries.forEach({
                        "Features.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add("fade-in");
                                entry.target.classList.remove("fade-out");
                            } else {
                                entry.target.classList.add("fade-out");
                                entry.target.classList.remove("fade-in");
                            }
                        }
                    }["Features.useEffect"]);
                }
            }["Features.useEffect"], {
                threshold: 0.2
            });
            cardRefs.current.forEach({
                "Features.useEffect": (card)=>{
                    if (card) {
                        observer.observe(card);
                    }
                }
            }["Features.useEffect"]);
            return ({
                "Features.useEffect": ()=>{
                    cardRefs.current.forEach({
                        "Features.useEffect": (card)=>{
                            if (card) {
                                observer.unobserve(card);
                            }
                        }
                    }["Features.useEffect"]);
                }
            })["Features.useEffect"];
        }
    }["Features.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "features",
        className: "mt-9 bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-15 rounded-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl text-black font-sans font-bold relative inline-block",
                    children: [
                        "Features",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute bottom-[-4px] left-0 w-1/2 h-[3px] bg-gradient-to-r from-blue-500 to-blue-200",
                            style: {
                                width: "30%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/schoolifylanding/components/Features.jsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/schoolifylanding/components/Features.jsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/schoolifylanding/components/Features.jsx",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[1200px] mx-auto gap-4 grid grid-cols-12 grid-rows-2 px-4",
                children: [
                    {
                        title: "Real-Time Notifications",
                        image: "/img/notification.png",
                        description: "Notify parents, students, and teachers about important event, deadlines, and updates."
                    },
                    {
                        title: "Attendance Tracking",
                        image: "/img/attendance.png",
                        description: "Digital submission, grading, and feedback on assignments."
                    },
                    {
                        title: "Homework and Assignments",
                        image: "/img/homework.png",
                        description: "Digital submission, grading, and feedback on assignments."
                    },
                    {
                        title: "Analytics and Insights",
                        image: "/img/analytics.png",
                        description: "Detailed reports for teachers and administrators on student performance."
                    },
                    {
                        title: "Your day your way",
                        image: "https://nextui.org/images/card-example-5.jpeg",
                        description: "Help save the planet"
                    },
                    {
                        title: "What to watch",
                        image: "https://nextui.org/images/card-example-4.jpeg",
                        description: "Help save the planet"
                    }
                ].map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                        ref: (el)=>cardRefs.current[index] = el,
                        className: "opacity-0 transition-opacity duration-500 col-span-12 sm:col-span-4 h-[300px] relative group cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$J333S7JQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                                className: "absolute z-10 top-1 flex-col !items-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-large text-white/80 uppercase font-bold",
                                    children: card.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schoolifylanding/components/Features.jsx",
                                    lineNumber: 66,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/schoolifylanding/components/Features.jsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$VKW4DPLJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
                                removeWrapper: true,
                                alt: "Card background",
                                className: "z-0 w-full h-full object-cover",
                                src: card.image
                            }, void 0, false, {
                                fileName: "[project]/src/app/schoolifylanding/components/Features.jsx",
                                lineNumber: 68,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-lg font-semibold text-center ml-3 mr-3",
                                    children: card.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/schoolifylanding/components/Features.jsx",
                                    lineNumber: 76,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/schoolifylanding/components/Features.jsx",
                                lineNumber: 75,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/schoolifylanding/components/Features.jsx",
                        lineNumber: 60,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/schoolifylanding/components/Features.jsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/schoolifylanding/components/Features.jsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
_s(Features, "nyqydayDKU2pC+rTCyb4pjAG0+4=");
_c = Features;
var _c;
__turbopack_refresh__.register(_c, "Features");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/schoolifylanding/components/Aboutus.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Aboutus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function Aboutus() {
    const features = [
        "Customizable Dashboards",
        "Real-Time Notifications",
        "Comprehensive Analytics",
        "User-Friendly Design",
        "Multi-Platform Accessibility",
        "Integrated Learning Tools",
        "Secure & Reliable",
        "Dedicated Support"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "about-us",
        className: "mt-9 bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-15 rounded-3xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid items-center grid-cols-1 gap-12 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "w-full rounded-3xl",
                            src: "/img/aboutus.png",
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
                            lineNumber: 21,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
                        lineNumber: 20,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl text-black font-sans font-bold relative inline-block",
                                    children: [
                                        "About Us",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-[-4px] left-0 w-1/2 h-[3px] bg-gradient-to-r from-blue-500 to-blue-200",
                                            style: {
                                                width: "30%"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
                                            lineNumber: 27,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
                                    lineNumber: 25,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
                                lineNumber: 24,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-4 text-black opacity-60 text-left",
                                children: "Schoolify is a cutting-edge Learning Management System designed to enhance collaboration and streamline school management. We empower teachers, parents, and students with features tailored to meet their needs."
                            }, void 0, false, {
                                fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
                                lineNumber: 35,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-9 text-black font-bold text-3xl mb-10 text-left",
                                children: "Why Choose Us?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8",
                                children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-lg text-black opacity-60 text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "2",
                                                stroke: "currentColor",
                                                className: "w-5 h-5 text-blue-500 mr-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M5 13l4 4L19 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
                                                    lineNumber: 54,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
                                                lineNumber: 46,
                                                columnNumber: 37
                                            }, this),
                                            feature
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
                                        lineNumber: 42,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
                                lineNumber: 40,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
                lineNumber: 19,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/schoolifylanding/components/Aboutus.jsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = Aboutus;
;
var _c;
__turbopack_refresh__.register(_c, "Aboutus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/schoolifylanding/components/Team.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Team)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-46NETW2U.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$VKW4DPLJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/image/dist/chunk-VKW4DPLJ.mjs [app-client] (ecmascript) <export image_default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$link$2f$dist$2f$chunk$2d$FGDGYNYV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/link/dist/chunk-FGDGYNYV.mjs [app-client] (ecmascript) <export link_default as Link>");
;
var _s = __turbopack_refresh__.signature();
;
;
const teamMembers = [
    {
        name: "Sonal Kethaka Pathinayaka",
        title: "Computer Science Undergraduate",
        description: "I'm a second-year student passionate about frontend and UI/UX, with solid backend skills in Spring Boot.",
        image: "https://nextui.org/images/album-cover.png",
        social: {
            twitter: "https://twitter.com/sonalkethaka",
            linkedin: "https://linkedin.com/in/sonalkethaka",
            github: "https://github.com/sonalkethaka"
        }
    },
    {
        name: "Jane Doe",
        title: "UI/UX Designer",
        description: "Experienced in crafting intuitive and user-friendly interfaces for modern web applications.",
        image: "https://nextui.org/images/card-example-3.jpeg",
        social: {
            twitter: "https://twitter.com/sonalkethaka",
            linkedin: "https://linkedin.com/in/sonalkethaka",
            github: "https://github.com/sonalkethaka"
        }
    },
    {
        name: "John Smith",
        title: "Backend Developer",
        description: "Specialized in building scalable backend solutions with expertise in Java and Spring Boot.",
        image: "https://nextui.org/images/card-example-4.jpeg",
        social: {
            twitter: "https://twitter.com/sonalkethaka",
            linkedin: "https://linkedin.com/in/sonalkethaka",
            github: "https://github.com/sonalkethaka"
        }
    },
    {
        name: "Alice Johnson",
        title: "Frontend Developer",
        description: "Focused on creating seamless and visually appealing user experiences using React and Tailwind.",
        image: "https://nextui.org/images/card-example-2.jpeg",
        social: {
            twitter: "https://twitter.com/sonalkethaka",
            linkedin: "https://linkedin.com/in/sonalkethaka",
            github: "https://github.com/sonalkethaka"
        }
    },
    {
        name: "Robert Brown",
        title: "Data Analyst",
        description: "Driven by insights and data visualization to make impactful decisions and strategies.",
        image: "https://nextui.org/images/card-example-6.jpeg",
        social: {
            twitter: "https://twitter.com/sonalkethaka",
            linkedin: "https://linkedin.com/in/sonalkethaka",
            github: "https://github.com/sonalkethaka"
        }
    },
    {
        name: "Emily White",
        title: "Project Manager",
        description: "Expert in coordinating and managing teams to deliver projects on time and with excellence.",
        image: "https://nextui.org/images/card-example-5.jpeg",
        social: {
            twitter: "https://twitter.com/sonalkethaka",
            linkedin: "https://linkedin.com/in/sonalkethaka",
            github: "https://github.com/sonalkethaka"
        }
    }
];
function Team() {
    _s();
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Team.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Team.useEffect": (entries)=>{
                    entries.forEach({
                        "Team.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add("fade-in");
                                entry.target.classList.remove("fade-out");
                            } else {
                                entry.target.classList.add("fade-out");
                                entry.target.classList.remove("fade-in");
                            }
                        }
                    }["Team.useEffect"]);
                }
            }["Team.useEffect"], {
                threshold: 0.2
            } // Trigger animation when 20% of the card is visible
            );
            cardRefs.current.forEach({
                "Team.useEffect": (card)=>{
                    if (card) {
                        observer.observe(card);
                    }
                }
            }["Team.useEffect"]);
            return ({
                "Team.useEffect": ()=>{
                    cardRefs.current.forEach({
                        "Team.useEffect": (card)=>{
                            if (card) {
                                observer.unobserve(card);
                            }
                        }
                    }["Team.useEffect"]);
                }
            })["Team.useEffect"];
        }
    }["Team.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "team",
        className: "mt-24 mb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl text-black font-sans font-bold relative inline-block",
                    children: [
                        "Team",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute bottom-[-4px] left-0 w-1/2 h-[3px] bg-gradient-to-r from-blue-500 to-blue-200",
                            style: {
                                width: "30%"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-[1200px] mx-auto",
                children: teamMembers.map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$46NETW2U$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                        ref: (el)=>cardRefs.current[index] = el,
                        isBlurred: true,
                        className: "border-none bg-background/60 dark:bg-default-100/50 rounded-xl shadow-md opacity-0 transition-opacity duration-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-12 gap-6 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-12 md:col-span-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$VKW4DPLJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
                                            alt: `${member.name} Photo`,
                                            className: "object-cover rounded-lg",
                                            height: 200,
                                            shadow: "md",
                                            src: member.image,
                                            width: "100%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                            lineNumber: 137,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                        lineNumber: 136,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col col-span-12 md:col-span-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-medium text-foreground",
                                                children: member.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                                lineNumber: 149,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-small text-foreground/80",
                                                children: member.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                                lineNumber: 152,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-medium mt-4 text-foreground/70",
                                                children: member.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                                lineNumber: 153,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 mt-4 justify-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$link$2f$dist$2f$chunk$2d$FGDGYNYV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                                        href: member.social.twitter,
                                                        isExternal: true,
                                                        className: "text-blue-500 hover:text-blue-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            className: "w-5 h-5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.176 0-.353-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996A4.107 4.107 0 0 0 16.616 4c-2.27 0-4.107 1.835-4.107 4.103 0 .32.036.633.106.934a11.654 11.654 0 0 1-8.456-4.287 4.103 4.103 0 0 0 1.27 5.468 4.077 4.077 0 0 1-1.856-.514v.052c0 2.042 1.452 3.742 3.377 4.124a4.1 4.1 0 0 1-1.85.07 4.108 4.108 0 0 0 3.834 2.847 8.233 8.233 0 0 1-5.096 1.757A8.319 8.319 0 0 1 2 19.187a11.616 11.616 0 0 0 6.29 1.842"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                                                lineNumber: 169,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                                            lineNumber: 163,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                                        lineNumber: 158,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$link$2f$dist$2f$chunk$2d$FGDGYNYV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                                        href: member.social.linkedin,
                                                        isExternal: true,
                                                        className: "text-blue-600 hover:text-blue-800",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            className: "w-5 h-5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M20.452 20.452H17.27V14.8c0-1.35-.023-3.086-1.884-3.086-1.887 0-2.176 1.47-2.176 2.984v5.755h-3.186V9.958h3.06v1.438h.044c.425-.806 1.462-1.656 3.012-1.656 3.222 0 3.815 2.121 3.815 4.881v6.832zM4.656 8.339c-1.025 0-1.854-.83-1.854-1.854 0-1.026.829-1.854 1.854-1.854 1.024 0 1.854.828 1.854 1.854s-.83 1.854-1.854 1.854zM5.842 20.452H3.472V9.958h2.37v10.494zM22.223 0H1.771C.792 0 0 .792 0 1.771v20.452C0 23.208.792 24 1.771 24h20.452C23.208 24 24 23.208 24 22.223V1.771C24 .792 23.208 0 22.223 0z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                                                lineNumber: 183,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                                            lineNumber: 177,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                                        lineNumber: 172,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$link$2f$dist$2f$chunk$2d$FGDGYNYV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                                        href: member.social.github,
                                                        isExternal: true,
                                                        className: "text-gray-800 hover:text-black",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            className: "w-5 h-5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 .5C5.455.5 0 5.955 0 12.5a12.1 12.1 0 0 0 8.205 11.545c.6.11.795-.26.795-.578 0-.285-.01-1.04-.015-2.04-3.34.725-4.045-1.6-4.045-1.6-.545-1.385-1.33-1.755-1.33-1.755-1.09-.74.08-.725.08-.725 1.205.085 1.835 1.235 1.835 1.235 1.07 1.83 2.81 1.3 3.5.995.105-.775.415-1.3.755-1.6-2.665-.3-5.465-1.335-5.465-5.93 0-1.31.475-2.385 1.255-3.225-.125-.305-.545-1.53.125-3.18 0 0 1.005-.32 3.3 1.235a11.53 11.53 0 0 1 3.005-.405c1.02 0 2.05.135 3.005.405 2.3-1.555 3.3-1.235 3.3-1.235.675 1.65.255 2.875.125 3.18.775.84 1.255 1.915 1.255 3.225 0 4.61-2.805 5.625-5.475 5.92.43.37.82 1.09.82 2.205 0 1.59-.015 2.88-.015 3.27 0 .315.2.695.81.575A12.11 12.11 0 0 0 24 12.5C24 5.955 18.545.5 12 .5z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                                                lineNumber: 197,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                                            lineNumber: 191,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                                        lineNumber: 186,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                                lineNumber: 157,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                        lineNumber: 148,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                                lineNumber: 134,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                            lineNumber: 133,
                            columnNumber: 25
                        }, this)
                    }, index, false, {
                        fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                        lineNumber: 127,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
                lineNumber: 125,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/schoolifylanding/components/Team.jsx",
        lineNumber: 113,
        columnNumber: 9
    }, this);
}
_s(Team, "nyqydayDKU2pC+rTCyb4pjAG0+4=");
_c = Team;
var _c;
__turbopack_refresh__.register(_c, "Team");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/schoolifylanding/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>LoginPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$schoolifylanding$2f$components$2f$NavbarComponent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/schoolifylanding/components/NavbarComponent.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$schoolifylanding$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/schoolifylanding/components/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$schoolifylanding$2f$components$2f$Features$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/schoolifylanding/components/Features.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$schoolifylanding$2f$components$2f$Aboutus$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/schoolifylanding/components/Aboutus.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$schoolifylanding$2f$components$2f$Team$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/schoolifylanding/components/Team.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$FooterSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/components/FooterSection.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function LoginPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$schoolifylanding$2f$components$2f$NavbarComponent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/schoolifylanding/page.js",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$schoolifylanding$2f$components$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {}, void 0, false, {
                fileName: "[project]/src/app/schoolifylanding/page.js",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$schoolifylanding$2f$components$2f$Features$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/schoolifylanding/page.js",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$schoolifylanding$2f$components$2f$Aboutus$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/schoolifylanding/page.js",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$schoolifylanding$2f$components$2f$Team$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/schoolifylanding/page.js",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$FooterSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterSection"], {}, void 0, false, {
                fileName: "[project]/src/app/schoolifylanding/page.js",
                lineNumber: 18,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/schoolifylanding/page.js",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = LoginPage;
var _c;
__turbopack_refresh__.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/schoolifylanding/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_schoolifylanding_2ea482._.js.map