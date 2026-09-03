/**
 * 首页壁纸贴纸配置（复刻 rainzt 的可拖拽贴纸）
 *
 * 读取 public/sticker/ 下的所有贴纸图，在首页 hero/壁纸区生成多个可拖拽贴纸：
 * - 卡片框内放 2 张（一左一右）：cardStickers 指定的文件名
 * - 其余全部放在“首页第一屏底部居中”横排，彼此留间隔
 * - 均可拖动（鼠标+触屏），自动避开文字（卡片文字/导航文字），不进入文章区
 * - 带轻微旋转、移动端隐藏、每次进入重置到初始位置
 */

export interface HomeWallpaperStickersConfig {
	/** 是否启用 */
	enable: boolean;
	/** 卡片框内的两张贴纸文件名（按顺序：[左, 右]） */
	cardStickers: string[];
	/** 是否在移动端隐藏 */
	hideOnMobile: boolean;
	/** 移动端断点（px） */
	mobileBreakpoint: number;
	/** 贴纸旋转角度（CSS transform rotate） */
	rotation: string;
	/** 贴纸宽度（CSS width 值，响应式） */
	size: string;
	/** 底部一排贴纸之间的间隔（px） */
	gap: number;
	/** 卡片贴纸与卡片边缘的间隔（px） */
	cardSideGap: number;
	/** 底部贴纸离第一屏底部的距离（px） */
	bottomPad: number;
	/** 层级（在壁纸之上，卡片文字之下用避让处理） */
	zIndex: number;
}

export const homeWallpaperStickersConfig: HomeWallpaperStickersConfig = {
	enable: false,
	// 卡片框内左右各一张
	cardStickers: ["furina_final_512.webp", "nilou_final_512.webp"],
	hideOnMobile: true,
	mobileBreakpoint: 768,
	rotation: "-6deg",
	size: "min(105px, 5.47vw, 11.5vh)",
	gap: 48,
	cardSideGap: 16,
	bottomPad: 40,
	zIndex: 25,
};
