/**
 * 字体切换配置（运行时字体切换）
 *
 * 本配置与 Astro Font API 的字体配置（fontConfig.ts）相互独立：
 * fontConfig.ts 负责“构建期”字体（横幅标题、导航标题、代码块等固定区域），
 * 而这里定义的是“运行期”可由导航栏按钮来回切换的博客正文字体。
 *
 * 运行时字体通过注入 <link rel="stylesheet">（Google Fonts / CDN）按需加载，
 * 从而避免把所有候选字体都塞进构建产物。
 *
 * 切换逻辑由 src/utils/font-switch.ts 提供，按钮位于 src/components/layout/Navbar.astro，
 * 选择结果保存在 localStorage 的 "blogFont" 键中（见 fontSwitchStorageKey）。
 */

export interface FontSwitchOption {
	/** 稳定唯一 id（同时用于 localStorage 存储） */
	id: string;
	/** 展示名称（用于按钮 title / 提示） */
	label: string;
	/**
	 * 应用到 body 的 font-family 栈。
	 * 切换时会把整串值写入 CSS 变量 --font-theme-active。
	 */
	fontFamily: string;
	/**
	 * 可选：加载该字体的 <link rel="stylesheet"> 地址。
	 * 为空表示系统字体，无需额外加载。
	 */
	cssUrl?: string;
	/** 是否作为博客默认字体（首次访问、无存档记录的字体） */
	isDefault?: boolean;
}

/**
 * 运行期字体切换功能开关。
 * 关闭后导航栏不显示字体切换按钮。
 */
export const fontSwitchEnabled = true;

/** localStorage 中保存当前所选字体 id 的键名 */
export const fontSwitchStorageKey = "blogFont";

/** CSS 变量名：当前激活的博客正文字体栈 */
export const fontSwitchCssVar = "--font-theme-active";

/** 系统默认字体回退栈 */
export const systemFontStack =
	"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Roboto, sans-serif";

/**
 * 可切换的字体列表（按此顺序循环）。
 * 第一项为默认字体（可通过 isDefault 显式指定）。
 */
export const fontSwitchOptions: FontSwitchOption[] = [
	{
		id: "lxgw-wenkai",
		label: "霞鹜文楷",
		isDefault: true,
		fontFamily: "'LXGW WenKai', 'LXGW WenKai Screen', '霞鹜文楷', serif",
		// 霞鹜文楷网络字体包（jsdelivr 提供，含 @font-face 与字体文件）
		cssUrl: "https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1/style.css",
	},
	{
		// 主题自带字体（Astro Font API 构建期已加载），切换时无需再从 Google Fonts 加载
		id: "zen-maru-gothic",
		label: "Zen Maru Gothic",
		fontFamily: "'Zen Maru Gothic', 'Yu Gothic', sans-serif",
	},
	{
		// 主题自带字体（Astro Font API 构建期已加载），无需额外 cssUrl
		id: "inter",
		label: "Inter",
		fontFamily: "'Inter', system-ui, sans-serif",
	},
	{
		id: "system",
		label: "系统默认",
		fontFamily: systemFontStack,
	},
];

/** 默认字体选项（用于无存档记录时的初始字体） */
export const defaultFontSwitchOption: FontSwitchOption =
	fontSwitchOptions.find((o) => o.isDefault) ?? fontSwitchOptions[0];

/** 根据 id 查找字体选项。找不到时回退到默认字体。 */
export function getFontSwitchOptionById(
	id: string | null | undefined,
): FontSwitchOption {
	if (!id) return defaultFontSwitchOption;
	return fontSwitchOptions.find((o) => o.id === id) ?? defaultFontSwitchOption;
}
