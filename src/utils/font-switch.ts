/**
 * 运行期字体切换工具函数（浏览器端）
 *
 * 负责：读取/保存当前字体、按需注入字体 <link>、把字体写入 CSS 变量并应用。
 * 供 Navbar 的按钮脚本与初始化脚本共用。
 */

import type { FontSwitchOption } from "@/config/fontSwitchConfig";
import {
	defaultFontSwitchOption,
	fontSwitchCssVar,
	fontSwitchOptions,
	fontSwitchStorageKey,
	getFontSwitchOptionById,
} from "@/config/fontSwitchConfig";

/** 读取当前字体选项（无存档时返回默认字体） */
export function getCurrentFontOption(): FontSwitchOption {
	if (typeof localStorage === "undefined") return defaultFontSwitchOption;
	const id = localStorage.getItem(fontSwitchStorageKey);
	return getFontSwitchOptionById(id);
}

/**
 * 按需注入加载指定字体的 <link rel="stylesheet">（若尚未存在）。
 * 字体加载失败时会静默降级（字体栈中已有系统字体回退）。
 */
export function ensureFontStylesheet(cssUrl?: string): void {
	if (
		!cssUrl ||
		typeof document === "undefined" ||
		typeof document.head === "undefined"
	) {
		return;
	}
	if (document.querySelector(`link[rel="stylesheet"][href="${cssUrl}"]`)) {
		return;
	}
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = cssUrl;
	document.head.appendChild(link);
}

/** 应用指定字体：注入字体源 + 写入 CSS 变量 + 内联应用到 body */
export function applyFontOption(option: FontSwitchOption): void {
	if (typeof document === "undefined") return;

	ensureFontStylesheet(option.cssUrl);

	// 写入 :root 的 CSS 变量（此处为内联样式，优先级最高）
	document.documentElement.style.setProperty(
		fontSwitchCssVar,
		option.fontFamily,
	);

	// 内联设置 body 字体，确保无论其它样式层顺序如何都能立即生效
	if (document.body) {
		document.body.style.fontFamily = option.fontFamily;
	}
}

/** 保存并应用指定 id 的字体 */
export function setFontOption(id: string): void {
	const option = getFontSwitchOptionById(id);
	if (
		typeof localStorage !== "undefined" &&
		typeof localStorage.setItem === "function"
	) {
		localStorage.setItem(fontSwitchStorageKey, option.id);
	}
	applyFontOption(option);
}

/** 循环切换到下一个字体并返回新的字体选项 */
export function cycleFontOption(): FontSwitchOption {
	const current = getCurrentFontOption();
	const currentIndex = fontSwitchOptions.findIndex((o) => o.id === current.id);
	const next = fontSwitchOptions[(currentIndex + 1) % fontSwitchOptions.length];
	setFontOption(next.id);
	return next;
}

/** 初始化（页面加载时）：应用已保存的字体 */
export function initFontSwitch(): void {
	applyFontOption(getCurrentFontOption());
}
